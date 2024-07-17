let pass = document.querySelector("#password");
let confpass = document.querySelector("#conf-password");
let passerror = document.querySelector("#pass-error");
function checkpass() {
  console.log(`${pass.value} and ${confpass.value}`);
  if (pass.value != confpass.value) {
    return 0;
  } else {
    return 1;
  }
}

let button = document.querySelector("button");

button.addEventListener("click", (e) => {
  if (!checkpass()) {
    passerror.setAttribute("style", "visibility:visible");
    pass.classList.add("invalid");
    confpass.classList.add("invalid");
    e.preventDefault();
  } else {
    passerror.setAttribute("style", "visibility:hidden");
    pass.classList.remove("invalid");
    confpass.classList.remove("invalid");
  }
})