
// ====================================
// AJ ROBOTICS LAB
// MAIN JAVASCRIPT FILE
// ====================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Welcome to AJ Robotics Lab!");
    console.log("Robotics | Arduino | ESP32 | AI");

    // Navigation link interaction

    const navigationLinks = document.querySelectorAll("nav a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log("Navigation selected: " + link.textContent);

        });

    });

    // Website loading message

    console.log("AJ Robotics Lab website loaded successfully.");

    // Current year in footer

    const footer = document.querySelector("footer");

    if (footer) {

        const yearText = footer.querySelector("p:last-child");

        if (yearText) {
            yearText.textContent =
                "© " + new Date().getFullYear() +
                " AJ Robotics Lab. All Rights Reserved.";
        }

    }

});
