/* SAVE USER INFO */

function saveUser(){

let name=document.getElementById("name").value
let age=document.getElementById("age").value
let weight=document.getElementById("weight").value
let height=document.getElementById("height").value

if(!name || !age || !weight || !height){
alert("Please fill all fields")
return
}

let bmi=weight/((height/100)*(height/100))

localStorage.setItem("name",name)
localStorage.setItem("age",age)
localStorage.setItem("bmi",bmi.toFixed(1))

window.location="pain.html"

}


/* PAIN PAGE */

const slider=document.getElementById("painSlider")

if(slider){

slider.addEventListener("input",function(){

document.getElementById("painValue").textContent=slider.value

})

}

function savePain(){

localStorage.setItem("pain",slider.value)

window.location="health.html"

}


/* HEALTH PAGE */

function saveHealth(){

let issue=document.getElementById("issue").value
let duration=document.getElementById("duration").value
let symptoms=document.getElementById("symptoms").value

localStorage.setItem("issue",issue)
localStorage.setItem("duration",duration)
localStorage.setItem("symptoms",symptoms)

window.location="results.html"

}


/* RESULTS PAGE */

if(window.location.pathname.includes("results.html")){

let name=localStorage.getItem("name")
let age=localStorage.getItem("age")
let bmi=localStorage.getItem("bmi")
let pain=parseInt(localStorage.getItem("pain"))
let issue=localStorage.getItem("issue")
let duration=localStorage.getItem("duration")

let medication=""
let food=""
let lifestyle=""
let explanation=""

if(issue==="headache"){

medication="Paracetamol may help relieve headache pain."
food="Drink water and eat magnesium-rich foods like bananas."
lifestyle="Reduce screen exposure and rest."

explanation="Headache symptoms combined with pain rating triggered headache treatment advice."

}

else if(issue==="stomach"){

medication="Antacids may help with stomach discomfort."
food="Eat light foods like rice, bananas and yogurt."
lifestyle="Avoid spicy foods."

explanation="Digestive discomfort detected based on user symptoms."

}

else if(issue==="muscle"){

medication="Anti-inflammatory medication recommended."
food="Protein rich foods to support muscle recovery."
lifestyle="Stretching and warm compress."

explanation="Muscle pain combined with pain score triggered recovery recommendations."

}

else if(issue==="fatigue"){

medication="No medication required."
food="Iron rich foods like spinach and lentils."
lifestyle="Get enough sleep and hydration."

explanation="Fatigue symptoms detected based on user input."

}

else if(issue==="fever"){

medication="Paracetamol recommended if fever persists."
food="Soups and fruits."
lifestyle="Rest and hydration."

explanation="Fever symptoms triggered temperature management advice."

}

if(pain>=7){

lifestyle+=" Medical consultation recommended."

explanation+=" Pain level above 7 indicates severe discomfort."

}

document.getElementById("medication").textContent=medication
document.getElementById("food").textContent=food
document.getElementById("lifestyle").textContent=lifestyle

document.getElementById("explanation").textContent=
"Explainable AI: Based on your pain score ("+pain+"), issue ("+issue+"), duration ("+duration+"), and BMI ("+bmi+"), Baymax generated these recommendations. "+explanation

}