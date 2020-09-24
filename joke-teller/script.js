const audioElement = document.querySelector('#audio');
const button = document.querySelector('#button');

// Get jokes from Joke API
async function getJoke() {
  const API_URL =
    'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist';
  try {
    const response = await fetch(API_URL);
    let data = await response.json();
    let joke = selectJoke(data);
    return joke;
  } catch (error) {
    console.log(error);
    return '';
  }
}

// There are 2 types of jokes: twopart and single
// and because of that the data object has different properties
function selectJoke(data) {
  if (data.type === 'twopart') {
    return `${data.setup} ... ${data.delivery}`;
  } else {
    return data.joke;
  }
}

// Pass jokes to Text-to-Speech (Voice RSS API)
async function tellMe(fn) {
  try {
    VoiceRSS.speech({
      key: '690c091f9dae442f98f3ca693327375f',
      src: await fn(),
      hl: 'en-us',
      v: 'Linda',
      r: 0,
      c: 'mp3',
      f: '44khz_16bit_stereo',
      ssml: false
    });
    // Disable button
    toggleButton();
  } catch (error) {
    console.log(error);
  }
}

function toggleButton() {
  button.disabled = !button.disabled;
}

button.addEventListener('click', () => tellMe(getJoke));
audioElement.addEventListener('ended', toggleButton);
