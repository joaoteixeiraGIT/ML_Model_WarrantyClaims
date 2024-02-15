from flask import Flask, request, jsonify
#request is for HTTP requests, jsonify converts a Python dictionary into a JSON response
import pickle
import pandas as pd
from flask_cors import CORS  # Import the CORS module to webpage and API in different ips be able to communicate

app = Flask(__name__)
CORS(app)

# Load the trained model and extract the preprocessing and model steps
with open('FraudDetectionModel_pipeline.pkl', 'rb') as model_file:
    pipeline = pickle.load(model_file)

preprocessor = pipeline.named_steps["preprocessor"]
model = pipeline.named_steps["classifier"]

# Define API endpoint
@app.route('/predict', methods=['POST'])
def predict():
    try:

        print(request.method)
        # Get data from the request in JSON format
        data = request.get_json()

        # Preprocess the features
        features_preprocessed = preprocessor.transform(pd.DataFrame([data]))

        # Perform prediction
        prediction = model.predict_proba(features_preprocessed)[:, 1][0]
        print(prediction);

        # Return the prediction as JSON response
        return jsonify({"prediction": prediction})

    except Exception as e:
        return jsonify({'error': str(e)})

#Run app
if __name__ == '__main__':
    app.run(debug=True, port=1234)



