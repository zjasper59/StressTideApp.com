const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

const appStoreLink = "https://apps.apple.com/us/app/stressless/id6763476530";
const googlePlayLink =
  "https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME";

function getDeviceType() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    return "android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "ios";
  }

  return "other";
}

function openCorrectStore(event) {
  event.preventDefault();

  const device = getDeviceType();

  if (device === "ios") {
    window.open(appStoreLink, "_blank");
  } else if (device === "android") {
    window.open(googlePlayLink, "_blank");
  } else {
    // For laptop/desktop users, send them to App Store by default,
    // or replace this with your download page.
    window.open(appStoreLink, "_blank");
  }
}

const downloadBtn = document.getElementById("downloadBtn");
const heroDownloadBtn = document.getElementById("heroDownloadBtn");

if (downloadBtn) {
  downloadBtn.addEventListener("click", openCorrectStore);
}

if (heroDownloadBtn) {
  heroDownloadBtn.addEventListener("click", openCorrectStore);
}
const featureCards = document.querySelectorAll(".feature-card");

featureCards.forEach((card) => {
  card.addEventListener("click", () => {
    const isAlreadyOpen = card.classList.contains("active");

    featureCards.forEach((otherCard) => {
      otherCard.classList.remove("active");
    });

    if (!isAlreadyOpen) {
      card.classList.add("active");
    }
  });
});
