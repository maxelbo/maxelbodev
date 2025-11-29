function setHelloWorld() {
  const helloWorld = document.getElementById("hello-world");
  const words = [
    "Hello, World!",
    "¡Hola mundo!",
    "ハロー・ワールド！",
    "Salve orbis!",
    "Saluton, mondo!",
    // "Hello,",
    // "Hello, World!",
    // "Hello, Kitty!",
    // "Hello, Hello!",
    // "Hello, darkness, my old friend!",
    // "Hello...",
    // "I can't think of any more hellos...",
    // "Let's just start over.",
  ];
  let index = 0;

  setInterval(() => {
    if (helloWorld) {
      helloWorld.textContent = `${words[index]}`;
    }
    index = (index + 1) % words.length;
  }, 4000);
}

document.addEventListener("astro:after-swap", setHelloWorld);
document.addEventListener("astro:page-load", () => {
  setHelloWorld();
});
