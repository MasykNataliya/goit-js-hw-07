function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Знаходимо кнопку та спан
const changeColorBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

// Додаємо слухач події на кнопку
changeColorBtn.addEventListener("click", () => {
  const newColor = getRandomHexColor();

  // Змінюємо фон <body> через інлайн-стиль
  document.body.style.backgroundColor = newColor;

  // Виводимо значення кольору у span.color
  colorSpan.textContent = newColor;
});
