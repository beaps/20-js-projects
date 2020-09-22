const main = document.querySelector('main');
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const twitterButton = document.querySelector('#twitter');
const newQuoteButton = document.querySelector('#new-quote');
const loader = document.querySelector('#loader');

const MAX_NUMBER_RECURSION = 15;
let counter = 0;

// Get quote from API
async function getQuote() {
  showLoader(true);
  const PROXY_URL = 'https://mysterious-coast-44742.herokuapp.com/';
  const API_URL =
    'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  try {
    const response = await fetch(PROXY_URL + API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return {};
  }
}

function showLoader(loading) {
  if (loading) {
    loader.hidden = false;
    main.hidden = true;
  } else {
    loader.hidden = true;
    main.hidden = false;
  }
}

async function insertQuote() {
  try {
    let { quoteText, quoteAuthor } = await getQuote();

    if (!quoteAuthor) {
      quoteAuthor = 'Unknown';
    }
    quoteText.length > 50
      ? quote.classList.add('long-quote')
      : quote.classList.remove('long-quote');

    quote.textContent = quoteText;
    author.textContent = quoteAuthor;

    counter = 0;
    // Stop loader
    showLoader(false);
  } catch (error) {
    // If there is an error, stop recursive function insertQuote()
    if (counter > MAX_NUMBER_RECURSION) {
      alert('There has been an error');
      return;
    } else {
      counter++;
      insertQuote();
    }
  }
}

function tweetQuote() {
  const quoteText = quote.textContent;
  const authorText = author.textContent;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText} - ${authorText}`;
  window.open(twitterUrl, '_blank');
}

// Event listeners
newQuoteButton.addEventListener('click', insertQuote);
twitterButton.addEventListener('click', tweetQuote);

insertQuote();
