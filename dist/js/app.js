/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "burgerMenu": () => (/* binding */ burgerMenu),
/* harmony export */   "isWebp": () => (/* binding */ isWebp),
/* harmony export */   "phoneMask": () => (/* binding */ phoneMask),
/* harmony export */   "popups": () => (/* binding */ popups)
/* harmony export */ });
/*---------------------------------------------------------------------------
Проверка WebP
---------------------------------------------------------------------------*/
function isWebp() {
   function testWebP(callback) {
      const webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height === 2);
      };
      webP.src =
         "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   testWebP(function (support) {
      document.body.classList.add(support ? "webp" : "no-webp");
   });
}


/*---------------------------------------------------------------------------
Маска телефона
---------------------------------------------------------------------------*/
function phoneMask() {
   document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll("input.tel-mask").forEach((input) => {
         let keyCode;
         function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            let pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            let matrix = "+7 (___) ___ __ __",
               i = 0,
               val = this.value.replace(/\D/g, ""),
               new_value = matrix.replace(/[_\d]/g, (a) =>
                  i < val.length ? val.charAt(i++) : a
               );
            i = new_value.indexOf("_");
            if (i !== -1) {
               i < 5 && (i = 3);
               new_value = new_value.slice(0, i);
            }
            let reg = matrix
               .substr(0, this.value.length)
               .replace(/_+/g, (a) => `\\d{1,${a.length}}`)
               .replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58)) {
               this.value = new_value;
            }
            if (event.type === "blur" && this.value.length < 5) this.value = "";
         }

         input.addEventListener("input", mask);
         input.addEventListener("focus", mask);
         input.addEventListener("blur", mask);
         input.addEventListener("keydown", mask);
      });
   });
}


/*---------------------------------------------------------------------------
Бургер меню
---------------------------------------------------------------------------*/
function burgerMenu() {
   document.addEventListener("DOMContentLoaded", () => {
      const menuIcon = document.querySelector(".menu__icon");
      const menuBody = document.querySelector(".menu__body");
      const body = document.body;
      const menuBodyClose = document.querySelector(".menu__body-close");

      if (!menuIcon || !menuBody) return;

      const closeMenu = () => {
         menuIcon.classList.remove("active");
         menuBody.classList.remove("active");
         body.classList.remove("no-scroll");
      };

      menuIcon.addEventListener("click", () => {
         menuIcon.classList.toggle("active");
         menuBody.classList.toggle("active");
         body.classList.toggle("no-scroll");
      });

      menuBody.addEventListener("click", (e) => {
         if (e.target.tagName === "A" || e.target.closest("a")) closeMenu();
      });

      if (menuBodyClose) menuBodyClose.addEventListener("click", closeMenu);

      document.addEventListener("click", (e) => {
         if (!menuBody.contains(e.target) && !menuIcon.contains(e.target)) closeMenu();
      });
   });
}


/*---------------------------------------------------------------------------
Попапы
---------------------------------------------------------------------------*/
function popups() {
   document.addEventListener("DOMContentLoaded", () => {
      const openButtons = document.querySelectorAll(".open-popup");

      openButtons.forEach((button) => {
         button.addEventListener("click", function () {
            const popupId = this.dataset.popup;
            const popup = document.getElementById(popupId);
            if (popup) {
               popup.classList.add("show");
               document.body.style.overflow = "hidden";
            }
         });
      });

      document.addEventListener("click", (e) => {
         const openPopup = document.querySelector(".popup.show");
         if (!openPopup) return;

         const isCloseBtn = e.target.closest(".popup__close");
         const isInsideBody = e.target.closest(".popup__body");
         const isPopupArea = e.target.closest(".popup");

         if (isCloseBtn || (!isInsideBody && isPopupArea)) {
            openPopup.classList.remove("show");
            document.body.style.overflow = "";
         }
      });
   });
}


/*==========================================================================
Swiper init
============================================================================*/
/* const reviewsSlider = document.querySelector(".reviews__slider");

if (reviewsSlider) {
   const reviewsSwiper = new Swiper(reviewsSlider, {
      slidesPerView: 1,
      loop: true,
      freeMode: false,
   });
} */

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();
_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.burgerMenu();
_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.popups();
/* flsFunctions.phoneMask(); */


/*==========================================================================
Preloader
============================================================================*/
document.addEventListener("DOMContentLoaded", () => {
   const preloader = document.querySelector(".preloader");

   const MIN_TIME = 1000;
   const startTime = Date.now();

   window.addEventListener("load", () => {
      const timePassed = Date.now() - startTime;
      const delay = Math.max(0, MIN_TIME - timePassed);

      setTimeout(() => {
         preloader.classList.add("hidden");

         setTimeout(() => {
            preloader.remove();
         }, 1200);
      }, delay);
   });
});


/*==========================================================================
Observer Animation
============================================================================*/
if (document.readyState === "complete") {
   init();
} else {
   window.addEventListener("load", init);
}

function init() {
   function onEntry(entry) {
      entry.forEach(change => {
         if (change.isIntersecting) {
            change.target.classList.add('element-show');
         }
      });
   }

   let options = { threshold: [0.0] };
   let observer = new IntersectionObserver(onEntry, options);
   let elements = document.querySelectorAll('.element-animation');
   for (let elm of elements) {
      observer.observe(elm);
   }
}



/*==========================================================================
Move buttons
============================================================================*/
document.addEventListener("DOMContentLoaded", () => {
   const headerButtons = document.querySelector(".header__buttons");
   const menuBody = document.querySelector(".menu__body");
   const headerBody = document.querySelector(".header__body");

   if (!headerButtons || !menuBody || !headerBody) return;

   const originalParent = headerBody;
   const originalNextSibling = headerButtons.nextElementSibling;

   const mq = window.matchMedia("(max-width: 1200px)");

   function handleMove(e) {
      if (e.matches) {
         if (headerButtons.parentElement !== menuBody) {
            menuBody.appendChild(headerButtons);
         }
      } else {
         if (headerButtons.parentElement !== originalParent) {
            if (originalNextSibling) {
               originalParent.insertBefore(headerButtons, originalNextSibling);
            } else {
               originalParent.appendChild(headerButtons);
            }
         }
      }
   }

   handleMove(mq);
   mq.addEventListener("change", handleMove);
});

/*==========================================================================
Hero image 
============================================================================*/
document.addEventListener("DOMContentLoaded", () => {
   const heroImg = document.querySelector(".hero__image img");

   if (!heroImg) return;

   const wrapper = heroImg.parentElement;
   const maxRotate = 5;
   const maxShadowShift = 12;

   wrapper.addEventListener("mousemove", (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const halfW = rect.width / 2;

      const rotateY = ((x - halfW) / halfW) * maxRotate;
      const shadowX = -rotateY / maxRotate * maxShadowShift;

      heroImg.style.transform = `rotateY(${rotateY}deg) scale3d(1, 1, 1)`;
      heroImg.style.filter = `drop-shadow(${shadowX}px 8px 12px rgba(77, 115, 252, 0.3))`;
   });

});

/*==========================================================================
Related slider
============================================================================*/
const cardsSlider = document.querySelector(".latest__slider");

if (cardsSlider) {
   const cardsSwiper = new Swiper(cardsSlider, {
      loop: true,
      spaceBetween: 32,
      navigation: {
         nextEl: '.latest__next',
         prevEl: '.latest__prev',
      },
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         650: {
            slidesPerView: 2,
         },
         1100: {
            slidesPerView: 3,
         },
         1600: {
            slidesPerView: 4,
         }
      }
   });
}

/*==========================================================================
Filter tabs
============================================================================*/
document.addEventListener('DOMContentLoaded', function () {
   const tabs = document.querySelectorAll('.filters__tab');
   const cards = document.querySelectorAll('.filters__card');

   tabs.forEach(tab => {
      tab.addEventListener('click', () => {
         const tabId = tab.getAttribute('data-tab');
         tabs.forEach(t => t.classList.remove('active'));
         tab.classList.add('active');
         cards.forEach(card => {
            card.classList.remove('show');
         });
         const targetCard = document.querySelector(`.filters__card[data-tab="${tabId}"]`);
         if (targetCard) {
            targetCard.classList.add('show');
         }
      });
   });
});

/*==========================================================================
BC
============================================================================*/
function updateBCText() {
   const isMobile = window.innerWidth <= 767;
   const bcElements = document.querySelectorAll('.bc');

   bcElements.forEach(element => {
      const fullText = 'Бизнес-центра';
      const shortText = 'БЦ';

      if (isMobile) {
         if (element.textContent.trim() === fullText) {
            element.textContent = shortText;
         }
      } else {
         if (element.textContent.trim() === shortText) {
            element.textContent = fullText;
         }
      }
   });
}

document.addEventListener('DOMContentLoaded', updateBCText);
window.addEventListener('resize', updateBCText);


/*==========================================================================
Reviews slider
============================================================================*/
const reviewsSlider = document.querySelector(".reviews__slider");

if (reviewsSlider) {
   const reviewsSwiper = new Swiper(reviewsSlider, {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 0,
      effect: 'fade',
      navigation: {
         nextEl: '.reviews__next',
         prevEl: '.reviews__prev',
      },
   });
}

})();

/******/ })()
;