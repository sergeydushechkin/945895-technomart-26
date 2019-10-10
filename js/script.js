if (document.querySelector(".modal-map")) {
  var mapmodal = document.querySelector(".modal-map");
  var mapshowbutton = document.querySelector(".button-showmap");
  var mapclosebutton = document.querySelector(".modal-map-close");

  mapshowbutton.addEventListener("click", function(event) {
    event.preventDefault();
    mapmodal.classList.add("modal-show");
  });

  mapclosebutton.addEventListener("click", function(event) {
    event.preventDefault();
    mapmodal.classList.remove("modal-show");
  });
}

if (document.querySelector(".modal-writeus")) {
  var writeusmodal = document.querySelector(".modal-writeus");
  var writeusshowbutton = document.querySelector(".button-feeback");
  var writeusclosebutton = document.querySelector(".modal-writeus-close");
  var writeustext = document.querySelector(".writeus-name");

  writeusshowbutton.addEventListener("click", function(event) {
    event.preventDefault();
    writeusmodal.classList.add("modal-show");
    writeustext.focus();
  });

  writeusclosebutton.addEventListener("click", function(event) {
    event.preventDefault();
    writeusmodal.classList.remove("modal-show");
  });
}

if (document.querySelector(".modal-cart")) {
  var cartmodal = document.querySelector(".modal-cart");
  var cartshowbutton = document.querySelector(".item-popup-buy");
  var cartclosebutton = document.querySelector(".modal-cart-close");
  var cartbuttonwhite = document.querySelector(".cart-button-white");

  cartshowbutton.addEventListener("click", function(event) {
    event.preventDefault();
    cartmodal.classList.add("modal-show");
  });

  cartclosebutton.addEventListener("click", function(event) {
    event.preventDefault();
    cartmodal.classList.remove("modal-show");
  });
  cartbuttonwhite.addEventListener("click", function(event) {
    event.preventDefault();
    cartmodal.classList.remove("modal-show");
  });
}


