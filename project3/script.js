const slider = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');
    const nav = document.querySelector('nav');
    const navContent2 = document.querySelector('#nav-content2')


    // for navigation

    function toggleNav() {
        var x = document.getElementById("myNav");
        if (x.className === "responsive") {
            x.className += " open";
            nav.style.backgroundColor = 'orangered';
            navContent2.style.backgroundColor = 'white'
        } else {
            x.className = "responsive";
            nav.style.backgroundColor = 'white';
        }
    }


    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        }

        slider.style.transform = `translateX(${-currentIndex * 100}%)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');

        // Reset size of all dots
        dots.forEach(dot => dot.style.transform = 'scale(0.5)');
        // Increase size of active dot
        dots[currentIndex].style.transform = 'scale(1)';

        // Add jump class to active dot for a short duration
        dots[currentIndex].classList.add('jump');
        setTimeout(() => {
            dots[currentIndex].classList.remove('jump');
        }, 500); // Duration of the jump animation (in milliseconds)
    }

    prevBtn.addEventListener('click', () => {
        currentIndex--;
        showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        showSlide(currentIndex);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    // Automatic slide change
    setInterval(() => {
        currentIndex++;
        showSlide(currentIndex);
    }, 3000);