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
  sliders[currentIndex].style.display = "block";
}
setInterval(changeImg, 5000);
changeImg();

// ------------------ navbar setting ---------------

let navbar = document.querySelector(".fluid");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 150) {
    navbar.classList.remove("container");
    navbar.classList.add("container-fluid");
  } else if (document.documentElement.scrollTop < 150) {
    navbar.classList.remove("container-fluid");
    navbar.classList.add("container");
  }
};

// ------------------- product and discount -----------------
let readMoreBtn = document.getElementById("btn-read-more");
let readMore = document.getElementById("read-more");
let discountBtn = document.getElementById("discount-btn");
let discountReadMore = document.getElementById("discount-read-more");
if (readMoreBtn) {
  readMoreBtn.addEventListener("click", function () {
    console.log("hello")
    readMoreBtn.classList.toggle("yes");
    if (readMoreBtn.classList.contains("yes")) {
      readMore.classList.remove("d-none");
      readMore.classList.add("d-block");
    } else {
      readMore.classList.remove("d-block");
      readMore.classList.add("d-none");
    }
  });
}
if (discountBtn) {
  discountBtn.addEventListener("click", function () {
    console.log("hello")
    discountBtn.classList.toggle("yes");
    if (discountBtn.classList.contains("yes")) {
      discountReadMore.classList.remove("d-none");
      discountReadMore.classList.add("d-block");
    } else {
      discountReadMore.classList.remove("d-block");
      discountReadMore.classList.add("d-none");
    }
  });
}





// --------------------- login page ---------------
let signInEmail = document.getElementById("sign-email");
let signInPassword = document.getElementById("sign-password");
let signInCheckBox = document.getElementById("sign-checkbox");
let signInBtn = document.getElementById("signin-btn");
let createAccount = document.getElementById("create-account");
let signIn = document.getElementById("sign-in");

if (signInBtn) {
  signInBtn.addEventListener("click", function () {
    if (signInEmail.value.length != 0 && signInPassword.value.length != 0) {
      alert("You are sucessfully Sign In");
    } else {
      alert("Fill the input");
    }
  });
}

if (createAccount) {
  createAccount.addEventListener("click", function () {
    signIn.classList.add("d-none");
    signUp.classList.remove("d-none");
  });
}

if (signInCheckBox) {
  signInCheckBox.addEventListener("click", function () {
    if (signInCheckBox.checked) {
      signInPassword.setAttribute("type", "text");
    } else {
      signInPassword.setAttribute("type", "password");
    }
  });
}
let signUpPassword = document.getElementById("password");
let signUpConfirmPassword = document.getElementById("confirm-password");
let signUpCheckBox = document.getElementById("checkbox");
let signUpBtn = document.getElementById("signUp-btn");
let signUp = document.querySelector(".sign-up");
let loginAccount = document.getElementById("login-account");

if (loginAccount) {
  loginAccount.addEventListener("click", function () {
    signIn.classList.remove("d-none");
    signUp.classList.add("d-none");
  });
}

if (signUpBtn) {
  signUpBtn.addEventListener("click", function () {
    let passwordTest = signUpPassword.value;
    if (signUpPassword.value === signUpConfirmPassword.value) {
      if(passwordTest.length < 8){
        alert("Your password is not strong")
      }
      validateEmpty(passwordTest, "Password")
      validateNumber(passwordTest, "Password");
      validateSmallLetter(passwordTest, "Password")
      validateCapitalLetter(passwordTest, "Password")
      validateSpacialLetter(passwordTest, "Password")
    }else{
      alert('your Password is not same');
    }
  });
}
if (signInCheckBox) {
  signUpCheckBox.addEventListener("click", function () {
    console.log("event run");
    if (signUpCheckBox.checked) {
      signUpPassword.setAttribute("type", "text");
      signUpConfirmPassword.setAttribute("type", "text");
    } else {
      signUpPassword.setAttribute("type", "password");
      signUpConfirmPassword.setAttribute("type", "password");
    }
  });
}

function validateEmpty(element, inputName){
  if(!element){
    alert(`${inputName} is required `)
  }
}

function validateNumber(element, inputName){
  let validation =  /[0-9]/.test(element);
  if(validation !== true){
    alert(`Your ${inputName} is not contain number`)
  }else{
    return element = true;
  }
}

function validateSmallLetter(element, inputName){
  let validation =  /[a-z]/.test(element);
  if(validation !== true){
    alert(`Your ${inputName} is not contain small letter`)
  }else{
    return element = true;
  }
}

function validateCapitalLetter(element, inputName){
  let validation =  /[A-Z]/.test(element);
  if(validation !== true){
    alert(`Your ${inputName} is not contain Capital letter`)
  }else{
    return element = true;
  }
}

function validateSpacialLetter(element, inputName){
  let validation =  /[?=.*@<>$&#]/.test(element);
  if(validation !== true){
    alert(`Your ${inputName} is not contain Spaical letter`)
  }else{
    return element = true;
  }
}
