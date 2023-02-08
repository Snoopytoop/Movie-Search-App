async function main(link) {
  const movies = await fetch(
    `https://www.omdbapi.com/?apikey=da79f3d4&s=${link}`
  );
  const moviesData = await movies.json();

  const resultsEl = document.getElementById("results");

  if (link === undefined) {
    resultsEl.innerHTML = "";
  } else {
    resultsEl.innerHTML = moviesData.Search.map((movie) =>
      movieHTML(movie)
    ).join("");
    resultsEl.scrollIntoView({behavior: "smooth"});
  }
}

function movieHTML(movie) {
  return `<div class="results__card--outer">
  <div class="results__card--inner">
    <div class="results__card--bg"></div>
    <img
      class="results__img"
      src="${movie.Poster}"
      alt=""
    />
    <div class="results__description">
      <h2 class="results__title">${movie.Title}</h2>
      <h2 class="results__year">${movie.Year}</h2>
    </div>
  </div>
</div>`;
}

main();

function searchFunction(event) {
  let searchTitle = event.target.value;
  main(searchTitle);
}
