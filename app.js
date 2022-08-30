console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let submitSearch = document.getElementById("submitSearch");
let searchWord = document.getElementById("searchWord");
let imageContainer = document.querySelector("#imageContainer > img");
let feedbackParagraph = document.getElementById("feedbackParagraph");
let giphyURL = `https://api.giphy.com/v1/gifs/translate`;
let APIKEY = `0z0AH2s7I80puVvSwg5jeyzJ8CUJnQav`;

submitSearch.addEventListener("click", (event) => {
fetch(`${giphyURL}?api_key=${APIKEY}&s=${searchWord.value}&weirdness=10`)
.then((res) => res.json())
.then((body) => {
    imageContainer.src = body.data.images.original.url;
})
.catch((err) => console.error(err));
});

