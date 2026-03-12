def analyze_health(pain, issue, duration, bmi):

    # Default recommendations
    medication = "Paracetamol"
    food = "Drink plenty of water and eat light meals"
    lifestyle = "Take rest and reduce screen time"
    explanation = "Your symptoms suggest a mild condition."

    # More specific logic
    if issue == "headache":
        if pain >= 7:
            medication = "Ibuprofen"
            food = "Hydrate and avoid caffeine"
            lifestyle = "Rest in a dark room"
            explanation = "You may be experiencing a migraine."

    # -------- RISK LEVEL --------
    risk = "Low"

    if pain >= 7:
        risk = "High"

    if bmi > 30:
        risk = "Medium"

    # -------- HEALTH SCORE --------
    score = 100

    score -= pain * 5

    if bmi > 25:
        score -= 10

    if duration == "days":
        score -= 10

    if score < 0:
        score = 0

    return {
        "medication": medication,
        "food": food,
        "lifestyle": lifestyle,
        "explanation": explanation,
        "risk": risk,
        "health_score": score
    }