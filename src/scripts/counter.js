function setCounterAnimation() {
  let counter = document.getElementById("error-counter");

  if (counter) {
    let dataFrom = counter.dataset.from;
    let dataTo = counter.dataset.to;
    let dataSpeed = counter.dataset.speed;

    if (dataFrom && dataTo && dataSpeed) {
      let from = parseInt(dataFrom);
      let to = parseInt(dataTo);
      let speed = parseInt(dataSpeed);
      let animation = setInterval(() => {
        if (from <= to) {
          counter.textContent = (from++).toString();
        } else {
          clearInterval(animation);
        }
      }, speed);
    }
  }
}

document.addEventListener("astro:after-swap", setCounterAnimation);
document.addEventListener("astro:page-load", () => {
  setCounterAnimation();
});
