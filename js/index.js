const number_input = document.getElementById("number-input");
const card_id = document.querySelector(".id");
number_input.addEventListener("input", () => {
  let value = number_input.value;
  value = value.substring(0, 16);

  if (number_input.value.length > 16) {
    number_input.value = number_input.value.substring(0, 16);
  }

  let formattedValue = "";
  for (let i = 0; i < value.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedValue += " ";
    }
    formattedValue += value[i];
  }
  card_id.textContent = formattedValue;
});
// name input
const name = document.querySelector(".name");
const name_input = document.querySelector(".name-input");
name_input.addEventListener("input", () => {
  name.innerHTML = name_input.value;
});
// mm/yy
const mm = document.querySelector(".mm");
const yy = document.querySelector(".yy");
const mm_input = document.querySelector(".mm-input");
const yy_input = document.querySelector(".yy-input");

mm_input.addEventListener("input", () => {
  mm_input.value = mm_input.value.substring(0, 2);
  mm.innerHTML = mm_input.value;
});
yy_input.addEventListener("input", () => {
  yy_input.value = yy_input.value.substring(0, 2);
  yy.innerHTML = yy_input.value;
});
// cvc
const cvc = document.querySelector(".cvc-p");
const cvc_input = document.querySelector(".cvc-input");
cvc_input.addEventListener("input", () => {
  cvc_input.value = cvc_input.value.substring(0, 3);
  cvc.innerHTML = cvc_input.value;
});
// erorrs
// Errors
const name_error = document.querySelector(".error-name");
const number_error = document.querySelector(".numbers-error");
const data_error = document.querySelector(".mm-yy-erorr");
const cvc_error = document.querySelector(".cvc-error");
const less_numb_error = document.querySelector(".numbers-secerror");
function error() {
  let hasError = false;

  if (name_input.value === "") {
    name_input.style.borderColor = "red";
    hasError = true;
    name_error.style.display = "block";
  } else {
    name_input.style.borderColor = "";
    name_error.style.display = "none";
  }

  if (number_input.value === "") {
    number_input.style.borderColor = "red";
    hasError = true;
    number_error.style.display = "block";
  } else if (number_input.value.length < 16) {
    number_input.style.borderColor = "red";
    hasError = true;
    less_numb_error.style.display = "block";
  } else {
    number_input.style.borderColor = "";
    number_error.style.display = "none";
    less_numb_error.style.display = "none";
  }

  if (mm_input.value === "") {
    mm_input.style.borderColor = "red";
    hasError = true;
    data_error.style.display = "block";
  } else {
    mm_input.style.borderColor = "";
    data_error.style.display = "none";
  }

  if (yy_input.value === "") {
    yy_input.style.borderColor = "red";
    hasError = true;
  } else {
    yy_input.style.borderColor = "";
  }

  if (cvc_input.value === "") {
    cvc_input.style.borderColor = "red";
    hasError = true;
    cvc_error.style.display = "block";
  } else {
    cvc_input.style.borderColor = "";
    cvc_error.style.display = "none";
  }

  return hasError;
}

// button click
const congratulation_div = document.querySelector(".congratulation-div");
const button = document.querySelector(".confrim");
const information_div = document.querySelector(".information-div");
button.addEventListener("click", () => {
  if (!error()) {
    information_div.style.display = "none";
    congratulation_div.style.display = "block";
  } else {
    information_div.style.display = "block";
    congratulation_div.style.display = "none";
  }
});
