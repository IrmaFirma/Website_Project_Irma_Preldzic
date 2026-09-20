
// Team cards light up when you hover over them (team page only)
const teamMembers = document.querySelectorAll(".team-member");

for (let i = 0; i < teamMembers.length; i++) {

    teamMembers[i].addEventListener("mouseover", function() {
        teamMembers[i].classList.add("active");
    });

    teamMembers[i].addEventListener("mouseout", function() {
        teamMembers[i].classList.remove("active");
    });

}


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

// the other pages don't have these so check first
if (openFilm) {

    // click the play button: show the pop-up and start the film
    openFilm.addEventListener("click", function() {
        filmModal.classList.add("show");
        fullFilm.play();
    });

    // click the close button
    closeFilm.addEventListener("click", closeFilmViewer);

    // click the dark area around the video
    filmModal.addEventListener("click", function(event) {
        if (event.target === filmModal) {
            closeFilmViewer();
        }
    });

    // press the Escape key
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            closeFilmViewer();
        }
    });

}
