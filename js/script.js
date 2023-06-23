var typed = new Typed('.auto-type', {
    strings: ['Designer', 'Programmer', '3D artist'],
    typeSpeed: 80,
    backSpeed: 100,
    loop: true
})

/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== mobile menu ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== scroll sctie ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL ani  =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });




/*===== light/dark mode switrch =====*/
const modeToggle = document.getElementById('mode-toggle');
const body = document.querySelector('body');
const header = document.querySelector('header');
const invertElements = document.getElementsByClassName('invert-color');

modeToggle.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');

    for (let i = 0; i < invertElements.length; i++) {
        invertElements[i].classList.toggle('invert-color');
    }
});

/*===== Work pop up =====*/
function showPopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.classList.add('active');
}

function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.classList.remove('active');
}



/*===== Contact/modal =====*/

document.addEventListener("DOMContentLoaded", function() {
    // datepicker
    flatpickr("#date-input", {
        dateFormat: "d-m-Y",
    });

    // button en modal
    const bookingBtn = document.getElementById("booking-btn");
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close");
    const bookingDetails = document.getElementById("booking-details");
    const timeInput = document.getElementById("time-input");


    // Booking button 
    bookingBtn.addEventListener("click", function () {
        const nameInput = document.querySelector(".contact__input[name='name']");
        const emailInput = document.querySelector(".contact__input[name='email']");
        const messageInput = document.querySelector(".contact__input[name='message']");
        const selectedDate = document.getElementById("date-input").value;
        const selectedTime = timeInput.value;

        // display in modal
        // separate text elements
        const nameElement = document.createElement("p");
        nameElement.textContent = `Naam: ${nameInput.value}`;

        const emailElement = document.createElement("p");
        emailElement.textContent = `E-mail: ${emailInput.value}`;

        const messageElement = document.createElement("p");
        messageElement.textContent = `Bericht: ${messageInput.value}`;

        const dateTimeElement = document.createElement("p");
        dateTimeElement.textContent = `Datum en tijd: ${selectedDate} ${selectedTime}`;

        // link style
        nameElement.classList.add("modal-info");
        emailElement.classList.add("modal-info");
        messageElement.classList.add("modal-info");
        dateTimeElement.classList.add("modal-info");

        // element link met modal
        bookingDetails.innerHTML = "";
        bookingDetails.appendChild(nameElement);
        bookingDetails.appendChild(emailElement);
        bookingDetails.appendChild(messageElement);
        bookingDetails.appendChild(dateTimeElement);
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });
});

/*===== Video player =====*/
const video = document.getElementById('myVideo');
const playButton = document.getElementById('play-button');
const fastForwardBtn = document.getElementById('fast-forward-btn');
const videoBtns = document.getElementsByClassName('video-btn');

let isPlaying = false;

playButton.addEventListener('click', togglePlay);
fastForwardBtn.addEventListener('click', fastForward);
Array.from(videoBtns).forEach(btn => btn.addEventListener('click', changeVideo));
video.addEventListener('play', hidePlayButton);
video.addEventListener('pause', showPlayButton);

// playbutton 
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// fast forward button
function fastForward() {
    video.currentTime += 10;
}

// video switch
function changeVideo() {
    const src = this.getAttribute('data-src');
    video.src = src;
    if (isPlaying) {
        video.play();
    }
    Array.from(videoBtns).forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
}

// hide/show play button
function hidePlayButton() {
    playButton.style.opacity = '0';
    isPlaying = true;
}
function showPlayButton() {
    playButton.style.opacity = '1';
    isPlaying = false;
}
