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
  let i = 0;

  setInterval(() => {
    if (japanEmoji) {
      japanEmoji.textContent = emojiList[i];
    }
    i = (i + 1) % emojiList.length;
  }, 1000);
}

document.addEventListener("astro:after-swap", japanEmojiSwap);
document.addEventListener("astro:page-load", () => {
  japanEmojiSwap();
});
