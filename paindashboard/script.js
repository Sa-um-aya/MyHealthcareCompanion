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

async function getResults(){

let pain=localStorage.getItem("pain")
let issue=localStorage.getItem("issue")
let duration=localStorage.getItem("duration")
let bmi=localStorage.getItem("bmi")

let response = await fetch("http://127.0.0.1:5000/analyze",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({
pain:pain,
issue:issue,
duration:duration,
bmi:bmi
})

})

let data = await response.json()

document.getElementById("medication").textContent=data.medication
document.getElementById("food").textContent=data.food
document.getElementById("lifestyle").textContent=data.lifestyle

document.getElementById("explanation").textContent=
"Explainable AI: Based on your pain score ("+pain+"), issue ("+issue+"), duration ("+duration+"), and BMI ("+bmi+"), Baymax generated these recommendations. "+data.explanation

}

getResults()

}