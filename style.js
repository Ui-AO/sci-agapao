// const hamburger = document.getElementById('hamburger');
// const openHamburger = document.getElementById('open-hamburger');

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     openHamburger.classList.toggle('active');
// });


const ham = document.querySelector('.hamburger');
const hamIcon = document.querySelector('.hamburger img');
const openHamburger = document.querySelector('.open-hamburger');

ham.addEventListener('click', () => {
    ham.classList.toggle('active');
    openHamburger.classList.toggle('open');
});

