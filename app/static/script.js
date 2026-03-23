document.addEventListener("DOMContentLoaded", function(){

let slider = document.getElementById("painRange");
let output = document.getElementById("painValue");

if(slider){
    output.innerHTML = slider.value;

    slider.oninput = function(){
        output.innerHTML = this.value;
    }
}

});