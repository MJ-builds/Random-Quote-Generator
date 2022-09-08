/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*TODO:
  clean up code
  improve variable names
  add concise commentary
  complete 'exceeds' requirements
  add more quotes and citation/year variation
  more
*/

/*** 
 * `quotes` array 
***/
const quotes = [
  {quote: 'It is during our darkest moments that we must focus to see the light.', source: 'Aristotle'},
  {quote: 'Do not go where the path may lead, go instead where there is no path and leave a trail.', source: 'Ralph Waldo Emerson'},
  {quote: 'Always remember that you are absolutely unique. Just like everyone else.', source: 'Margaret Mead'},
  {quote: 'Frankly, my dear, I don\'t give a damn.', source: 'Rhett Butler', citation:  'Gone With the Wind', year: '1939'},
  {quote: 'You talking to me?', source: 'Travis Bickle', citation: 'Taxi Driver', year: '1976'}
];

/***
 * `getRandomQuote` function - get a random number between 0 and quotes.length
***/

/*Unsure whether a separate randomiser function really is necessary here
function getRandomNumber(maximum = quotes.length) {
   return Math.floor(Math.random() * maximum);
}*/

function getRandomQuote () { 
const randomQuoteObj = Math.floor(Math.random()* quotes.length);
const quote = quotes[randomQuoteObj];
return quote;
}

/***
 * `printQuote` function - prints the randomised quote to the quote-box. Format dependent on conditionals.
***/
function printQuote () {
  const quote = getRandomQuote(); //check whether you should be calling the same variable name (even though scope is ok here)
  let html = `<p class="quote">${quote['quote']}</p><p class="source">${quote['source']}`;

  if (quote['citation'] && quote['year']) {
      html += `<span class="citation">${quote['citation']}</span><span class="year">${quote['year']}</span>`;
  } else if (quote['year']) {
      html += `<span class="year">${quote['year']}</span>`;
  } else if(quote['citation']) {
      html += `<span class="citation">${quote['citation']}</span>`;
  }
  html += `</p>`;
  return document.getElementById('quote-box').innerHTML = html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
