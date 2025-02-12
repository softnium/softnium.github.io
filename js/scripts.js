document.addEventListener("DOMContentLoaded", function () {
    function updateCountdown() {
        const targetDate = new Date("March 10, 2025 00:00:00 GMT+0530").getTime();
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.querySelector(".days").textContent = days.toString().padStart(2, '0');
            document.querySelector(".hours").textContent = hours.toString().padStart(2, '0');
            document.querySelector(".minutes").textContent = minutes.toString().padStart(2, '0');
            document.querySelector(".seconds").textContent = seconds.toString().padStart(2, '0');
        } else {
            document.getElementById("timer").innerHTML = "<h3>We are live now!</h3>";
        }
    }

    updateCountdown(); // Initial call
    setInterval(updateCountdown, 1000); // Update every second
});
