
function displayDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
  document.getElementById("dateTime").innerText = formatted;
}

displayDateTime();
document.getElementById('fetch-image').addEventListener('click', () => {
  const imageContainer = document.getElementById('imageContainer');
  const clickSound = document.getElementById('clickSound');

  clickSound.currentTime = 0;
  clickSound.play();

  imageContainer.innerHTML = '';


  fetch('https://api.api-ninjas.com/v1/randomimage?category=nature', {
    method: 'GET',
    headers: {
      'X-Api-Key': 'DnMNLDENjHipWxxfTPzOyg==kZu2CwlQOtBFdozb\n',
      'Accept': 'image/jpg'
    }
  })
    .then(response => response.blob())
    .then(imageBlob => {
      const imageUrl = URL.createObjectURL(imageBlob);
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = 'Random Image';
      img.classList.add('random-image');
      imageContainer.appendChild(img);

      img.onload = () => {
        img.classList.add('fade-in');
      };
    })
    .catch(error => console.error('Error fetching the random image:', error));
});


const body = document.body;
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  body.classList.add(savedTheme);

} else {
  body.classList.add('day-theme');

}


const filterInput = document.getElementById('filter-input');
const filterButton = document.getElementById('filter-button');
const imageGallery = document.getElementById('image-gallery');
function filterImages() {
  const filterText = filterInput.value.toLowerCase();
  const images = imageGallery.getElementsByTagName('img');

  for (let i = 0; i < images.length; i++) {
    const keywords = images[i].getAttribute('data-keywords');
    if (keywords && keywords.toLowerCase().includes(filterText)) {
      images[i].style.display = '';
    } else {
      images[i].style.display = 'none';
    }
  }
}

filterButton.addEventListener('click', filterImages);
filterInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    filterImages();
  }
});

if(localStorage.getItem("isLoggedIn") === "true"){
   const username = localStorage.getItem("username");
   const welcomeMessage = document.getElementById("destinationText");
   welcomeMessage.innerText =  `Welcome to the Ultimate Travel Guide, ${username}!`;
}
