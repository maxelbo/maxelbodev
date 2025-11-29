function setCounterAnimation() {
  const counter = document.getElementById("error-counter");

  if (counter) {
    const dataFrom = counter.dataset.from;
    const dataTo = counter.dataset.to;
    const dataSpeed = counter.dataset.speed;

    if (dataFrom && dataTo && dataSpeed) {
      let from = parseInt(dataFrom);
      const to = parseInt(dataTo);
      const speed = parseInt(dataSpeed);
      const animation = setInterval(() => {
        if (from <= to) {
          counter.textContent = (from++).toString();
        }
        else {
          clearInterval(animation);
        }
      }, speed);
    }
  }
}

document.addEventListener("astro:after-swap", setCounterAnimation);
document.addEventListener("astro:page-load", () => setCounterAnimation());