// =========================
// PAGE 1 - PASSWORD
// =========================

const passwordInput = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");

const message = document.getElementById("message");
const reaction = document.querySelector(".reaction");

const correctPassword = "ravishlovesneha";

const responses = [
    "hmm... think again ♡",
    "nopeee, try again 🥹",
    "you know this one ♡",
    "please try again...",
    "not quite, Nehaa ♡",
    "I know you can get this",
    "one more little try? ♡",
    "don't give up yet 🥹"
];

let attempt = 0;

unlockBtn.addEventListener("click", checkPassword);

passwordInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        checkPassword();
    }

});

function checkPassword() {

    const enteredPassword = passwordInput.value.trim();

    if (enteredPassword === correctPassword) {

        message.textContent = "okay... you found it ♡";

        reaction.classList.add("show");

        setTimeout(() => {

            document.querySelector(".welcome-page").style.opacity = "0";

            setTimeout(() => {

                document.querySelector(".welcome-page").style.visibility = "hidden";

                const pageTwo = document.getElementById("pageTwo");

                pageTwo.style.visibility = "visible";
                pageTwo.style.opacity = "1";
                pageTwo.style.transform = "scale(1)";

            }, 700);

        }, 500);

        return;
    }

    const response =
        responses[attempt % responses.length];

    message.textContent = response;

    reaction.classList.remove("show");

    setTimeout(() => {
        reaction.classList.add("show");
    }, 50);

    attempt++;

    passwordInput.value = "";
}


// =========================
// PAGE 2 → PAGE 3
// =========================

const littleHeart = document.getElementById("littleHeart");
const pointingCat = document.querySelector(".pointing-cat");
const pageTwo = document.getElementById("pageTwo");
const pageThree = document.getElementById("pageThree");

littleHeart.addEventListener("click", function () {

    pointingCat.style.transition = "0.5s ease";
    pointingCat.style.opacity = "0";

    littleHeart.style.transform = "scale(1.2)";

    setTimeout(() => {

        pageTwo.style.opacity = "0";

        setTimeout(() => {

            pageTwo.style.visibility = "hidden";

            pageThree.style.visibility = "visible";
            pageThree.style.opacity = "1";

            setTimeout(() => {

                pageThree.classList.add("garden-show");

            }, 100);

        }, 700);

    }, 500);

});


// =========================
// PAGE 3 → PAGE 4
// =========================

const gardenNext = document.getElementById("gardenNext");

const memoryPage = document.getElementById("memoryPage");

gardenNext.addEventListener("click", function () {

    pageThree.style.opacity = "0";

    setTimeout(() => {

        pageThree.style.visibility = "hidden";

        memoryPage.classList.add("memory-show");

    }, 700);

});


// =========================
// PAGE 4 - MEMORIES
// =========================

const memoryPhoto =
    document.getElementById("memoryPhoto");

const memoryParagraph =
    document.getElementById("memoryParagraph");

const memoryNumber =
    document.getElementById("memoryNumber");

const memoryNext =
    document.getElementById("memoryNext");

const revealAll =
    document.getElementById("revealAll");


const memories = [

    {
        image: "assets/photos/memory1.jpg",

        text:
        `The cutest girl on Earth, looking absolutely breathtaking in red. ❤️ From that gorgeous red dress to those perfectly pretty red lips, everything about this look feels effortlessly beautiful. There’s just something about the way she carries herself that makes the whole picture feel brighter—like she doesn’t even have to try to stand out. ✨`
    },

    {
        image: "assets/photos/memory2.jpg",

        text:
        `The prettiest girl, looking effortlessly beautiful in that soft yellow dress. 💛 Those deep maroon lips, the delicate earrings, and the way your hair flows so naturally make the whole look feel absolutely enchanting. There’s something so graceful about this picture—it’s simple, elegant, and somehow makes you look even more adorable without even trying. ✨`
    },

    {
        image: "assets/photos/memory3.jpg",

        text:
        `Okay, this one genuinely has my attention. 🖤 You’re in that black T-shirt, with your hand resting on your face, and somehow you look ridiculously cute and pretty without even trying. But honestly, your wavy hair is my favourite part of this picture—they look so soft, natural, and unbelievably pretty. There’s just something about this whole look that makes you look effortlessly adorable. ✨`
    },

    {
        image: "assets/photos/memory4.jpg",

        text:
        `This one feels so soft and beautiful. 🤍 That little white flower tucked above your ear looks unbelievably cute, and with your eyes closed, you somehow look even more peaceful and pretty. And honestly, seeing your closed eyes makes me think—kaash mujhe tumhari palkon ke neeche panaah mil jaati, toh shayad main poori zindagi wahi guzaar deta. ✨`
    }

];


let currentMemory = 0;


// NEXT MEMORY

memoryNext.addEventListener("click", function () {

    if (currentMemory < memories.length - 1) {

        currentMemory++;

        memoryPhoto.style.opacity = "0";
        memoryParagraph.style.opacity = "0";

        setTimeout(() => {

            memoryPhoto.src =
                memories[currentMemory].image;

            memoryParagraph.textContent =
                memories[currentMemory].text;

            memoryNumber.textContent =
                `0${currentMemory + 1} / 04`;

            memoryPhoto.style.opacity = "1";
            memoryParagraph.style.opacity = "1";

        }, 400);

    }

    else {

        memoryNext.style.display = "none";

        revealAll.style.display = "block";

    }

});


// =========================
// PAGE 4 → PAGE 5
// =========================

const revealPage =
    document.getElementById("revealPage");

revealAll.addEventListener("click", function () {

    memoryPage.style.opacity = "0";

    setTimeout(() => {

        memoryPage.style.visibility = "hidden";

        revealPage.classList.add("reveal-show");

    }, 700);

});


// =========================
// PAGE 5 → PAGE 6
// =========================

const revealNext =
    document.getElementById("revealNext");

const videoPage =
    document.getElementById("videoPage");


revealNext.addEventListener("click", function () {

    // Fade out photos page
    revealPage.style.opacity = "0";

    setTimeout(() => {

        // Hide photos page
        revealPage.style.visibility = "hidden";

        // Show video page
        videoPage.style.visibility = "visible";
        videoPage.style.opacity = "1";

        videoPage.style.zIndex = "100";

        // Start all videos
        const videos =
            videoPage.querySelectorAll("video");

        videos.forEach(video => {

            video.play().catch(() => {});

        });

    }, 800);

});
// =========================
// PAGE 6 → PAGE 7
// =========================

const videoNext = document.getElementById("videoNext");
const finalPage = document.getElementById("finalPage");

videoNext.addEventListener("click", function () {

    // Fade out videos
    videoPage.style.opacity = "0";

    setTimeout(() => {

        // Hide video page
        videoPage.style.visibility = "hidden";

        // Show final page
        finalPage.style.visibility = "visible";
        finalPage.classList.add("final-show");

    }, 900);

});
// =========================
// FINAL PAGE → OUTRO
// =========================

const finalNext = document.getElementById("finalNext");
const outroPage = document.getElementById("outroPage");

finalNext.addEventListener("click", function () {

    finalPage.style.opacity = "0";

    setTimeout(() => {

        finalPage.style.visibility = "hidden";

        outroPage.style.visibility = "visible";
        outroPage.classList.add("outro-show");

    }, 900);

});