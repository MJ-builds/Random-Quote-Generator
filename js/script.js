/*****************************************************************************s
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator

A program project whereby a random quote and background color is generated from an array of quotes every 10 seconds.
Button click functionality also allows the user to generate on demand.
******************************************************************************/


//`quotes` array 
const quotes = [
  {quote: 'It is during our darkest moments that we must focus to see the light.', source: 'Aristotle', tag: 'Philosophy'},
  {quote: 'Do not go where the path may lead, go instead where there is no path and leave a trail.', source: 'Ralph Waldo Emerson', tag: 'Literature'},
  {quote: 'Always remember that you are absolutely unique. Just like everyone else.', source: 'Margaret Mead', tag: 'American Culture Anthropology'},
  {quote: 'If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.', source: 'Oprah Winfrey', tag: 'American Culture'},
  {quote: 'You talking to me?', source: 'Travis Bickle', citation: 'Taxi Driver', year: '1976', tag: 'Entertainment'},
  {quote: 'A man who dares to waste one hour of time has not discovered the value of life.', source: 'Charles Darwin', tag: 'Biology'},
  {quote: 'If you\'re an actor, even a successful one, you\'re still waiting for the phone to ring.', source: 'Kevin Bacon', tag: 'Entertainment'},
  {quote: 'This is the real secret of life -- to be completely engaged with what you are doing in the here and now. And instead of calling it work, realize it is play.', source: 'Alan Watts', tag: 'Philosophy'},
  {quote: 'Complain less. Build more.', source: 'Lex Fridman', year: '2021', tag: 'Technology'},
  {quote: 'I am among those who think that science has great beauty.', source: 'Marie Curie', tag: 'Science'},
  {quote: 'I Have a Dream', source: 'Martin Luther King Jr', citation: 'March on Washington for Jobs and Freedom ', year: '1963', tag: 'Politics'},
  {quote: 'Life is What Happens To You While You\'re Busy Making Other Plans', source: 'Allen Saunders', citation: 'Reader\'s Digest', year: '1957', tag: 'Literature'},
  {quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.', source: 'Mother Teresa', tag: 'Activism'},
  {quote: 'Alright Mr DeMille, I\'m ready for my closeup.', source: 'Norma Desmond', citation: 'Sunset Boulevard', year: '1950', tag: 'Entertainment'}
];

//Generate a random number between zero (0) and the length of the quotes array (quotes.length)
function getRandomQuote () { 
const randomQuoteObj = Math.floor(Math.random()* quotes.length);
const quote = quotes[randomQuoteObj];
return quote;
}

//RGB color randomiser function
function getColor() {
  const r = Math.floor(Math.random() * 256 );
  const g = Math.floor(Math.random() * 256 );
  const b = Math.floor(Math.random() * 256 );
  const getColor = 'rgb('+ r + ',' + g + ',' + b + ')';
  return getColor;
}

let interval;
//10 second interval delay function
function startInterval() {
  interval = setInterval(printQuote, 10000);
}
//Set/reset interval to zero (0)
function resetInterval() {
  clearInterval(interval);
}

//Print the randomised quote to the page. HTML tags formatting dependent on conditionals.
function printQuote () {
  const quote = getRandomQuote();

  let html = `<p class="quote">${quote['quote']}</p><p class="source">${quote['source']}`;

  if (quote['citation'] && quote['year']) {
      html += `<span class="citation">${quote['citation']}</span><span class="year">${quote['year']}</span>`;
  } else if (quote['year']) {
      html += `<span class="year">${quote['year']}</span>`;
  } else if(quote['citation']) {
      html += `<span class="citation">${quote['citation']}</span>`;
  }
  html += `<span class="tag"><em> (${quote['tag']})</em></span></p>`;

  //utilise the getColor() function to randomise the background color
  document.body.style.background = getColor();

  //interval resets to zero if you click on the button
  resetInterval();
  //interval proceeds to count down from 20(s) once more, and will continue unless the button is clicked for a new quote, and the timer resets.
  startInterval();
  return document.getElementById('quote-box').innerHTML = html;

}


//click event listener for the print quote button
document.getElementById('load-quote').addEventListener("click", printQuote, false);

//initialise interval timer as to not require any clicks to initialise
startInterval(); 

