function setCounterAnimation() {
  let counter = document.getElementById("error-counter");
  if (counter) {
    let fromAttr = counter.dataset.from;
    let toAttr = counter.dataset.to;
    let speedAttr = counter.dataset.speed;

    if (fromAttr && toAttr && speedAttr) {
      let from = parseInt(fromAttr);
      let to = parseInt(toAttr);
      let speed = parseInt(speedAttr);
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
