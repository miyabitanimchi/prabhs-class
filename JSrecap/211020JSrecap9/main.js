import movieData from "./movieData.js";

const searchInput = document.getElementById("searchInput");
const submitBtn = document.getElementById("submitBtn");
const searchResult = document.getElementById("searchResult");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (searchResult.hasChildNodes()) {
    searchResult.innerHTML = "";
  }
  const resultArr = movieData.filter(
    (movie) =>
      movie.title.toLowerCase().search(searchInput.value.toLowerCase()) !== -1
  );
  resultArr.forEach((movie) => {
    const liEl = document.createElement("li");
    liEl.innerText = movie.title;
    searchResult.appendChild(liEl);
  });
});
