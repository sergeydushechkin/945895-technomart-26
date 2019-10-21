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

// Модальное окно "Напишите нам"
if (document.querySelector(".modal-writeus")) {
  var writeusModal = document.querySelector(".modal-writeus");
  var writeusShowButton = document.querySelector(".button-feedback");
  var writeusCloseButton = document.querySelector(".modal-writeus-close");
  var writeusForm = document.querySelector(".modal-writeus-form");

  var writeusName = document.querySelector(".writeus-name");
  var writeusEmail = document.querySelector(".writeus-email");
  var writeusText = document.querySelector(".writeus-text");
  var writeusSubmit = document.querySelector(".writeus-submit");

  writeusShowButton.addEventListener("click", function(event) {
    event.preventDefault();
    writeusModal.classList.add("modal-show");
    writeusName.focus();
  });

  writeusCloseButton.addEventListener("click", function(event) {
    event.preventDefault();
    if (writeusModal.classList.contains("modal-show")) {
      writeusModal.classList.remove("modal-show");
      writeusModal.classList.remove("modal-error");
    }
  });

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      event.preventDefault();
      if (writeusModal.classList.contains("modal-show")) {
        writeusModal.classList.remove("modal-error");
        writeusModal.classList.remove("modal-show");
      }
    }
  });

  writeusForm.addEventListener("submit", function(event) {
    if (!writeusName.value || !writeusEmail.value || !writeusText.value) {
      event.preventDefault();
      writeusModal.classList.remove("modal-error");
      writeusModal.offsetWidth = writeusModal.offsetWidth;
      writeusModal.classList.add("modal-error");
    }
  });
}

// Модальное окно карты
if (document.querySelector(".modal-map")) {
  var mapModal = document.querySelector(".modal-map");
  var mapShowButton = document.querySelector(".button-showmap");
  var mapCloseButton = document.querySelector(".modal-map-close");

  mapShowButton.addEventListener("click", function(event) {
    event.preventDefault();
    mapModal.classList.add("modal-show");
  });

  mapCloseButton.addEventListener("click", function(event) {
    event.preventDefault();
    mapModal.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      event.preventDefault();
      if (mapModal.classList.contains("modal-show")) {
        mapModal.classList.remove("modal-show");
      }
    }
  });
}

// Модальное окно "Товар добавлен в корзину"
if (document.querySelector(".modal-cart")) {
  var cartModal = document.querySelector(".modal-cart");
  var cartShowButton = document.querySelectorAll(".item-popup-buy");
  var cartCloseButton = document.querySelector(".modal-cart-close");
  var cartButtonWhite = document.querySelector(".cart-button-white");
  var headerTopBin = document.querySelector(".header-top-bin");

  for (var i = 0; i < cartShowButton.length; i++) {
    cartShowButton[i].addEventListener("click", function(event) {
      event.preventDefault();
      headerTopBin.dataset.binCount++;
      cartModal.classList.add("modal-show");
    });
  }

  cartCloseButton.addEventListener("click", function(event) {
    event.preventDefault();
    cartModal.classList.remove("modal-show");
  });

  cartButtonWhite.addEventListener("click", function(event) {
    event.preventDefault();
    cartModal.classList.remove("modal-show");
  });
}

if (document.querySelector(".item-popup-addfavorites")) {
  var headerTopFavorites = document.querySelector(".header-top-favorites");
  var itemPopupAddFavorites = document.querySelectorAll(".item-popup-addfavorites");

  for (var i = 0; i < itemPopupAddFavorites.length; i++) {
    itemPopupAddFavorites[i].addEventListener("click", function(event) {
      event.preventDefault();
      headerTopFavorites.dataset.favoritesCount++;
    });
  }
}




