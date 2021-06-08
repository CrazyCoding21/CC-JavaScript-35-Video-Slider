const slider = document.querySelectorAll('.slider');
slider.forEach(popup => popup.addEventListener('click', () => {
    popup.classList.toggle('active');
}));