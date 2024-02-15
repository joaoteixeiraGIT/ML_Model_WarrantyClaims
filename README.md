# ML_Model_WarrantyClaims

This repository contains the implementation of a machine learning model developed to predict warranty claims in the consumer electronics industry. This was my first contact with Machine Learning algorithms and I did this work while studying on the Faculty of Electrical Engineering and Computer Science at University of Maribor. 

The project comprises three main components: a machine learning model developed on Google Colab, an API built for serving predictions, and a website for user interaction.

# 1. Machine Learning Model (Google Colab)
The model is trained using a dataset containing various features related to warranty claims, such as consumer profile, product category, product type, issues reported, claim value, service center details, product age, purchase source, call details, and purpose.
It was trained using a labeled dataset, where each data point is associated with a binary label indicating whether the warranty claim was successful or fraudulent. Evaluation metrics such as accuracy, precision, recall, and F1-score were used to assess the performance of the best algorithm to be used in the model. 

# 2. API Development
The API, developed using Python and Flask, exposes endpoints to receive input data and return model predictions. It provides a seamless interface for integrating the predictive model into various applications and systems.

# 3. Website Implementation
To facilitate user interaction and streamline the warranty claim process, I designed and implemented a user-friendly website. The website serves as a frontend interface for users to input relevant data and receive predictions from the model.

# Usage:
The model can be deployed as a web service or integrated into existing systems for real-time prediction.
The model implementation requires the following dependencies:
 -Python (version 3.10.13)
 -Libraries: NumPy, Pandas, Scikit-learn, TensorFlow, etc. (see requirements.txt for full list)

