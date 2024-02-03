  
function Menu(e){
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[96px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
  }

  var currentYear = new Date().getFullYear();
  document.getElementById('currentYear').textContent = currentYear;


  document.addEventListener('DOMContentLoaded', function () {
const button = document.getElementById('navbar-toggle');
const menu = document.getElementById('navbar-dropdown');

const dropdownButton = document.getElementById('dropdownNavbarLink');
const dropdownMenu = document.getElementById('dropdownNavbar');

const doubleDropdownButton = document.getElementById('doubleDropdownButton');
const doubleDropdown = document.getElementById('doubleDropdown');

dropdownButton.addEventListener('click', () => {
dropdownMenu.classList.toggle('hidden');
});

doubleDropdownButton.addEventListener('click', () => {
doubleDropdown.classList.toggle('hidden');
});

button.addEventListener('click', function () {
menu.classList.toggle('hidden');
});
});



document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  emailjs.sendForm('service_h3i5phy', 'template_r6ly4yn', this)
  .then(function(response) {
console.log('Email sent:', response);
// Clear input fields after successful submission
document.getElementById('name').value = '';
document.getElementById('email').value = '';
document.getElementById('message').value = '';
}, function(error) {
console.log('Email sending failed:', error);
});
});



$(function() {
    "use strict";

    /*-----------------------------------
     * OWL CAROUSEL
     *-----------------------------------*/
    var $testimonialsDiv = $('.testimonials');
    if ($testimonialsDiv.length && $.fn.owlCarousel) {
        $testimonialsDiv.owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>']
        });
    }

    var $galleryDiv = $('.img-gallery');
    if ($galleryDiv.length && $.fn.owlCarousel) {
        $galleryDiv.owlCarousel({
            nav: false,
            center: true,
            loop: true,
            autoplay: true,
            dots: true,
            navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            }
        });
    }

}); /* End Fn */