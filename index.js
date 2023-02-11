async function main(link, page) {

  const loading = document.querySelector(".results__loading")

  const movies = await fetch(
    `https://www.omdbapi.com/?apikey=da79f3d4&s=${link}&page=${page}`
    );
    const moviesData = await movies.json();
    
    const resultsEl = document.querySelector(".results__cards");

    loading.classList += " results__invisible"
    
    
    if (link === undefined) {
      document.getElementById("results").style.display = "none";
    } else {
      resultsEl.innerHTML = moviesData.Search.map((movie) =>
      movieHTML(movie)
      ).join("");
      document.getElementById("results").style.display = "block";
      document.getElementById("results").scrollIntoView({ behavior: "smooth" });
  }
}

function movieHTML(movie) {
  if (movie.Poster === "N/A") {
    return `<div class="results__card--outer">
      <div class="results__card--inner">
        <div class="results__card--bg-alt"></div>
        <div class="results__description--alt">
          <h2 class="results__title">${movie.Title}</h2>
          <h2 class="results__year">${movie.Year}</h2>
        </div>
      </div>
    </div>`;
  } else {
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
}

main();

function searchFunction(event) {
  window.searchTitle = event.target.value;
  main(searchTitle, 1);
}

function getNumber(event) {
  number = event.target.value;
  main(searchTitle, number);
  document.getElementById("results").scrollIntoView({ behavior: "smooth" });
  document.getElementById("number").setAttribute("value", `${number}`);
  document.getElementById("number__2").setAttribute("value", `${number}`);
}

function getNumber__2(event) {
  number = event.target.value;
  main(searchTitle, number);
  document.getElementById("results").scrollIntoView({ behavior: "smooth" });
  document.getElementById("number__2").setAttribute("value", `${number}`);
  document.getElementById("number").setAttribute("value", `${number}`);
}
