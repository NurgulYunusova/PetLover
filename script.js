// MANUAL SLIDER

let slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myslides");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }

  slides[slideIndex - 1].style.opacity = "1";
}

showSlides(slideIndex);

// AUTO SLIDER

let counter = 1;

setInterval(() => {
  const opacity = document.querySelector(`.img-${counter}`);

  if (counter == 1) {
    opacity.style.opacity = "1";
    document.querySelector(`.img-${counter + 1}`).style.opacity = "0";
  } else {
    opacity.style.opacity = "1";
    document.querySelector(`.img-${counter - 1}`).style.opacity = "0";
  }

  counter++;

  if (counter > 2) {
    counter = 1;
  }
}, 5000);

// SCROLL TO TOP

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
