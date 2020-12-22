'use strict';
(function () {
  var lastParagraph = document.querySelector('.gym__description p:last-child');
  if (lastParagraph) {
    var removeText = function () {
      if (window.innerWidth < 1200) {
        lastParagraph.style.display = 'none';
      } else {
        lastParagraph.style.display = 'inline';
      }
    };
    removeText();
    window.addEventListener('resize', removeText);
  }
}());

(function () {
  var lastParagraph = document.querySelector('.gym__description p:last-child');
  if (lastParagraph) {
    var removeText = function () {
      if (window.innerWidth < 1200) {
        lastParagraph.style.display = 'none';
      } else {
        lastParagraph.style.display = 'inline';
      }
    };
    removeText();
    window.addEventListener('resize', removeText);
  }
}());

(function () {
  var slideIndex = 1;
  var rightArrow = document.querySelector('.coaches__arrow--right');
  var leftArrow = document.querySelector('.coaches__arrow--left');
  var slidesDesktop = document.querySelectorAll('.coaches__slide-desktop');
  var slidesTablet = document.querySelectorAll('.coaches__slide-tablet');
  var slidesMobile = document.querySelectorAll('.coaches__slide-mobile');
  var slides;


  if (rightArrow && leftArrow && slidesDesktop && slidesTablet && slidesMobile) {
    var detectSlides = function () {
      if (window.innerWidth >= 1200) {
        slides = document.querySelectorAll('.coaches__slide-desktop');
      }
      if (window.innerWidth < 1200) {
        slides = document.querySelectorAll('.coaches__slide-tablet');
      }
      if (window.innerWidth < 768) {
        slides = document.querySelectorAll('.coaches__slide-mobile');
      }
    };

    var onResize = function () {
      detectSlides();
      showSlides(slideIndex);
    };

    var onPlusSlide = function () {
      showSlides(slideIndex += 1);
    };

    var onMinusSlide = function () {
      showSlides(slideIndex -= 1);
    };

    var showSlides = function (n) {
      var i;
      for (var j = 0; j < slidesDesktop.length; j++) {
        slidesDesktop[j].style.display = 'flex';
      }
      for (var k = 0; k < slidesTablet.length; k++) {
        slidesTablet[k].style.display = 'flex';
      }
      for (var m = 0; m < slidesMobile.length; m++) {
        slidesMobile[m].style.display = 'flex';
      }
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slides[slideIndex - 1].style.display = 'flex';
    };

    detectSlides();
    showSlides(slideIndex);
    window.addEventListener('resize', onResize);

    rightArrow.addEventListener('click', onPlusSlide);
    leftArrow.addEventListener('click', onMinusSlide);
  }
}());

(function () {
  var slideIndex = 1;
  var rightArrow = document.querySelector('.reviews__arrow--right');
  var leftArrow = document.querySelector('.reviews__arrow--left');
  var slides = document.querySelectorAll('.reviews__slide');

  if (rightArrow && leftArrow && slides) {

    var onResize = function () {
      showSlides(slideIndex);
    };

    var onPlusSlide = function () {
      showSlides(slideIndex += 1);
    };

    var onMinusSlide = function () {
      showSlides(slideIndex -= 1);
    };

    var showSlides = function (n) {
      var i;
      for (var j = 0; j < slides.length; j++) {
        slides[j].style.display = 'flex';
      }
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slides[slideIndex - 1].style.display = 'flex';
    };

    showSlides(slideIndex);
    window.addEventListener('resize', onResize);

    rightArrow.addEventListener('click', onPlusSlide);
    leftArrow.addEventListener('click', onMinusSlide);
  }
}());
