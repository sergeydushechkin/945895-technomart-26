var mapmodal = document.querySelector(".modal-map");
var showbutton = document.querySelector(".button-showmap");
var closebutton = document.querySelector(".modal-map-close");

showbutton.addEventListener("click", function(event) {
  event.preventDefault();
  mapmodal.classList.add("modal-show");
});

closebutton.addEventListener("click", function(event) {
  event.preventDefault();
  mapmodal.classList.remove("modal-show");
});
