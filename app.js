

const quoteBox = document.querySelector('.quote-box');
const btnGen = document.querySelector('.btn');
const quotes = [
    "“You have to understand your own personal DNA. Don’t do things because I do them or Steve Jobs or Mark Cuban tried it. You need to know your personal brand and stay true to it.”",
    "“Skills are cheap. Passion is priceless.”",
    "“No matter what you do, your job is to tell your story.”",
    "“Look yourself in the mirror and ask yourself, what do I want to do everyday for the rest of my life…do that.”",
    "“You didn’t grow up driving…you figured it out.”",
    "“Time – the one asset none of us are ever gonna get more of.”",
    "“Love your family, work super hard, live your passion.”",
    "“I’m just always looking forwards. I spend very little time, looking backwards”",
    "“Legacy is greater than currency.”",
    "“If you live for the weekends and vacations, your shit is broken.”",
    "“Stop whining, start hustling.”",
    "“We are in control of the one asset that we all give the most f#%ks about, and that is time.”",
    "“A penguin cannot become a giraffe, so just be the best penguin you can be.”",
    "“It’s easy to dream about it … Much harder to execute it ….Work!”"
];

function getQuote() {
    let randomQuotes = Math.floor(Math.random() * quotes.length);
    quoteBox.textContent = quotes[randomQuotes];
}

btnGen.addEventListener('click', getQuote);