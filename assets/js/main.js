// AOS initialization
AOS.init({
    duration: 1000,
    once: false
});

// Countdown Timer
const weddingDate = new Date('2025-09-13T10:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
    document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown(); 

// Particles.js initialization
particlesJS.load('particles-js', 'assets/particlesjs-config.json?v=1.0', function() {
  console.log('callback - particles.js config loaded');
}); 

// Background Audio Player
document.addEventListener('DOMContentLoaded', function() {
    const backgroundSong = document.getElementById('background-song');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = '<i class="fas fa-play"></i>';
    const pauseIcon = '<i class="fas fa-pause"></i>';

    if (backgroundSong && playPauseBtn) {
        backgroundSong.volume = 0.5;

        playPauseBtn.addEventListener('click', function() {
            if (backgroundSong.paused) {
                backgroundSong.play();
                playPauseBtn.innerHTML = pauseIcon;
            } else {
                backgroundSong.pause();
                playPauseBtn.innerHTML = playIcon;
            }
        });
    }
}); 