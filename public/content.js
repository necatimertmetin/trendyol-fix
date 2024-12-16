// Tüm DOM'da 'sexual-overlay' classını arayıp kaldıran fonksiyon
function removeSexualOverlay() {
  const elements = document.querySelectorAll(".sexual-overlay");
  elements.forEach((el) => {
    el.classList.remove("sexual-overlay");
  });
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener("DOMContentLoaded", removeSexualOverlay);

// Dinamik olarak eklenen elemanları gözlemlemek için MutationObserver kullanımı
const observer = new MutationObserver(() => {
  removeSexualOverlay();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
