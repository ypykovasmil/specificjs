const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;