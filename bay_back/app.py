from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from model import analyze_health

app = Flask(
    __name__,
    template_folder="../paindashboard",
    static_folder="../paindashboard"
)

CORS(app)

# homepage
@app.route("/")
def index():
    return render_template("index.html")

# health page
@app.route("/health")
def health():
    return render_template("health.html")

# pain page
@app.route("/pain")
def pain():
    return render_template("pain.html")

# results page
@app.route("/results")
def results():
    return render_template("results.html")

# analyze API
@app.route("/analyze", methods=["POST"])
def analyze():

    data = request.get_json()
    print("Data received:", data) 

    pain = int(data.get("pain",0))
    issue = data.get("issue","")
    duration = data.get("duration")
    bmi = float(data.get("bmi",0))

    result = analyze_health(pain, issue, duration, bmi)
    print("Result:", result)   # DEBUG LINE


    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True)