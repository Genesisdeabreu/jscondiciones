const image = document.getElementById("image");
image.addEventListener("click", () => {
  image.classList.toggle("selected");
});

 
const stickerInputs = [
  document.getElementById("sticker1"),
  document.getElementById("sticker2"),
  document.getElementById("sticker3")
];
const verifyStickersButton = document.getElementById("verifyStickers");
const stickerMessage = document.getElementById("stickerMessage");

verifyStickersButton.addEventListener("click", () => {
  const totalStickers = stickerInputs.reduce((sum, input) => sum + Number(input.value), 0);
  if (totalStickers <= 10) {
    stickerMessage.textContent = `Llevas ${totalStickers} stickers`;
  } else {
    stickerMessage.textContent = "Llevas demasiados stickers";
  }
});


const digit1 = document.getElementById("digit1");
const digit2 = document.getElementById("digit2");
const digit3 = document.getElementById("digit3");
const checkPasswordButton = document.getElementById("checkPassword");
const passwordMessage = document.getElementById("passwordMessage");

checkPasswordButton.addEventListener("click", () => {
  const password = `${digit1.value}${digit2.value}${digit3.value}`;
  if (password === "911") {
    passwordMessage.textContent = "Password 1 correcto";
  } else if (password === "714") {
    passwordMessage.textContent = "Password 2 correcto";
  } else {
    passwordMessage.textContent = "Password incorrecto";
  }
});



