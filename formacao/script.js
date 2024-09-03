// script.js
function showDetails(element) {
    element.classList.toggle('active');

    const details = element.querySelector('.details');
    if (element.classList.contains('active')) {
        details.style.maxHeight = details.scrollHeight + 'px';
    } else {
        details.style.maxHeight = '0';
    }
}
