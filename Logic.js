document.addEventListener('DOMContentLoaded', function () {
    // Get the menu-toggle checkbox and all the links in the menu
    const menuToggle = document.getElementById('menu-toggle');
    const menuLinks = document.querySelectorAll('nav div a');

    // Add a click event listener to each link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Uncheck the menu-toggle checkbox when a link is clicked
            menuToggle.checked = false;
        });
    });
});


const words = ['IA Generativa','Automatizaciones','Marketing Web3'];
let index = 0;

function changeWord() {
    const dynamicWordElement = document.getElementById('dynamicWord');
    
    // Fade out the current word
    dynamicWordElement.style.opacity = 0;

    // Wait for the transition to finish, then change the word and fade it in
    setTimeout(() => {
        index = (index + 1) % words.length;  // Move to the next word, loop back to the start if necessary
        dynamicWordElement.textContent = words[index];
        dynamicWordElement.style.opacity = 1;
    }, 300);  // 0.3s (300ms) matches the CSS transition duration
}

// Change the word every 3 seconds
setInterval(changeWord, 3000);

//Hide & show FAQs

document.addEventListener("DOMContentLoaded", function() {
    let faqs = document.querySelectorAll('.faq-toggle');
    faqs.forEach(function(faq, index) {
        faq.addEventListener('change', function() {
            faqs.forEach(function(innerFaq, innerIndex) {
                if(index !== innerIndex) innerFaq.checked = false;
            });
        });
    });
});

// Carrousel logic

$(document).ready(function(){
    function initCarousel() {
        if ($(window).width() < 960) {
            var $autoplay = $('.autoplay');
            // Verifica que el elemento exista y aún no tenga Slick inicializado
            if ($autoplay.length && !$autoplay.hasClass('slick-initialized')) {
                $autoplay.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    arrows: false
                });
            }
        }
    }

    initCarousel();
    $(window).resize(initCarousel);
});