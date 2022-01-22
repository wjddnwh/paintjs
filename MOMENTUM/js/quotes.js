const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing",
    author: "Walt Disney",
  },
  {
    quote: "When they go low, we go high",
    author: "Michelle Obama",
  },
  {
    quote: "I was never less alone than when by myself",
    author: "Edward Gibbon",
  },
  {
    quote: "Only I can change my life, no one can do it for me",
    author: "Carol Burnett",
  },
  {
    quote: "This too shall pass away",
    author: "Abraham Lincoln",
  },
  {
    quote: "When in doubt, choose change",
    author: "Lily Leung",
  },
  {
    quote: "It is not length of life, But depth of life",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Life is unfair, get used to it",
    author: "Bill Gates",
  },
  {
    quote: "Time is flying never to return",
    author: "Virgil",
  },
  {
    quote: "I find the harder I work, the more luck I have",
    author: "Thomas Jefferson",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
/*
function changeQuotes(){
 const number = Math.floo(Math.random()*qutoes.length);
 console.log(quotes[number]);
}
*/
//changeQuotes();
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);