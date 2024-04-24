from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin
from flask_jwt_extended import create_access_token, jwt_required, current_user, JWTManager
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SECRET_KEY'] = 'your_secret_key'
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'
CORS(app)

db = SQLAlchemy(app)
login_manager = LoginManager(app)
jwt = JWTManager(app)

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return f"User('{self.email}')"
    
class Products(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100), nullable = False)
    url = db.Column(db.String(200), nullable = False)
    original_price = db.Column(db.Integer)
    discounted_price = db.Column(db.Integer)

    def __repr__(self):
        return f"name:{self.name}"

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    if user:
        return jsonify({'message': 'User already exists'}), 400
    hashed_password = generate_password_hash(data['password'])
    user = User(username=data['username'], email=data['email'], password=hashed_password)
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    if not user or not check_password_hash(user.password, data['password']):
        return jsonify({'message': 'Invalid credentials'}), 401
    access_token = create_access_token(identity=user.id)
    return jsonify({'access_token': access_token}), 200

@app.route('/add-product', methods=["POST"])
def addProduct():
    data = request.get_json()
    product = Products.query.filter_by(name=data['name']).first()
    if product:
        return jsonify({'message': 'Product already exists'}), 400
    product = Products(name=data['name'], url=data['url'], original_price=data['original_price'] , discounted_price=data['discounted_price'])
    db.session.add(product)
    db.session.commit()
    return jsonify({'message': 'Product added successfully'}), 201

@app.route('/products', methods=['GET'])
def products():
    all_products = Products.query.all()
    # Serialize Products objects to dictionaries
    serialized_products = [
        {
            'id': product.id,
            'name': product.name,
            'url': product.url,
            'original_price': product.original_price,
            'discounted_price': product.discounted_price
        }
        for product in all_products
    ]
    return jsonify(serialized_products), 200

@app.route('/update-product/<int:product_id>', methods=['PUT'])
def update_product(product_id):
    data = request.json
    product =Products.query.filter_by(id=product_id).first()
    if product:
        product.name = data.get('name', product.name)
        product.url = data.get('url', product.url)
        product.original_price = data.get('original_price', product.original_price)
        product.discounted_price = data.get('discounted_price', product.discounted_price)
        db.session.commit()
        return jsonify({'message': 'Product updated successfully'}), 200
    else:
        return jsonify({'message': 'Product not found'}), 404
    
@app.route('/delete-product/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    product = Products.query.get(product_id)
    if product:
        db.session.delete(product)
        db.session.commit()
        return jsonify({'message': 'Product deleted successfully'}), 200
    else:
        return jsonify({'message': 'Product not found'}), 404

@app.route('/protected')
@jwt_required()
def protected():
    return jsonify({'message': f'Hello, {current_user.email}'}), 200

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
