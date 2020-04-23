const secondDonateLink = document.getElementById('second-donate-link');
const secondAboutLink = document.getElementById('second-about-link');
const secondContactLink = document.getElementById('second-contact-link');
const indexGalleryLink = document.getElementById('index-gallery-link');
const indexHistoryLink = document.getElementById('index-history-link');
const indexBoardLink = document.getElementById('index-board-link');

secondDonateLink.addEventListener('click', (e) => {
  location = "./main.html#donate-start";
});
secondAboutLink.addEventListener('click', (e) => {
  location = "./main.html#about-start";
});
secondContactLink.addEventListener('click', (e) => {
  location = "./main.html#contact-start";
});
indexHistoryLink.addEventListener('click', (e) => {
  location = "./second.html#history-start";
});
indexBoardLink.addEventListener('click', (e) => {
  location = "./second.html#board-start";
});