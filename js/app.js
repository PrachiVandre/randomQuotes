const quotes = [
  {
    quote : "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author : "– Aristotle"
  },
  {
    quote : "It is during our darkest moments that we must focus to see the light.",
    author : "– Aristotle Onassis"
  },
  {
    quote : "Always make a total effort, even when the odds are against you.",
    author : "– Arnold Palmer"
  },
  {
    quote : "Start where you are. Use what you have. Do what you can.",
    author : "– Arthur Ashe"
  },
  {
    quote : "Don’t wait for your feelings to change to take the action. Take the action and your feelings will change.",
    author : "– Barbara Baron"
  },
  {
    quote : "Action may not always bring happiness; but there is no happiness without action.",
    author : "– Benjamin Disraeli"
  },
  {
    quote : "The difference between a stumbling block and a stepping stone is how high you raise your foot.",
    author : "– Benny Lewis"
  },
  {
    quote : "As we look ahead into the next century, leaders will be those who empower others.",
    author : "– Bill Gates"
  },
];


const body = document.querySelector('body');
const button = document.querySelector('#generate-btn');
const dailyquote = document.querySelector('#quote');
const quoteauthor = document.querySelector('.quote-author');

button.addEventListener('click',function(){
  const randomIndex = Math.floor(Math.random() * quotes.length);
  dailyquote.textContent = quotes[randomIndex].quote;
  quoteauthor.textContent = quotes[randomIndex].author;
});