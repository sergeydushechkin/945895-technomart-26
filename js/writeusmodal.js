var writeusmodal = document.querySelector(".modal-writeus");
var showbutton = document.querySelector(".button-feeback");
var closebutton = document.querySelector(".modal-writeus-close");
var writeustext = document.querySelector(".writeus-name");

showbutton.addEventListener("click", function(event) {
  event.preventDefault();
  writeusmodal.classList.add("modal-show");
  writeustext.focus();
});

closebutton.addEventListener("click", function(event) {
  event.preventDefault();
  writeusmodal.classList.remove("modal-show");
});
