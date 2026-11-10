const sortByDescendingFriendCount = (users) =>
  users.toSorted((a, b) => b.friends.length - a.friends.length);

const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"],
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"],
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"],
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"],
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"],
  },
];

console.log(sortByDescendingFriendCount(allUsers));

// Знаходимо потрібні елементи
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// Прослуховуємо подію input
nameInput.addEventListener("input", () => {
  // Очищаємо значення від пробілів по краях
  const trimmedValue = nameInput.value.trim();

  // Якщо інпут порожній або лише пробіли → Anonymous
  nameOutput.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});
