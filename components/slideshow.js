const popupBtn = document.getElementById('popup-btn');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

popupBtn.addEventListener('click', () => {
    popup.classList.remove('opacity-0', 'pointer-events-none');
    popupContent.classList.remove('scale-75');
    popup.classList.add('opacity-100');
    popupContent.classList.add('scale-100');
});

closePopup.addEventListener('click', () => {
    popup.classList.add('opacity-0', 'pointer-events-none');
    popupContent.classList.add('scale-75');
    popup.classList.remove('opacity-100');
    popupContent.classList.remove('scale-100');
});