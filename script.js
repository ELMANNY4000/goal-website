document.addEventListener("DOMContentLoaded", () => {
    // Display current time in UTC
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');
    
    function updateTime() {
        const now = new Date();
        currentTimeElement.textContent = now.toUTCString();
        currentDayElement.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
    }

    updateTime();
    setInterval(updateTime, 1000); // Update every second
});
var hNGImage = document.getElementById("hNGImage");
if (hNGImage) {
  hNGImage.addEventListener("click", function () {
    window.open("https://hng.tech/learn");
  });
}

var keywordContainer = document.getElementById("keywordContainer");
if (keywordContainer) {
  keywordContainer.addEventListener("click", function () {
    window.open("https://keyword.dog/");
  });
}

var scrapeanywebImage = document.getElementById("scrapeanywebImage");
if (scrapeanywebImage) {
  scrapeanywebImage.addEventListener("click", function () {
    window.open("https://scrapeanyweb.site/");
  });
}