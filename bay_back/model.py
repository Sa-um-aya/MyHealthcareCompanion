def analyze_health(data):

    pain = int(data.get("pain", 0))
    issue = data.get("issue", "")
    duration = data.get("duration", "")
    bmi = float(data.get("bmi", 0))

    medication = ""
    food = ""
    lifestyle = ""
    explanation = ""

    # Headache logic
    if issue == "headache":

        medication = "Paracetamol may help relieve headache pain."
        food = "Drink plenty of water and eat bananas."
        lifestyle = "Reduce screen exposure and take proper rest."

        explanation = "Headache symptoms detected from user input."

    # Stomach logic
    elif issue == "stomach":

        medication = "Antacids may help reduce stomach discomfort."
        food = "Eat rice, yogurt and bananas."
        lifestyle = "Avoid spicy and oily foods."

        explanation = "Digestive discomfort detected."

    # Muscle pain logic
    elif issue == "muscle":

        medication = "Anti-inflammatory medicine may help."
        food = "Protein rich foods like eggs and lentils."
        lifestyle = "Do stretching and apply warm compress."

        explanation = "Muscle strain detected."

    # Fatigue logic
    elif issue == "fatigue":

        medication = "Multivitamins may help."
        food = "Eat fruits and balanced meals."
        lifestyle = "Ensure proper sleep."

        explanation = "Fatigue symptoms detected."

    # Fever logic
    elif issue == "fever":

        medication = "Paracetamol may help reduce fever."
        food = "Soup, fruits and fluids."
        lifestyle = "Take rest and stay hydrated."

        explanation = "Fever symptoms detected."

    # Pain level explanation
    if pain >= 7:

        lifestyle += " High pain level detected. Doctor consultation recommended."
        explanation += " Pain level above 7 triggered medical advice."

    # BMI analysis
    if bmi > 25:

        lifestyle += " Maintain healthy diet and exercise regularly."

    return {

        "medication": medication,
        "food": food,
        "lifestyle": lifestyle,
        "explanation": explanation

    }