export const play = (url) => {
  const audio = new Audio(url);

  audio.addEventListener("canplaythrough", () => {
    audio.play();
  });

  return audio;
};

export default {
  play,
};
