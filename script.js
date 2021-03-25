const navSlide = () =>{
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', ()=>{
  nav.classList.toggle('nav-links-active');
});
}
navSlide();

const navSlide2 = ()=>{
  const arrow = document.querySelector('.arrowButton');
  const nav = document.querySelector('.nav-links');

  arrow.addEventListener('click', ()=>{
    nav.classList.toggle('nav-links-active');
  });
}
navSlide2();
