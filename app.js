console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function displayAnImage() {
    fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=0z0AH2s7I80puVvSwg5jeyzJ8CUJnQav&s=${searchInput.value}`
      )
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((imageBlob) => {
          console.log(imageBlob);
          const imgHolder = document.getElementById("gif");
          imgHolder.src = imageBlob.data.images.original.url;
        })
        .catch((err) => {
          console.error(err);
        });
      
}

const submitSearchButton = document.getElementById("submitSearch");
const searchInput = document.getElementById("searchWord");
submitSearchButton.addEventListener("click", displayAnImage);
const otherSearchWord = document.getElementById("searchWord");

console.log(otherSearchWord);