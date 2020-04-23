const indexDonateLink = document.getElementById('index-donate-link');
const indexAboutLink = document.getElementById('index-about-link');
const indexContactLink = document.getElementById('index-contact-link');
const indexGalleryLink = document.getElementById('index-gallery-link');
const indexHistoryLink = document.getElementById('index-history-link');
const indexBoardLink = document.getElementById('index-board-link');

indexDonateLink.addEventListener('click', (e) => {
  location = "./main.html#donate-start";
});
indexAboutLink.addEventListener('click', (e) => {
  location = "./main.html#about-start";
});
indexContactLink.addEventListener('click', (e) => {
  location = "./main.html#contact-section";
});
indexGalleryLink.addEventListener('click', (e) => {
  location = "./second.html";
});
indexHistoryLink.addEventListener('click', (e) => {
  location = "./second.html#history-start";
});
indexBoardLink.addEventListener('click', (e) => {
  location = "./second.html#board-start";
});