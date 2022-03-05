import './index.css'
const trailerVideo = new URL('../videos/CyberGamesTrailer.mp4', import.meta.url);
const rupinVideo = new URL('../videos/CyberGamesinRupincollege.mp4', import.meta.url);

document.querySelector('#cybergamestrailer').src = trailerVideo;
document.querySelector('#cybergamesrupin').src = rupinVideo;