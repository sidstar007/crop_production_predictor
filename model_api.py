from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
import tensorflow as tf
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)

crop_model = joblib.load('crop_rfr_model.pkl')

# Load the dataset and preprocess it
dataset = pd.read_csv("data\\crop_production.csv")
dataset.dropna(inplace=True)  # Removing null values from the dataset
dataset = dataset[dataset['Production'] != 0]  # Removing values where production is zero
dataset = pd.get_dummies(data=dataset)
x_columns = dataset.drop('Production', axis=1).columns

@app.route('/', methods=['POST'])
def predict():
    data = request.get_json()

    state = data['State_Name']
    district = data['District_Name']
    crop_year = int(data['Crop_Year'])
    season = data['Season']
    crop = data['Crop']
    area = int(data['Area'])

    new_data = pd.DataFrame({'State_Name': [state], 'District_Name': [district], 'Crop_Year': [crop_year],
                             'Season': [season], 'Crop': [crop], 'Area': [area]})
    categorical_columns = ['State_Name', 'District_Name', 'Season', 'Crop']
    new_data = pd.get_dummies(new_data, columns=categorical_columns)

    for col in x_columns:
        if col not in new_data.columns:
            new_data[col] = 0

    new_data = new_data.reindex(columns=x_columns, fill_value=0)

    pred = crop_model.predict(new_data)

    return jsonify({"production": pred[0]})

if __name__ == '__main__':
    app.run(port=8070)
