# Website Description
The website component of this project serves as the frontend interface for users to interact with the machine learning model predictions.
It provides a user-friendly interface for submitting input data, viewing predictions, and accessing additional information about the project.

# Features:
Input Form: Provides a form for users to input relevant data required for making predictions.
Prediction Display: Displays prediction results to the user in a clear and understandable format.
Responsive Design: Ensures the website is accessible and usable across various devices and screen sizes.

# Technologies Used:
HTML, CSS, JavaScript: Frontend development languages used for building the website's structure, styling, and interactivity.
Bootstrap: Frontend framework for designing responsive and mobile-first websites.
Fetch API: Used for making asynchronous requests to the backend API to fetch predictions.

# Setup and Usage (Dockerfile):
 > Run docker build -t <image_name> . in the directory containing the Dockerfile to build the Docker image.
 > Execute docker run -p <host_port>:<container_port> -d <image_name> to start the Docker container.
 Access the Website:
 > Open a web browser and navigate to "http://localhost:<host_port>" to access the website.
