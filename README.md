# Personalized Healthcare Pathway Recommendation Using Explainable AI

> **"I am Baymax, your personal healthcare companion."**

Healthcare should feel supportive, understandable, and personal — not confusing or intimidating.

This project is a **Personalized Medical Recommendation System** that predicts diseases based on user symptoms and provides **clear explanations using Explainable AI (SHAP)**.

---

## 🚀 Features

- 🔍 Disease prediction using Machine Learning (SVM)
- 🧠 Explainable AI using SHAP
- 💊 Personalized recommendations:
  - Medications
  - Precautions
  - Diet plans
  - Workouts
- 🌐 Flask-based web application
- 🎤 Speech input support (browser-based)

---

## 🧠 How It Works

1. User enters symptoms
2. Symptoms are converted into a feature vector (132 features)
3. SVM model predicts disease
4. SHAP explains which symptoms influenced the prediction
5. System returns:
   - Disease name
   - Description
   - Precautions
   - Medications
   - Diet & Workout

---

## ⚙️ Tech Stack

### Backend
- Python
- Flask

### Machine Learning
- Scikit-learn (SVM)
- SHAP (Explainable AI)

### Frontend
- HTML
- Bootstrap

---

## 📊 Explainable AI (SHAP)

The system uses SHAP to explain predictions:

- Which symptoms increased risk
- Which symptoms decreased risk
- Top contributing factors

Example:
> “Fever and cough were the strongest contributors to the prediction.”

---

## 🧪 Project Structure
