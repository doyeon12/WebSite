document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    function updateSliderPosition() {
        slider.style.transform = `translateX(${-currentIndex * 100}px)`;
    }

    prevBtn.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

    nextBtn.addEventListener('click', function () {
        if (currentIndex < slider.children.length - 3) { // Adjust based on the number of items shown at once
            currentIndex++;
            updateSliderPosition();
        }
    });

    updateSliderPosition(); // Initialize slider position
});
