import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const lastPlayedTime = `videoplayer-current-time`;
const currentTime = localStorage.getItem(lastPlayedTime);

function saveLastTime(data) {
  localStorage.setItem(lastPlayedTime, data.seconds);
}

player.on('timeupdate', throttle(saveLastTime, 1000));

if (currentTime) {
  player.setCurrentTime(currentTime);
}
