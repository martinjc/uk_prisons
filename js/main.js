// Allow one audio player to play one at a time. Code source: 
// https://stackoverflow.com/questions/61587406/allow-one-audio-player-to-play-at-a-time

// Get all <audio> elements.
const audios = document.querySelectorAll('audio');

// Pause all <audio> elements except for the one that started playing.
function pauseOtherAudios({ target }) {
  for (const audio of audios) {
    if (audio !== target) {
      audio.pause();
    }
  }
}

// Listen for the 'play' event on all the <audio> elements.
for (const audio of audios) {
  audio.addEventListener('play', pauseOtherAudios);
}


