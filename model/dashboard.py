import dash
from dash import dcc, html, Input, Output
import plotly.graph_objs as go
import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import plotly.express as px
import dash_bootstrap_components as dbc
import pickle
import pmdarima as pm
import random

# Load the ARIMA model
with open('calories.pkl', 'rb') as f:
    stepwise_model = pickle.load(f)

# Load the dataset
df = pd.read_csv('dailyActivity-all.csv')

# Convert 'ActivityDate' column to datetime format
df['ActivityDate'] = pd.to_datetime(df['ActivityDate'])

# Define colors
colors = {
    'background': 'white',
    'text': 'black',
    'plot_background': '#CCCCCC'
}

# Initialize the Dash app
app = dash.Dash(__name__, external_stylesheets=[dbc.themes.BOOTSTRAP])

# Define diet plans for each card
diet_plans = {
    1: ["Breakfast: Eggs, toast, and fruit", "Lunch: Grilled chicken salad", "Dinner: Baked salmon with vegetables", "Snack: Greek yogurt with berries"],
    2: ["Breakfast: Oatmeal with nuts and honey", "Lunch: Quinoa salad with avocado", "Dinner: Stir-fried tofu with vegetables", "Snack: Apple slices with peanut butter"],
    3: ["Breakfast: Smoothie with spinach, banana, and protein powder", "Lunch: Turkey wrap with lettuce and tomato", "Dinner: Grilled shrimp with quinoa", "Snack: Cottage cheese with pineapple"],
    4: ["Breakfast: Whole grain cereal with milk", "Lunch: Lentil soup with whole grain bread", "Dinner: Baked chicken with sweet potato", "Snack: Carrot sticks with hummus"],
    5: ["Breakfast: Greek yogurt with granola and honey", "Lunch: Spinach salad with grilled steak", "Dinner: Roasted vegetables with couscous", "Snack: Almonds and dried fruit"]
}

exercises = [
    "Push-ups",
    "Sit-ups",
    "Jumping Jacks",
    "Squats",
    "Plank",
    "Lunges",
    "High Knees",
    "Burpees",
    "Mountain Climbers",
    "Bicycle Crunches"
]

# Define layout
app.layout = html.Div(
    style={'background-color': colors['background'], 'background-image': 'url("fitnessimage.jpg")'},
    children=[
        html.Div([
            html.H1("Fitness Tracker Dashboard", style={'color': colors['text'], 'text-align': 'center', 'margin-top':'5px'}),
            dcc.DatePickerSingle(
                id='date-picker',
                min_date_allowed=df['ActivityDate'].min(),
                max_date_allowed=df['ActivityDate'].max(),
                initial_visible_month=df['ActivityDate'].max(),
                date=df['ActivityDate'].max(),
                display_format='DD-MM-YYYY'
            )
        ]),
        dbc.Row([
            dbc.Col([
                dcc.Graph(id='activity-plot', style={'height': '600px', 'width': '400px'})
            ]),
            dbc.Col([
                dcc.Graph(id='pie-chart', style={'height': '600px', 'width': '400px'})
            ])
        ]),
        html.Div([
            dcc.RangeSlider(
                id='date-range-slider',
                min=df['ActivityDate'].min().timestamp(),
                max=df['ActivityDate'].max().timestamp(),
                step=24*60*60,  # 1 day
                marks={date.timestamp(): date.strftime('%d/%m/%Y') for date in pd.date_range(start=df['ActivityDate'].min(), end=df['ActivityDate'].max(), freq='D')},
                value=[df['ActivityDate'].min().timestamp(), df['ActivityDate'].max().timestamp()]
            )
        ], style={'margin': '2px'}),
        html.Div([
            dbc.Row([
                dbc.Col([
                    dcc.Graph(id='line-plot', style={'height': '600px', 'width': '600px'})
                ]),
                dbc.Col([
                    dcc.Graph(id='scatter-plot', style={'height': '600px', 'width': '400px'})
                ])
            ]),
            html.Div([
                html.H2('Calorie Prediction', style={'color': colors['text'], 'text-align': 'center'}),
                dcc.Input(id='input-value', type='number', placeholder='Enter a value', style={'margin-bottom': '10px'}),
                html.Div(id='output-prediction', style={'color': colors['text'], 'text-align': 'center'}),
                dcc.Graph(id='predicted-line-plot', style={'height': '400px', 'width': '800px'})
            ])
        ]),
        html.Div([
            html.H2('Diet Plans', style={'color': colors['text'], 'text-align': 'center'}),
            dbc.Row([
                dbc.Col([
                    dbc.Card([
                        dbc.CardHeader("Card 1"),
                        dbc.CardBody([
                            html.H4("Diet Plan", className="card-title"),
                            html.P("Click to see the diet plan", className="card-text"),
                            html.Div(id='card-1-diet', n_clicks=0, style={'cursor': 'pointer'})
                        ]),
                    ], color="secondary", inverse=True),
                ], width=2),
                dbc.Col([
                    dbc.Card([
                        dbc.CardHeader("Card 2"),
                        dbc.CardBody([
                            html.H4("Diet Plan", className="card-title"),
                            html.P("Click to see the diet plan", className="card-text"),
                            html.Div(id='card-2-diet', n_clicks=0, style={'cursor': 'pointer'})
                             
                        ]),
                    ], color="secondary", inverse=True),
                ], width=2),
                dbc.Col([
                    dbc.Card([
                        dbc.CardHeader("Card 3"),
                        dbc.CardBody([
                            html.H4("Diet Plan", className="card-title"),
                            html.P("Click to see the diet plan", className="card-text"),
                            html.Div(id='card-3-diet', n_clicks=0, style={'cursor': 'pointer'})
                        ]),
                    ], color="secondary", inverse=True),
                ], width=2),
                dbc.Col([
                    dbc.Card([
                        dbc.CardHeader("Card 4"),
                        dbc.CardBody([
                            html.H4("Diet Plan", className="card-title"),
                            html.P("Click to see the diet plan", className="card-text"),
                            html.Div(id='card-4-diet', n_clicks=0, style={'cursor': 'pointer'})
                        ]),
                    ], color="secondary", inverse=True),
                ], width=2),
                dbc.Col([
                    dbc.Card([
                        dbc.CardHeader("Card 5"),
                        dbc.CardBody([
                            html.H4("Diet Plan", className="card-title"),
                            html.P("Click to see the diet plan", className="card-text"),
                            html.Div(id='card-5-diet', n_clicks=0, style={'cursor': 'pointer'})
                        ]),
                    ], color="secondary", inverse=True),
                ], width=2),
            ])
        ]),
         html.Div([
            html.H1("Exercise Planner", style={'color': colors['text'], 'text-align': 'center'}),
            html.Div([
                html.Label("Select Duration (minutes):", style={'color': colors['text']}),
                dcc.Dropdown(
                    id='duration-dropdown',
                    options=[
                        {'label': '15', 'value': 15},
                        {'label': '30', 'value': 30},
                        {'label': '45', 'value': 45},
                        {'label': '60', 'value': 60}
                    ],
                    placeholder='Select Duration'
                )
            ]),
            html.Div([
                html.Label("Enter Calories to Burn:", style={'color': colors['text']}),
                dcc.Input(id='calories-input', type='number', placeholder='Enter Calories', style={'margin-bottom': '10px'})
            ])
        ]),
        html.Div([
            html.H3("Exercise List", style={'color': colors['text']}),
            html.Ul(id='exercise-list', style={'color': colors['text']})
        ])
    ]
)

# Callbacks for updating the graphs

@app.callback(
    Output('activity-plot', 'figure'),
    [Input('date-picker', 'date')]
)
def update_activity_plot(selected_date):
    selected_date = pd.to_datetime(selected_date)
    filtered_df = df[df['ActivityDate'] == selected_date]

    if filtered_df.empty:
        return {
            'data': [],
            'layout': html.Div('No data available for selected date.')
        }

    # Create a bar chart to display the activity metrics
    bar_chart = go.Figure()
    for col in filtered_df.columns[1:]:
        if col in ['TotalSteps', 'LightlyActiveMinutes', 'SedentaryMinutes','Calories','TotalDistance']:
            bar_chart.add_trace(go.Bar(x=[col], y=[filtered_df[col].iloc[0]], name=col))

    # Update layout of the bar chart
    bar_chart.update_layout(
        title=f'Activity Metrics for {selected_date.strftime("%Y-%m-%d")}',
        xaxis_title='Activity Metric',
        yaxis_title='Value',
        plot_bgcolor=colors['plot_background'],
        paper_bgcolor=colors['background'],
        font=dict(color=colors['text']),
        height=400,
        width=800
    )

    # Ensure the y-axis is set to a linear scale
    bar_chart.update_yaxes(type="linear")

    return bar_chart

@app.callback(
    Output('pie-chart', 'figure'),
    [Input('date-picker', 'date')]
)
def update_pie_chart(selected_date):
    selected_date = pd.to_datetime(selected_date)
    filtered_df = df[df['ActivityDate'] == selected_date]

    if filtered_df.empty:
        return {
            'data': [],
            'layout': html.Div('No data available for selected date.')
        }

    # Create a pie chart to display the distribution of activity types
    pie_chart = go.Figure(go.Pie(labels=filtered_df.columns[1:],
                                  values=filtered_df.iloc[0, 1:],
                                 hole=0.5,
                                  textinfo='none'))

    # Update layout of the pie chart
    pie_chart.update_layout(
        title=f'Activity Distribution for {selected_date.strftime("%Y-%m-%d")}',
        plot_bgcolor=colors['plot_background'],
        paper_bgcolor=colors['background'],
        font=dict(color=colors['text']),
        height=400,
        width=600
    )

    return pie_chart

@app.callback(
    Output('line-plot', 'figure'),
    [Input('date-range-slider', 'value')]
)
def update_line_plot(date_range):
    start_date = datetime.fromtimestamp(date_range[0])
    end_date = datetime.fromtimestamp(date_range[1])
    filtered_df = df[(df['ActivityDate'] >= start_date) & (df['ActivityDate'] <= end_date)]

    # Aggregate data by date
    aggregated_df = filtered_df.groupby('ActivityDate').agg({'TotalSteps': 'sum'}).reset_index()

    line_plot = px.line(aggregated_df, x='ActivityDate', y='TotalSteps', title='Total Steps Over Time')
    line_plot.update_layout(
        plot_bgcolor=colors['plot_background'],
        paper_bgcolor=colors['background'],
        font=dict(color=colors['text']),
        height=300,
        width=800
    )

    return line_plot

@app.callback(
    Output('scatter-plot', 'figure'),
    [Input('date-range-slider', 'value')]
)
def update_scatter_plot(date_range):
    start_date = datetime.fromtimestamp(date_range[0])
    end_date = datetime.fromtimestamp(date_range[1])
    filtered_df = df[(df['ActivityDate'] >= start_date) & (df['ActivityDate'] <= end_date)]

    scatter_plot = go.Figure()
    scatter_plot.add_trace(go.Scatter(x=filtered_df['SedentaryMinutes'], y=filtered_df['VeryActiveMinutes'], mode='markers'))

    scatter_plot.update_layout(
        title='Sedentary vs Very Active Minutes',
        xaxis_title='Sedentary Minutes',
        yaxis_title='Very Active Minutes',
        plot_bgcolor=colors['plot_background'],
        paper_bgcolor=colors['background'],
        font=dict(color=colors['text']),
        height=400,
        width=400
    )

    return scatter_plot

@app.callback(
    Output('predicted-line-plot', 'figure'),
    [Input('input-value', 'value')]
)
def predict_calorie(input_value):
    if input_value is None:
        return {}

    # Generate forecasts for future periods
    future_forecast = stepwise_model.predict(n_periods=int(input_value))

    # Create a line plot for the forecast
    predicted_line_plot = go.Figure()
    predicted_line_plot.add_trace(go.Scatter(x=list(range(len(future_forecast))), y=future_forecast, mode='lines', name='Forecast'))

    # Update layout of the line plot
    predicted_line_plot.update_layout(
        title='Future Forecast',
        xaxis_title='Period',
        yaxis_title='Forecast',
        plot_bgcolor=colors['plot_background'],
        paper_bgcolor=colors['background'],
        font=dict(color=colors['text']),
        height=300,
        width=800
    )

    return predicted_line_plot


# Callbacks for the diet plan cards

@app.callback(
    Output('card-1-diet', 'children'),
    [Input('card-1-diet', 'n_clicks')]
)
def display_card_1_diet(n_clicks):
    if n_clicks is None:
        return html.P("Click to see the diet plan", className="card-text")

    diet_plan = random.choice(diet_plans[1])
    return html.P(diet_plan, className="card-text")

@app.callback(
    Output('card-2-diet', 'children'),
    [Input('card-2-diet', 'n_clicks')]
)
def display_card_2_diet(n_clicks):
    if n_clicks is None:
        return html.P("Click to see the diet plan", className="card-text")

    diet_plan = random.choice(diet_plans[2])
    return html.P(diet_plan, className="card-text")

@app.callback(
    Output('card-3-diet', 'children'),
    [Input('card-3-diet', 'n_clicks')]
)
def display_card_3_diet(n_clicks):
    if n_clicks is None:
        return html.P("Click to see the diet plan", className="card-text")

    diet_plan = random.choice(diet_plans[3])
    return html.P(diet_plan, className="card-text")

@app.callback(
    Output('card-4-diet', 'children'),
    [Input('card-4-diet', 'n_clicks')]
)
def display_card_4_diet(n_clicks):
    if n_clicks is None:
        return html.P("Click to see the diet plan", className="card-text")

    diet_plan = random.choice(diet_plans[4])
    return html.P(diet_plan, className="card-text")

@app.callback(
    Output('card-5-diet', 'children'),
    [Input('card-5-diet', 'n_clicks')]
)
def display_card_5_diet(n_clicks):
    if n_clicks is None:
        return html.P("Click to see the diet plan", className="card-text")

    diet_plan = random.choice(diet_plans[5])
    return html.P(diet_plan, className="card-text")

@app.callback(
    Output('exercise-list', 'children'),
    [Input('duration-dropdown', 'value'),
     Input('calories-input', 'value')]
)

def generate_exercise_list(duration, calories):
    if not duration or not calories:
        return []

    # Calculate the number of exercises to include based on calories burned per exercise
    calories_per_exercise = 50  # Assume each exercise burns 50 calories
    num_exercises = int(calories / calories_per_exercise)

    # Randomly select exercises
    selected_exercises = random.sample(exercises, min(num_exercises, len(exercises)))

    # Calculate duration per exercise
    duration_per_exercise = int(duration / len(selected_exercises))

    # Generate exercise list
    exercise_list = []
    for exercise in selected_exercises:
        exercise_list.append(html.Li(f"{exercise} - {duration_per_exercise} minutes"))

    return exercise_list

if __name__ == '__main__':
    app.run_server(debug=True, port=8020)


