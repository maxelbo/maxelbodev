window.onscroll = () => {
  logoScroll();
};

function logoScroll() {
  const logo = document.getElementById("logo");
  const logoImg = document.getElementById("logo-img");
  const logoSubtitle = document.getElementById("logo-subtitle");
  const nav = document.getElementById("nav");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    logo.style.width = "180px";
    logoImg.style.width = "180px";
    logoSubtitle.style.opacity = "0";
    logoSubtitle.style.display = "none";
    nav.style.maxWidth = "0%";
  } else {
    logo.style.width = "100%";
    logoImg.style.width = "400px";
    logoSubtitle.style.opacity = "1";
    logoSubtitle.style.display = "block";
    nav.style.maxWidth = "100%";
  }
}
