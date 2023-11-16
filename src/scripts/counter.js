function setCounterAnimation() {
  let counter = document.getElementById("counter");
  let from = parseInt(counter.getAttribute("data-from"));
  let to = parseInt(counter.getAttribute("data-to"));
  let speed = parseInt(counter.getAttribute("data-speed"));

  let animation = setInterval(function () {
    if (from <= to) {
      counter.textContent = (from++).toString();
    } else {
      clearInterval(animation);
    }
  }, speed);
}

document.addEventListener("astro:after-swap", setCounterAnimation);
