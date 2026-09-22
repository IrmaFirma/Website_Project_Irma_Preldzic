// Film pop-up (homepage only)
const openFilm = document.getElementById("open-film");
const closeFilm = document.getElementById("close-film");
const filmModal = document.getElementById("film-modal");
const fullFilm = document.getElementById("full-film");

// hide the pop-up and stop the video
function closeFilmViewer() {
    filmModal.classList.remove("show");
    fullFilm.pause();
}

if (openFilm) {

    // cplay button show the pop-up and start the film
    openFilm.addEventListener("click", function() {
        filmModal.classList.add("show");
        fullFilm.play();
    });

    // close button
    closeFilm.addEventListener("click", closeFilmViewer);
}
