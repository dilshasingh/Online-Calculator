
const buttons = document.querySelectorAll("button");

// Set the initial value to 0
display.innerHTML = '0';

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = '0'; // Set display to 0 when clearing
    } else if (item.id == 'square') {
      display.innerText = Math.pow(parseFloat(display.innerText), 2).toString(); // Square the displayed number
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.length > 1 ? string.substr(0, string.length - 1) : '0'; // Handle backspace
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = '0'), 2000); // Set display to 0 after 2 seconds
    } else {
      if (display.innerText === '0' || display.innerText === "Empty!") {
        display.innerText = item.id;
      } else {
        display.innerText += item.id;
      }
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
