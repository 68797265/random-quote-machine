var quotes = [{
    "quote": "In three words I can sum up everything I've learned about life: it goes on.",
    "author": "Robert Frost"
}, {
    "quote": "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    "author": "Marilyn Monroe"
}, {
    "quote": "Be yourself; everyone else is already taken.",
    "author": "Oscar Wilde"
}, {
    "quote": "So many books, so little time.",
    "author": "Frank Zappa"
}, {
    "quote": "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    "author": "Eleanor Roosevelt, This is My Story"
}, {
    "quote": "Without music, life would be a mistake.",
    "author": "Friedrich Nietzsche, Twilight of the Idols"
}, {
    "quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    "author": "Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches "
}, {
    "quote": "I am so clever that sometimes I don't understand a single word of what I am saying.",
    "author": "Oscar Wilde, The Happy Prince and Other Stories "
}, {
    "quote": "You only live once, but if you do it right, once is enough.",
    "author": "Mae West"
}, {
    "quote": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    "author": "Maya Angelou"
}, {
    "quote": "A friend is someone who knows all about you and still loves you.",
    "author": "Elbert Hubbard"
}, {
    "quote": "Always forgive your enemies; nothing annoys them so much.",
    "author": "Oscar Wilde"
}, {
    "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
    "author": "Oscar Wilde"
}, {
    "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "author": "Mahatma Gandhi"
}, {
    "quote": "It is better to be hated for what you are than to be loved for what you are not.",
    "author": "Andre Gide, Autumn Leaves"
}, {
    "quote": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    "author": "William Shakespeare, As You Like It"
}
]

function getQuote() {

    // Choose random quote
    var random = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[random];
    // Set twitter Link
    var twitterLink = "https://twitter.com/intent/tweet?text="
    document.getElementById("tweet-quote").href = twitterLink + randomQuote.quote + " " + randomQuote.author;
    // Print quote and author
    document.getElementById("text").innerText = randomQuote.quote;
    document.getElementById("author").innerText = randomQuote.author;

}

