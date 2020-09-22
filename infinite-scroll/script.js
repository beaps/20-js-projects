const imageContainer = document.querySelector('#image-container');
const loader = document.querySelector('#loader');

let photosArray = [];
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

// Unsplash API
let imageCounter = 10;
const API_KEY = '2oj1cwUysfyZTbz25sqajLztBXvnFx0aei55Yqn_e-g';
const API_URL = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=${imageCounter}`;

async function getPhotos() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
}

// Check if all images were loaded
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    imagesLoaded = 0;
    loader.hidden = true;
    // Add more images here to don't load many images in the initial load (improve performance)
    imageCounter = 20;
  }
}

// Helper function to set attributes on DOM elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

async function displayPhotos() {
  try {
    photosArray = await getPhotos();

    totalImages = photosArray.length;

    photosArray.forEach((photo) => {
      // Create <a> to link to Unsplash
      const item = document.createElement('a');
      setAttributes(item, {
        href: photo.links.html,
        target: '_blank'
      });
      // Create <img> for photo
      const img = document.createElement('img');
      setAttributes(img, {
        src: photo.urls.regular,
        alt: photo.alt_description,
        title: photo.alt_description
      });

      // Check if each image is loaded
      img.addEventListener('load', imageLoaded);

      // Put <img> inside <a>
      item.appendChild(img);
      // Put <a> inside imageContainer
      imageContainer.appendChild(item);
    });
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('scroll', () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    displayPhotos();
  }
});

displayPhotos();
