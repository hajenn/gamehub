'use strict';


const home= document.querySelector('#home');
const background = document.querySelector('.img-holder');
const mainText = document.querySelector('.hero-title');

const maxMove = 20;

home.addEventListener('mousemove', e => {

  const x = e.clientX / home.offsetWidth - 0.5;
  const y = e.clientY / home.offsetHeight - 0.5;
  const moveX = x * maxMove;
  const moveY = y * maxMove;
  background.style.transform = `translate(${moveX}px, ${moveY}px)`;
  mainText.style.transform = `translate(${moveX}px, ${moveY}px)`;
  
});



const form = document.querySelector('#my-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const { value: firstName } = document.querySelector('#first-name');
  const { value: lastName } = document.querySelector('#last-name');
  const { value: email } = document.querySelector('#email');

  const nameRegex = /^[a-zA-Z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isValid = [firstName, lastName, email].every((input) => input.trim().match(nameRegex) || input.trim().match(emailRegex));

  [document.getElementById('first-name'), document.getElementById('last-name'), document.getElementById('email')].forEach((input) =>
    input.classList.toggle('error', !input.value.trim().match(nameRegex) && isValid)
  );

  if (isValid) {
    window.alert(1);
    form.submit();
  
  }
});

