const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const welcome = document.querySelector('.home-welcome');
const arrow = document.querySelector('.arrowButton');

const navSlide = () =>{
burger.addEventListener('click', ()=>{
  nav.classList.toggle('nav-links-active');
  welcome.style.visibility = 'hidden';
});
}
navSlide();

const navSlide2 = ()=> {
    arrow.addEventListener('click', ()=>{
    nav.classList.toggle('nav-links-active');

  });
}
navSlide2();



function bmi(){
  let height = document.getElementById('height-input').value / 100;
  let mass = document.getElementById('weight-input').value;
  let bmi = mass/(height*height);

if (isNaN(bmi)){
  document.getElementById('bmi-output').innerHTML = 'Please enter your height and weight';
} else{
    document.getElementById('bmi-output').innerHTML = 'Your BMI is ' + Math.round(bmi * 10) / 10;
}
console.log(bmi);
}
function bmiPage(){
  document.location.href = 'bmi.html';
}
function progressPage(){
  document.location.href = "progress.html";
}
function workoutBuilder(){
  document.location.href = "workout.html";
}
