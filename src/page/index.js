import './index.css'
const trailerVideo = new URL('../videos/CyberGamesTrailer.mp4', import.meta.url);
const rupinVideo = new URL('../videos/CyberGamesinRupincollege.mp4', import.meta.url);
const trailerPoster = new URL('../images/videopostertrailer.png', import.meta.url);
const rupinPoster = new URL('../images/videoposterrupin.png', import.meta.url);

document.querySelector('#cybergamestrailer').src = trailerVideo;
document.querySelector('#cybergamestrailer').poster = trailerPoster;
document.querySelector('#cybergamesrupin').src = rupinVideo;
document.querySelector('#cybergamesrupin').poster = rupinPoster;