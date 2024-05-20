document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('click', function () {
            // Toggle full screen class on clicked box
            this.classList.toggle('full-screen');

            // Remove full screen class from other boxes
            boxes.forEach(otherBox => {
                if (otherBox !== this && otherBox.classList.contains('full-screen')) {
                    otherBox.classList.remove('full-screen');
                }
            });
        });
    });
});

