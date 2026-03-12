// ===============================
// Baymax typing animation
// ===============================

function typeMessage(text){

const message = document.getElementById("baymax-message");
if(!message) return;

message.innerText="";
let i=0;

function typing(){
if(i < text.length){
message.textContent += text.charAt(i);
i++;
setTimeout(typing,35);
}
}

typing();
blinkEyes();
}


// ===============================
// Baymax eye blink
// ===============================

function blinkEyes(){

const eyes=document.querySelectorAll(".eye");

eyes.forEach(eye=>{
eye.style.transform="scaleY(0.1)";
});

setTimeout(()=>{
eyes.forEach(eye=>{
eye.style.transform="scaleY(1)";
});
},200);

}

// random blinking
setInterval(blinkEyes,5000);


// ===============================
// HEIGHT + WEIGHT VALIDATION
// ===============================

function checkHeightWeight(){

const height=document.getElementById("height")?.value;
const weight=document.getElementById("weight")?.value;

if(!height || !weight) return true;

if(height > 220){
typeMessage("Are you sure you're that tall?");
return false;
}

if(height < 120){
typeMessage("Are you sure you're that short?");
return false;
}

if(weight > 200){
typeMessage("Are you sure you weigh that much?");
return false;
}

if(weight < 30){
typeMessage("Are you sure you weigh that less?");
return false;
}

return true;

}


// ===============================
// VALIDATE + SAVE USER
// ===============================

function validateAndSaveUser(){

if(!checkHeightWeight()){
return false;
}

saveUser();
return false;

}


// ===============================
// SAVE USER INFO
// ===============================

function saveUser(){

const user={
name:document.getElementById("name").value,
age:document.getElementById("age").value,
weight:document.getElementById("weight").value,
height:document.getElementById("height").value
};

localStorage.setItem("user",JSON.stringify(user));

window.location.href="/health";

}


// ===============================
// SAVE HEALTH DATA
// ===============================

function saveHealth(){

const health={
issue:document.getElementById("issue").value,
duration:document.getElementById("duration").value,
symptoms:document.getElementById("symptoms").value
};

localStorage.setItem("health",JSON.stringify(health));

window.location.href="/pain";

}


// ===============================
// PAIN SLIDER DISPLAY
// ===============================

const slider=document.getElementById("painSlider");

if(slider){

const value=document.getElementById("painValue");

slider.oninput=function(){
value.innerText=this.value;
}

}


// ===============================
// SAVE PAIN LEVEL
// ===============================

function savePain(){

const pain=document.getElementById("painSlider").value;

localStorage.setItem("pain",pain);

window.location.href="/results";

}


// ===============================
// LOAD RESULTS PAGE
// ===============================

async function loadResults(){

const medicationEl = document.getElementById("medication");

if(!medicationEl) return; // run only on results page

const user=JSON.parse(localStorage.getItem("user"));
const health=JSON.parse(localStorage.getItem("health"));
const pain=localStorage.getItem("pain");

if(!user || !health || !pain){

document.getElementById("explanation").innerText="Missing health data.";
return;

}

const bmi=user.weight/((user.height/100)*(user.height/100));

const data={
issue:health.issue,
duration:health.duration,
pain:pain,
bmi:bmi
};

try{

const response=await fetch("/analyze",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
});

const result=await response.json();

document.getElementById("medication").innerText=result.medication;
document.getElementById("food").innerText=result.food;
document.getElementById("lifestyle").innerText=result.lifestyle;
document.getElementById("explanation").innerText=result.explanation;

}catch(error){

document.getElementById("explanation").innerText="Error connecting to AI engine.";

}

}


// ===============================
// RUN WHEN PAGE LOADS
// ===============================

window.onload=loadResults;