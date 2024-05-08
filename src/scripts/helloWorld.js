function setHelloWorld() {
  const helloWorld = document.getElementById("hello-world");
  const words = [
    "Hello, World!",
    "¡Hola mundo!",
    "ハロー・ワールド！",
    "Salve orbis!",
    "Saluton, mondo!",
  ];
  let index = 0;

  setInterval(() => {
    if (helloWorld) {
      helloWorld.textContent = words[index];
    }
    index = (index + 1) % words.length;
  }, 3000);
}

document.addEventListener("DOMContentLoaded", setHelloWorld);
document.addEventListener("astro:after-swap", setHelloWorld);
document.addEventListener("astro:page-load", () => {
  setHelloWorld();
});
