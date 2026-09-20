// Genre tag turns red when you hover over it (homepage only)
const genreBox = document.querySelector(".genre-box");

// the other pages don't have a genre box so check first
if (genreBox) {

    genreBox.addEventListener("mouseover", function() {
        genreBox.classList.add("red");
    });

    genreBox.addEventListener("mouseout", function() {
        genreBox.classList.remove("red");
    });

}


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
