$(document).ready(function() {
  $('#mobile_btn').on('click', function() {
    $('#mobile_menu').toggleClass('active');
    $('#mobile_btn').find('i').toggleClass('fa-x');
  });

  const sections = $('section');
  const navItems = $('.nav-item');

  $(window).on('scroll', function (){
    const header = $('header');
    const scrollPosition = $(window).scrollTop() - header.outerHeight();

    let activeSectionIndex = 0;

    if (scrollPosition <= 0) {
      header.css('box-shadow', 'none');
    } else {
      header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
    }

    sections.each(function(i) {
      const section = $(this);
      const sectionTop = section.offset().top - 96;
      const sectionBottom = sectionTop+ section.outherHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
        return false;
      }
    })
    navItems.removeClass('active')
    $(navItems[activeSectionIndex]).addClass('active');
  });

  const slides = document.querySelectorAll(".carrossel-slide");
const prevBtn = document.querySelector(".carrossel-btn.prev");
const nextBtn = document.querySelector(".carrossel-btn.next");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Eventos de clique
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Troca automática
setInterval(nextSlide, 5000);
});