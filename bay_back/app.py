from flask import Flask, request, jsonify
from flask_cors import CORS
from model import analyze_health

app = Flask(__name__)
CORS(app)

# Home route
@app.route("/")
def home():
    return "Personal Health AI Backend Running"

# Main AI route
@app.route("/analyze", methods=["POST"])
def analyze():

    data = request.json

    result = analyze_health(data)

    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)