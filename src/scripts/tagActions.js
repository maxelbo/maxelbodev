// These functions turn the slags into titles.

export function dekebabize(prop) {
  return prop.split("-").join(" ");
}

// Capitalizes every word
export function capitalize(prop) {
  const words = prop.split(" ");
  words.forEach((word, i) => {
    words[i] = word.at(0).toUpperCase() + word.slice(1);
  });
  return words.join(" ");
}
