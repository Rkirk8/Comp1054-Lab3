document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.svg-button');

    button.addEventListener('mouseover', function () {
        button.classList.add('move');
    });

    button.addEventListener('animationend', function () {
        button.classList.remove('move');
    });
});
