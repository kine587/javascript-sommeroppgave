// sommer oppgave 1

const menuItems = [
  "burger",
  "pizza",
  "sushi",
  "ramen",
  "tacos",
  "fries",
  "burrito",
  "salad",
  "sandwich",
  "pasta",
];

function createOrder(name, deliverystatus) {
  const randomIndex = Math.floor(Math.random() * menuItems.length);
  const randomFood = menuItems[randomIndex];
  const properName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  let deliveryTime;
  if (deliverystatus === "on time") {
    deliveryTime = "30 minutes";
  } else if (deliverystatus === "late") {
    deliveryTime = "45 minutes";
  } else {
    deliveryTime = "an unknown time";
  }

  return `Hi ${properName} your ${
    randomFood.charAt(0).toUpperCase() + randomFood.slice(1)
  } will arrive in ${deliveryTime}!`;
}

console.log(createOrder("luca", "on time"));
console.log(createOrder("Tina", "late"));
console.log(createOrder("lars", "unknown"));

// summer oppgave 2

const usedPasswords = ["password123!", "helloWorld!", "qwerty&"];

function checkPasswordStrength(password) {
  const symbols = ["&", "%", "!", "?"];
  const foundSymbols = symbols.filter((symbol) => password.includes(symbol));
  if (usedPasswords.includes(password)) {
    return "This password has been used before. Please choose a new one.";
  } else if (password.length < 6 || foundSymbols.length === 0) {
    return "too weak";
  } else if (password.length > 8 && foundSymbols.length >= 2) {
    return "strong";
  } else {
    return "medium";
  }
}
console.log(checkPasswordStrength("password123!"));
console.log(checkPasswordStrength("abc"));
console.log(checkPasswordStrength("%myNewPass!"));
console.log(checkPasswordStrength("longpassword?"));
