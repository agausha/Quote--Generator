const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Get Quote from API
async function getQuote() {
  const proxyUrl = 'https://whispering-tor-04671.herokuapp.com/';
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  try {
      const response = await fetch(proxyUrl + apiUrl);
      const data = await response.json();
      // If Author is blank, add 'Unknown'
      if (data.quoteAuthor === '') {
        authorText.textContent = 'Unknown';
      } else {
        authorText.textContent = data.quoteAuthor;
      }
      // Reduce font size for long quotes
      if (data.quoteText.length > 120) {
        quoteText.classList.add('long-quote');
      } else {
        quoteText.classList.remove('long-quote');
      }
      quoteText.textContent = data.quoteText;
  } catch (error) {
      getQuote();
  }
}