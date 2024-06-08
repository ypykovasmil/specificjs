const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const merge = (a, b) => a.concat(b);
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;