
document.addEventListener("DOMContentLoaded", function () {

    // Display the current year
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Mobile navigation
    const menuButton = document.getElementById("menu-toggle");
    const navigation = document.getElementById("navigation");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {
            const expanded =
                menuButton.getAttribute("aria-expanded") === "true";

            menuButton.setAttribute(
                "aria-expanded",
                String(!expanded)
            );

            navigation.classList.toggle("open", !expanded);
        });
    }

});
