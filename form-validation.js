document.getElementById('contactForm').addEventListener('submit', function (e ){



    let isValid = true;
    const name = document.getElementById('name').value;
    if(name === ''){
      document.getElementById('nameError').innerText = 'Name is required.';
      isValid = false;
    }
    else{
      document.getElementById('nameError').innerText = '';
    }

    const email = document.getElementById('email').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)){
      document.getElementById('emailError').innerText = 'Enter a valid email address.';
      isValid = false;
    }
    else{
      document.getElementById('emailError').innerText = '';
    }
    const myMessage = document.getElementById('message').value;
    if(myMessage.length <5 ){
      document.getElementById('messageError').innerText = "too short message";
      isValid = false;
    }
    else{
      document.getElementById('messageError').innerText = "Good";
    }
    if (isValid) {
       alert('Form submitted successfully!');
    }
    else{
      e.preventDefault();
    }
});

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', function() {
     const answer = this.nextElementSibling;
     answer.classList.toggle('active');
  });
});

document.getElementById("contactBtn").addEventListener('click', function(){
   document.getElementById("popupForm").style.display = "block";
});

document.getElementById("closeBtn").addEventListener("click", function() {
  document.getElementById("popupForm").style.display = "none";
});


const stars = document.querySelectorAll('.star');
const ratingMessage = document.getElementById('ratingMessage');

stars.forEach(star => {
  star.addEventListener('click', () => {
    let rating = star.getAttribute('data-value');

    stars.forEach(s => s.classList.remove('selected'));

    for (let i = 0; i < rating; i++) {
      stars[i].classList.add('selected');
    }

    ratingMessage.textContent = `You rated this destination: ${rating} stars!`;
  });
});

function displayGreeting() {
  const currentHour = new Date().getHours();
  let greeting;

  switch (true) {
    case (currentHour >= 0 && currentHour < 12):
      greeting = "Good Morning!";
      break;
    case (currentHour >= 12 && currentHour < 18):
      greeting = "Good Afternoon!";
      break;
    case (currentHour >= 18 && currentHour <= 23):
      greeting = "Good Evening!";
      break;
    default:
      greeting = "Hello!";
      break;
  }

  document.getElementById('greetingMessage').textContent = greeting;
}




displayGreeting();
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  body.classList.add(savedTheme);
  themeToggle.textContent = savedTheme === 'night-theme' ? 'Switch to Day Mode' : 'Switch to Night Mode';
} else {
  body.classList.add('day-theme');
  themeToggle.textContent = 'Switch to Night Mode';
}




themeToggle.addEventListener('click', () => {
  body.classList.toggle('night-theme');
  body.classList.toggle('day-theme');

  if (body.classList.contains('night-theme')) {
    themeToggle.textContent = 'Switch to Day Mode';
    localStorage.setItem('theme', 'night-theme');
  } else {
    themeToggle.textContent = 'Switch to Night Mode';
    localStorage.setItem('theme', 'day-theme');
  }
});



document.getElementById("changeColor").addEventListener('click', () => {
  const colors = ["lightblue", "lightgreen", "lightpink", "lightcoral", "lightgoldenrodyellow", "lightgray", "red", "blue"];


  const randomColor = colors[Math.floor(Math.random() * colors.length)];


  document.body.style.backgroundColor = randomColor;
});



const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0F033', '#33FFF0', '#FF33F0'];
let currentColorIndex = 0;

document.addEventListener('keydown', (event) => {

  if (event.key === 'ArrowRight') {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    changeBackgroundColor(colors[currentColorIndex]);
  } else if (event.key === 'ArrowLeft') {
    currentColorIndex = (currentColorIndex - 1 + colors.length) % colors.length;
    changeBackgroundColor(colors[currentColorIndex]);
  }

  if (event.key === 'Shift') {
    const message = document.getElementById('message1');
    message.textContent = `Current Color: ${colors[currentColorIndex]}`;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("hii");
  const welcomeMessage = document.getElementById("welcomeMessage");
  const logoutBtn = document.getElementById("logoutBtn");
  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");


  if (localStorage.getItem("isLoggedIn") === "true") {
    const username = localStorage.getItem("username");
    welcomeMessage.innerText = `Welcome back, ${username}!`;
    logoutBtn.classList.remove("d-none");
    loginBtn.classList.add("d-none");
    signupBtn.classList.add("d-none");
  } else {
    loginBtn.classList.remove("d-none");
    signupBtn.classList.remove("d-none");
  }


  logoutBtn.addEventListener("click", () => {
    localStorage.setItem("isLoggedIn", "false");
    location.reload();
  });


  loginBtn.addEventListener("click", () => {
    window.location.href = "login.html";
  });

  signupBtn.addEventListener("click", () => {
    window.location.href = "signup.html";
  });
});



