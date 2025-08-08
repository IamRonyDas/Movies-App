const APILINK =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=87376b27caf0a90e388fe9d1ad045430&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=87376b27caf0a90e388fe9d1ad045430&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK);

function returnMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      main.innerHTML = "";
      data.results.forEach((movie) => createMovieCard(movie));
    })
    .catch((err) => console.error(err));
}

function createMovieCard(movie) {
  const div_column = document.createElement("div");
  div_column.className = "column";

  const div_card = document.createElement("div");
  div_card.className = "card";

  const center = document.createElement("center");
  const image = document.createElement("img");
  image.className = "thumbnail";
  image.src = IMG_PATH + movie.poster_path;
  center.appendChild(image);

  const title = document.createElement("h3");
  title.textContent = movie.title;

  const reviewBtn = document.createElement("button");
  reviewBtn.textContent = "See / Write Reviews";
  reviewBtn.onclick = () => {
    window.location.href = `reviews.html?id=${
      movie.id
    }&title=${encodeURIComponent(movie.title)}&poster=${movie.poster_path}`;
  };

  div_card.appendChild(center);
  div_card.appendChild(title);
  div_card.appendChild(reviewBtn);

  div_column.appendChild(div_card);
  main.appendChild(div_column);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchItem = search.value.trim();
  if (searchItem) {
    returnMovies(SEARCH_API + searchItem);
    search.value = "";
  }
});
