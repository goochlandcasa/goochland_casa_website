const mainVolunteerLink = document.getElementById('main-volunteer-link');
const mainDonateLink = document.getElementById('main-donate-link');
const mainAboutLink = document.getElementById('main-about-link');
const mainContactLink = document.getElementById('main-contact-link');
const mainGalleryLink = document.getElementById('main-gallery-link');
const mainHistoryLink = document.getElementById('main-history-link');
const mainBoardLink = document.getElementById('main-board-link');
const volunteerSection = document.getElementById('volunteer-section');
const volunteerStart = document.getElementById('volunteer-start');
const donateSection = document.getElementById('donate-section');
const donateStart = document.getElementById('donate-start');
const aboutStart = document.getElementById('about-start');
const contactSection = document.getElementById('contact-section');
const toggler = document.getElementById('hamburger-checkbox');

mainVolunteerLink.addEventListener('click', (e) => {
  e.preventDefault();
  // scroll({
  //   top:0,
  //   left:0,
  //   behavior:"smooth"
  // });
  volunteerStart.scrollIntoView({behavior: "smooth"});
});

mainDonateLink.addEventListener('click', (e) => {
  e.preventDefault();
  donateStart.scrollIntoView({behavior: "smooth"});
});

mainAboutLink.addEventListener('click', (e) => {
  e.preventDefault();
  aboutStart.scrollIntoView({behavior: "smooth"});
}); 

mainContactLink.addEventListener('click', (e) => {
  e.preventDefault();
  contactSection.scrollIntoView({behavior: "smooth"});
});

mainGalleryLink.addEventListener('click', (e) => {
  location = "./second.html";
});
mainHistoryLink.addEventListener('click', (e) => {
  location = "./second.html#history-start";
});
mainBoardLink.addEventListener('click', (e) => {
  location = "./second.html#board-start";
});