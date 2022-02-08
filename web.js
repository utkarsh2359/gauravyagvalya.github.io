// Menu Toggle
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let footer = document.querySelector('.footer');

toggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
    footer.classList.toggle('active');
})

$('.slide').hiSlide();