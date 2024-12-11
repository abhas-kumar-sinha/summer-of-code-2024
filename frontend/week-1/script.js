let allNavOptions = document.querySelectorAll(".nav-options");
const allContentImgs = document.querySelectorAll(".content-img");
const passwordInput= document.querySelector("#password");
const loginBtns = document.querySelectorAll(".btn");

// slider logic

allNavOptions.forEach(option => {
    // checking which option is getting clicked
    option.addEventListener('click', () => {
        allNavOptions.forEach(opt => {
            // removing if any nav option had the nav-active class
            opt.classList.remove("nav-active")
        });

        allContentImgs.forEach(imgs => {
            // removing if any nav option had the is-active-navbar class
            imgs.classList.remove("is-active-navbar")

            if (option.id === imgs.id) {
                // setting the image according to the option by comparing the id's
                imgs.classList.add("is-active-navbar")
                // setting the navbar option according to the user selection
                option.classList.add("nav-active");
            }
        });
    });
});

// auto swipe
function autoSwipe() {
    const navIds = ["home", "about-us", "blog", "pricing"];

    // Get all navigation options dynamically on each cycle
    allNavOptions = document.querySelectorAll(".nav-options");
    // Find the currently active navigation option
    allNavOptions.forEach(option => {
        if (option.classList[option.classList.length - 1] === "nav-active") {
            activeOption = option;
        }
    });

    if (activeOption) {
        const currEle = activeOption.id;
        const currIndx = navIds.indexOf(currEle);

        // Determine the next index
        const newIndx = (currIndx + 1) % navIds.length; // Cyclic navigation using modulo
        const newId = navIds[newIndx];

        // Find the next navigation option and simulate a click
        allNavOptions.forEach(opt => {
            if (opt.id === newId) {
                nextOption = document.querySelector(`#${newId}`);
                nextOption.click()
            }
        });
    }
}

// Run the autoSwipe function every 2000ms
setInterval(autoSwipe, 2000);

// password masking in * for all browsers
let realPassword = '';

passwordInput.addEventListener('input', (e) => {
    const input = e.target.value;
    const length = input.length;

    // Update the real password value
    if (length > realPassword.length) {
        realPassword += input[length - 1];
    } else if (length < realPassword.length) {
        realPassword = realPassword.slice(0, length);
    }

    // Display masked input
    passwordInput.value = '*'.repeat(length);
});