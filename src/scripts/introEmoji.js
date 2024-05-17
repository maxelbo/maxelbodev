function japanEmojiSwap() {
  const japanEmoji = document.getElementById("japan-emoji");
  const emojiList = [
    "🇯🇵",
    "🗼",
    "🗻",
    "🍣",
    "🍙",
    "🍱",
    "🍢",
    "🍲",
    "🍛",
    "🍜",
    "🍥",
    "🐡",
    "🍵",
    "🍡",
    "🍘",
    "🍶",
    "🍮",
    "🍧",
    "🍦",
    "🎍",
    "🎎",
    "🎏",
    "🎋",
    "🎌",
    "⛩️",
    "👺",
    "👹",
    "👘",
    "🙇",
    "🏣",
    "🏯",
    "🎴",
    "♨️",
    "🌸",
    "🚅",
    "🥷",
  ];
  let index = 0;

  setInterval(() => {
    if (japanEmoji) {
      japanEmoji.textContent = emojiList[index];
    }
    index = (index + 1) % emojiList.length;
  }, 1000);
}

document.addEventListener("astro:after-swap", japanEmojiSwap);
document.addEventListener("astro:page-load", () => {
  japanEmojiSwap();
});
