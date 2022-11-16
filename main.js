const screen = document.querySelector(".calculator-screen");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal-sign");
const clear = document.querySelector(".all-clear");
const opposite = document.querySelector(".opposite");
const pourcentage = document.querySelector(".pourcentage");

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num1;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  if (operator === "*") return multiply(num1, num2);
  if (operator === "/") return divide(num1, num2);
  if (operator === "+") return add(num1, num2);
  if (operator === "-") return subtract(num1, num2);
  else console.log("wrong operator selected");
}

numbers.forEach((number) =>
  number.addEventListener("click", () => {
    if (number.value === "." && screen.value.includes(".")) return;
    else screen.value += number.value;
  })
);

let screenFirstValue = "";
let operatorClicked = "";
let screenUpdate;
let revertNum;

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (screen.value === "") return;
    screenFirstValue = screen.value;
    console.log(screenFirstValue);
    operatorClicked = operator.value;
    screen.value = "";
  });
});

equal.addEventListener("click", () => {
  if (
    screenFirstValue.length > 0 &&
    operatorClicked.length > 0 &&
    screen.value !== ""
  ) {
    screenUpdate = operate(
      operatorClicked,
      parseInt(screenFirstValue),
      parseInt(screen.value)
    );
    screen.value = screenUpdate;
  } else return;
});

clear.addEventListener("click", () => {
  screen.value = "";
  screenFirstValue = "";
  operatorClicked = "";
});

opposite.addEventListener("click", () => {
  if (screen.value === "") return;
  screen.value = parseInt(screen.value) * -1;
});

pourcentage.addEventListener(
  "click",
  () => (screen.value = parseInt(screen.value) / 100)
);
