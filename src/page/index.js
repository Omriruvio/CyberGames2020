import './index.css'

const teamInfo = {
  omri: {name:'Omri Ruvio', role:'Co-founder / CEO',about: 'Full stack web developer, cyber enthusiast, L33T gamer, leader of virtual and real-life teams.'},
  guy: {name:'Guy Ruvio', role:'Co-founder', about:'co-founder of Towersec (acq. by Harman / Samsung), Ex 8200, high security positions in governmental organizations conductive security assessments of high-profile civil organizations and Ethical hacker.'},
  shai: {name:'Shai Kavas', role:'Advisory Board',about: 'Cyber Security Veteran. RAD, Intel. CEO of CyberGuild Ventures, Investor and Venture Builder.'},
  saar: {name:'Saar Dickman', role:'Advisory Board',about: 'Co-founder of Towersec (acq. by Harman / Samsung), Founder and CEO of Dynamicinfrastructure'}
}

const trailerVideo = new URL('../videos/CyberGamesTrailer.mp4', import.meta.url);
const rupinVideo = new URL('../videos/CyberGamesinRupincollege.mp4', import.meta.url);
const trailerPoster = new URL('../images/videopostertrailer.png', import.meta.url);
const rupinPoster = new URL('../images/videoposterrupin.png', import.meta.url);
const teamMemberNameElement = document.querySelector('#js-team-member-name')
const teamMemberRoleElement = document.querySelector('#js-team-member-role')
const teamMemberDescriptionElement = document.querySelector('#js-team-member-description')
const omriIcon = document.querySelector('#js-omri-icon')
const guyIcon = document.querySelector('#js-guy-icon')
const shaiIcon = document.querySelector('#js-shai-icon')
const saarIcon = document.querySelector('#js-saar-icon')

document.querySelector('#cybergamestrailer').src = trailerVideo;
document.querySelector('#cybergamestrailer').poster = trailerPoster;
document.querySelector('#cybergamesrupin').src = rupinVideo;
document.querySelector('#cybergamesrupin').poster = rupinPoster;

omriIcon.addEventListener('mouseenter', () => renderTeamInfo(teamInfo.omri));
guyIcon.addEventListener('mouseenter', () => renderTeamInfo(teamInfo.guy));
shaiIcon.addEventListener('mouseenter', () => renderTeamInfo(teamInfo.shai));
saarIcon.addEventListener('mouseenter', () => renderTeamInfo(teamInfo.saar));

function renderTeamInfo (member) {
  teamMemberNameElement.textContent = member.name;
  teamMemberRoleElement.textContent = member.role;
  teamMemberDescriptionElement.textContent = member.about;
}