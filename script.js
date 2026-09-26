const gift = document.getElementById("gift");
const intro = document.getElementById("intro");
const giftSection = document.getElementById("giftSection");
const letterSection = document.getElementById("letterSection");

let opened = false;

gift.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    /* ================================
       COFFEE BROWN THEME
    ================================= */

    const coffeeBrown = "#4A3227";
    const darkCoffee = "#2B1D17";
    const creamyBeige = "#F5EBDD";
    const warmBeige = "#D8C2A6";

    /* Gift opens */
    gift.classList.add("open");

    /* Little instruction fades in creamy beige */
    const openText = document.querySelector(".open-text");

    openText.style.color = warmBeige;
    openText.style.opacity = "0";


    /* ================================
       INTRO ANIMATION
    ================================= */

    setTimeout(() => {

        intro.style.opacity = "0";

        intro.style.transform =
            "translateX(-50%) translateY(-30px)";

    }, 300);


    /* ================================
       GIFT ANIMATION
    ================================= */

    setTimeout(() => {

        giftSection.style.opacity = "0";

        giftSection.style.transform =
            "translateX(-50%) translateY(30px)";

    }, 900);


    /* ================================
       LETTER REVEAL
    ================================= */

    setTimeout(() => {

        letterSection.classList.add("show");

        /* Creamy beige letter */
        letterSection.style.color = coffeeBrown;

    }, 1300);

});
