// Мольное окно карты
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

// МОдальное окно "Напишите нам"
if (document.querySelector(".modal-writeus")) {
  var writeusmodal = document.querySelector(".modal-writeus");
  var writeusshowbutton = document.querySelector(".button-feedback");
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

// Модальное окно "Товар добавлен в корзину"
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


// Промо слайдер, работает как от checkbox так и от стрелок(циклически)
if (document.querySelector(".promo-slider")) {
  var promoSlide1 = document.querySelector(".promo-slider-slide1");
  var promoSlide2 = document.querySelector(".promo-slider-slide2");
  var promoSliderRadio1 = document.querySelector(".promo-slider-radio1");
  var promoSliderRadio2 = document.querySelector(".promo-slider-radio2");
  var promoSliderBack = document.querySelector(".promo-slider-back");
  var promoSliderForward = document.querySelector(".promo-slider-forward");

  promoSliderBack.addEventListener("click", function(event) {
    event.preventDefault();
    if (promoSliderRadio1.checked && !promoSliderRadio2.checked) {
      promoSliderRadio2.checked = true;
      ShowSlide(2);
    } else {
      promoSliderRadio1.checked = true;
      promoSliderRadio2.checked = false;
      ShowSlide(1);
    }
  });

  promoSliderForward.addEventListener("click", function(event) {
    event.preventDefault();
    if (promoSliderRadio1.checked && !promoSliderRadio2.checked) {
      promoSliderRadio2.checked = true;
      ShowSlide(2);
    } else {
      promoSliderRadio1.checked = true;
      promoSliderRadio2.checked = false;
      ShowSlide(1);
    }
  });

  promoSliderRadio1.addEventListener("change", function(event) {
    event.preventDefault();
    if (event.target.checked) {
      ShowSlide(1);
    }
  });

  promoSliderRadio2.addEventListener("change", function(event) {
    event.preventDefault();
    if (event.target.checked) {
      ShowSlide(2);
    }
  });


  function ShowSlide(num) {
    if (num === 1) {
      promoSlide2.classList.add("promo-slider-hide");
      promoSlide1.classList.remove("promo-slider-hide");
    } else {
      promoSlide1.classList.add("promo-slider-hide");
      promoSlide2.classList.remove("promo-slider-hide");
    }
  }

}
