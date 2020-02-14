// var swiper = new Swiper('.s1', {
//   slidesPerView: 3,
//   spaceBetween: 10,
//   slidesPerGroup: 3,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

// var swiper = new Swiper('.s2', {
//   cssMode: true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   mousewheel: true,
//   keyboard: true,
//   observer: true,
//   observeParents: true,
// });


// let tab = function() {
//   let tabNav = document.querySelectorAll('.tabs-nav__item'),
//     tabContent = document.querySelectorAll('.tab'),
//     tabName;

//   tabNav.forEach(item => {
//     item.addEventListener('click', selectTabNav);
//   });

//   function selectTabNav() {
//     tabNav.forEach(item => {
//       item.classList.remove('is-active');
//     });
//     this.classList.add('is-active');
//     tabName = this.getAttribute('data-tab-name');
//     selectTabContent(tabName);
//   }

//   function selectTabContent(tabName) {
//     tabContent.forEach(item => {
//       item.classList.contains(tabName)
//         ? item.classList.add('is-active')
//         : item.classList.remove('is-active');
//     });
//   }
// };

// tab();

// let menuElem = document.querySelector('.catalog__list');
// let selectElem = document.querySelector('.catalog__select');
// let items = document.querySelectorAll('.catalog__item');

// selectElem.onclick = function() {
//   menuElem.classList.toggle('open');
// };

// items.forEach(item => {
//   item.addEventListener('click', selectElem.onclick);
// });


// let deliveryTab = function() {
//   let deleveryTabNav = document.querySelectorAll(
//       '.delivery__tabs-nav-item',
//     ),
//     deleveryTabContent = document.querySelectorAll('.delivery__tab'),
//     deleveryTabName;

//   deleveryTabNav.forEach(item => {
//     item.addEventListener('click', selectDeliveryTabNav);
//   });

//   function selectDeliveryTabNav() {
//     deleveryTabNav.forEach(item => {
//       item.classList.remove('delivery__is-active');
//     });
//     this.classList.add('delivery__is-active');
//     deleveryTabName = this.getAttribute('data-tab-name');
//     selectTabContent(deleveryTabName);
//   }

//   function selectTabContent(deleveryTabName) {
//     deleveryTabContent.forEach(item => {
//       item.classList.contains(deleveryTabName)
//         ? item.classList.add('delivery__is-active')
//         : item.classList.remove('delivery__is-active');
//     });
//   }
// };

// deliveryTab();

// let deliveryMobileTab = function() {
//   let deleveryTabNav = document.querySelectorAll(
//       '.delivery__mobiletabs-nav-item',
//     ),
//     deleveryTabContent = document.querySelectorAll(
//       '.delivery__mobiletab',
//     ),
//     deleveryTabName;

//   deleveryTabNav.forEach(item => {
//     item.addEventListener('click', selectDeliveryTabNav);
//   });

//   function selectDeliveryTabNav() {
//     deleveryTabNav.forEach(item => {
//       item.classList.remove('delivery__mobile-is-active');
//     });
//     this.classList.add('delivery__mobile-is-active');
//     deleveryTabName = this.getAttribute('data-tab-name');
//     selectTabContent(deleveryTabName);
//   }

//   function selectTabContent(deleveryTabName) {
//     deleveryTabContent.forEach(item => {
//       item.classList.contains(deleveryTabName)
//         ? item.classList.add('delivery__mobile-is-active')
//         : item.classList.remove('delivery__mobile-is-active');
//     });
//   }
// };

// deliveryMobileTab();


// var swiper = new Swiper('.delivery-swiper', {
//   spaceBetween: 30,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });


// var swiper = new Swiper('.reviews__mobile-swiper-container', {
//   slidesPerView: 1,
//   // spaceBetween: 30,
//   // slidesPerGroup: 3,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });


// var modal = document.getElementById("popup-menu");

// var btn = document.getElementById("open-popup-button");

// var closebtn = document.getElementsByClassName("header__menu-close-button")[0];

// btn.onclick = function() {
//   modal.style.display = "block";
// }

//   closebtn.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


//       var banerModal = document.getElementById("banner__modal");
      
//       var banerBtn = document.getElementById("banner__button");
      
//       var sendBanerBtn = document.getElementsByClassName("banner__form-button")[0];
      
//       banerBtn.onclick = function() {
//         banerModal.style.display = "block";
//       }
      
//         sendBanerBtn.onclick = function() {
//           banerModal.style.display = "none";
//       }
      
//       window.onclick = function(event) {
//         if (event.target == banerModal) {
//           banerModal.style.display = "none";
//         }
//       }
