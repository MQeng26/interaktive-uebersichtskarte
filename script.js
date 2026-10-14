// ================= SCROLL REVEAL =================
const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealItems.forEach(item => revealObserver.observe(item));

// ================= KARTEN-PINS / POPUP =================
const mapPins = document.querySelectorAll('.map-pin');
const mapPopup = document.getElementById('mapPopup');
const mapPopupTitle = document.getElementById('mapPopupTitle');
const mapPopupText = document.getElementById('mapPopupText');
const mapPopupClose = document.getElementById('mapPopupClose');

if (mapPopup) {
  mapPins.forEach(pin => {
    pin.addEventListener('click', () => {
      mapPopupTitle.textContent = pin.dataset.title;
      mapPopupText.textContent = pin.dataset.text;
      mapPopup.hidden = false;
    });
  });
  mapPopupClose.addEventListener('click', () => { mapPopup.hidden = true; });
}
