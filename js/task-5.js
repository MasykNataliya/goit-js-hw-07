function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Знаходимо форму
const loginForm = document.querySelector(".login-form");

// Прослуховуємо подію submit
loginForm.addEventListener("submit", (event) => {
  // Забороняємо перезавантаження сторінки
  event.preventDefault();

  // Отримуємо доступ до елементів форми
  const { email, password } = loginForm.elements;

  // Очищаємо значення від пробілів по краях
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Перевіряємо, чи заповнені поля
  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  // Створюємо об’єкт із даними
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  // Виводимо об’єкт у консоль
  console.log(formData);

  // Очищаємо форму
  loginForm.reset();
});
