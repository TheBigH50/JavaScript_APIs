console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let submitSearch = document.getElementById("submitSearch");
let searchWord = document.getElementById("searchWord");
let imageContainer = document.getElementById("imageContainer");
let feedbackParagraph = document.getElementById("feedbackParagraph");
let giphyURL = `https://api.giphy.com/v1/gifs/translate`;
let APIKEY = `0z0AH2s7I80puVvSwg5jeyzJ8CUJnQav`;
let S = searchWord.value;

submitSearch.addEventListener("click", (event) => {
    console.log("hello");
fetch(`${giphyURL}?api_key=${APIKEY}&s=${S}`);
});

