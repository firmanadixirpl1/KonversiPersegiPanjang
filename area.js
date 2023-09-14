var lengthInput = document.querySelector(".length-input-field");
var widthInput = document.querySelector(".width-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var area, length, width;

function myFunction(){
    length = lengthInput.value;
    width = widthInput.value;
    area = length*width;
    alert("The Area is :" + area);
}