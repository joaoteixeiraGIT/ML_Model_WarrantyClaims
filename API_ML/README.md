# API Description
The API component of this project serves as the backend system responsible for handling requests from the frontend, processing data, and providing predictions based on the machine learning model.

# Features:
Prediction Endpoint: Exposes an endpoint to receive input data and return predictions from the trained machine learning model.
Data Processing: Processes incoming data to prepare it for prediction by the model.
Response Formatting: Formats the prediction results in a structured format for easy consumption by the frontend.
CORS Handling: Implements Cross-Origin Resource Sharing (CORS) policies to allow requests from authorized domains.

# Technologies Used:
Python: Backend programming language used for building the API.
Flask: Lightweight web framework for Python used to develop the RESTful API endpoints.
Pandas and NumPy: Libraries for data manipulation and numerical computing, used for data processing tasks.
Scikit-learn: Machine learning library in Python used for model training and predictions.

# Setup and Usage:
Installation: Ensure Python and required dependencies are installed. Use pip to install dependencies listed in requirements.txt.
Run the API: Execute app.py to start the Flask server hosting the API.
Access Endpoints: Once the API is running, access the defined endpoints to interact with the system.
