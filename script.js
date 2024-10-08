// -------------- slider ----------------------

let firstItem = document.querySelector(".first-item");
let secondItem = document.querySelector(".second-item");
let thirdItem = document.querySelector(".third-item");
let sliders = [firstItem, secondItem, thirdItem];
let currentIndex = 0;
function changeImg() {
    let acc = currentIndex;
    sliders[acc].style.display = "none";

    currentIndex = (currentIndex + 1) % sliders.length;
    sliders[currentIndex].style.display = "block"
}
setInterval(changeImg, 5000);
changeImg();

// ------------------ navbar setting ---------------

let navbar = document.querySelector(".fluid")
window.onscroll = function () {
    if (document.documentElement.scrollTop > 150) {
        navbar.classList.remove("container")
        navbar.classList.add("container-fluid")
    }
    else if (document.documentElement.scrollTop < 150) {
        navbar.classList.remove("container-fluid")
        navbar.classList.add("container")
    }
}

// ------------------- product and discount -----------------
function toggleFunction(btnId, contentId) {
    let btn = document.getElementById(btnId);
    let content = document.getElementById(contentId);

    btn.addEventListener("click", function () {
        btn.classList.toggle("yes");
        if (btn.classList.contains("yes")) {
            content.classList.remove("d-none");
            content.classList.add("d-block");
        } else {
            content.classList.remove("d-block");
            content.classList.add("d-none");
        }
    });
}

toggleFunction("btn-read-more", "read-more");
toggleFunction("discount-btn", "discount-read-more");


// --------------------- login page ---------------
let signInEmail = document.getElementById("sign-email")
let signInPassword = document.getElementById("sign-password")
let signInCheckBox = document.getElementById("sign-checkbox")
let signInBtn = document.getElementById("signin-btn")
let createAccount = document.getElementById("create-account")
let signIn = document.getElementById("sign-in");

if (signInBtn) {
    signInBtn.addEventListener("click", function () {
        if (signInEmail.value.length != 0 && signInPassword.value.length != 0) {
            alert("You are sucessfully Sign In");
        } else {
            alert("Fill the input")
        }
    })
}

if (createAccount) {
    createAccount.addEventListener("click", function () {
        signIn.classList.add("d-none")
        signUp.classList.remove("d-none")
    })
}

if (signInCheckBox) {
    signInCheckBox.addEventListener("click", function () {
        if (signInCheckBox.checked) {
            signInPassword.setAttribute("type", "text")
        }
        else {
            signInPassword.setAttribute("type", "password")
        }
    })
}
let signUpPassword = document.getElementById("password")
let signUpConfirmPassword = document.getElementById("confirm-password")
let signUpCheckBox = document.getElementById("checkbox")
let signUpBtn = document.getElementById("signUp-btn")
let signUp = document.querySelector(".sign-up")
let loginAccount = document.getElementById("login-account")

if (loginAccount) {
    loginAccount.addEventListener("click", function () {
        signIn.classList.remove("d-none")
        signUp.classList.add("d-none")
    })
}

if (signUpBtn) {
    signUpBtn.addEventListener("click", function () {
        if (signUpPassword.value === signUpConfirmPassword.value) {
            let inputValue = signUpPassword.value;
            let testSmallLetter = /[a-z]/.test(inputValue);
            let testCapitalLetter = /[A-Z]/.test(inputValue);
            let testNumber = /[0-9]/.test(inputValue);
            let testSpacialChar = /[?=.*@<>$&#]/.test(inputValue);
            if (testSmallLetter !== true) {
                alert('you password have not contain small letter')
            } else if (testCapitalLetter !== true) {
                alert("you password have not contain captital letter")
            } else if (testNumber !== true) {
                alert("you password have not contain number")
            } else if (testSpacialChar !== true) {
                alert("you password have not contain special character")
            }

            if (testCapitalLetter == true && testNumber == true && testSmallLetter == true && testSpacialChar == true) {
                signUp.classList.add("d-none");
                signIn.classList.remove("d-none");
                alert("You are successfully Sign Up")
            }
        }
        else {
            alert("your password is not match")
        }
    })
}

if (signInCheckBox) {
    signUpCheckBox.addEventListener("click", function () {
        if (signUpCheckBox.checked) {
            signUpPassword.setAttribute("type", "text")
            signUpConfirmPassword.setAttribute("type", "text")
        }
        else {
            signUpPassword.setAttribute("type", "password")
            signUpConfirmPassword.setAttribute("type", "password")
        }
    })
}