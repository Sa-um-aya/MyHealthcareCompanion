from flask import Blueprint, render_template, request
from flask_login import login_required, current_user
main = Blueprint("main", __name__)
@main.route('/')
def home():
    return render_template("home.html")

# Home page
@main.route("/")
def index():
    return render_template("index.html")


# Health form page
@main.route("/health")
def health():
    return render_template("health.html")


# Receive symptom form and move to pain page
@main.route("/pain", methods=["POST"])
def pain():

    issue = request.form.get("issue")
    duration = request.form.get("duration")
    symptoms = request.form.get("symptoms")

    print(issue, duration, symptoms)

    return render_template("pain.html")


# Final analysis page
@main.route("/result", methods=["POST"])
def result():

    pain = request.form.get("pain")

    if int(pain) > 7:
        condition = "Severe pain detected"
        advice = "Please consult a doctor immediately."
    else:
        condition = "Mild condition"
        advice = "Rest, hydration, and monitoring recommended."

    return render_template(
        "results.html",
        condition=condition,
        advice=advice
    )
@main.route("/dashboard")
@login_required
def dashboard():
    return render_template("dashboard.html", user=current_user)


@main.route("/profile", methods=["GET","POST"])
@login_required
def profile():

    if request.method == "POST":

        current_user.age = request.form["age"]
        current_user.gender = request.form["gender"]
        current_user.height = request.form["height"]
        current_user.weight = request.form["weight"]
        current_user.lifestyle = request.form["lifestyle"]
        current_user.family_history = request.form["family_history"]

        db.session.commit()

    return render_template("profile.html", user=current_user)