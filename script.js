document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById('imageContainer');
    const revealImage = document.getElementById('image2');
    let clickCount = 0;
    const totalClicks = 10;

    imageContainer.addEventListener('click', () => {
        clickCount++;
        if (clickCount > totalClicks) clickCount = totalClicks;

        const revealPercentage = (clickCount / totalClicks) * 100;
        revealImage.style.clipPath = `inset(0 ${100 - revealPercentage}% 0 0)`;
    });
});
