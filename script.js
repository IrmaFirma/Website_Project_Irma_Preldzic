// Open the film viewer
const openFilm = document.getElementById("open-film");
const filmModal = document.getElementById("film-modal");
const closeFilm = document.getElementById("close-film");
const fullFilm = document.getElementById("full-film");

if (openFilm) {

    openFilm.addEventListener("click", function() {

        filmModal.classList.add("show");

        fullFilm.play();

    });

}


// Close the film viewer
if (closeFilm) {

    closeFilm.addEventListener("click", function() {

        filmModal.classList.remove("show");

        fullFilm.pause();

    });

}


// Close when clicking outside the video
if (filmModal) {

    filmModal.addEventListener("click", function(event) {

        if (event.target === filmModal) {

            filmModal.classList.remove("show");

            fullFilm.pause();

        }

    });

}
