const grid = document.getElementById("grid");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const timer = document.getElementById("timer");
const resultBox = document.getElementById("result");

let tableCount = 0;
let current = 1;
let seconds = 0;
let interval;
let totalTime = 0;
let times = [];

function generateNumbers() {
  const numbers = [];
  for (let i = 1; i <= 25; i++) {
    numbers.push(i);
  }
  return numbers.sort(() => Math.random() - 0.5);
}

function renderGrid(numbers) {
  grid.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 5; j++) {
      const num = numbers[i * 5 + j];
      const cell = document.createElement("td");
      cell.textContent = num;
      cell.addEventListener("click", () => {
        if (parseInt(cell.textContent) === current) {
          flashCell(cell);
          current++;
          if (current > 25) {
            clearInterval(interval);
            times.push(seconds);
            totalTime += seconds;
            if (tableCount < 5) {
              startBtn.textContent = "Дальше";
              startBtn.classList.remove("hidden");
            } else {
              showResult();
            }
          }
        }
      });
      row.appendChild(cell);
    }
    grid.appendChild(row);
  }
}

function flashCell(cell) {
  cell.classList.add("flash");
  setTimeout(() => {
    cell.classList.remove("flash");
  }, 1000);
}

function formatTime(s) {
  const mins = Math.floor(s / 60);
  const secs = s % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function startTable() {
  current = 1;
  seconds = 0;
  timer.textContent = "0:00";
  startBtn.classList.add("hidden");
  resultBox.classList.add("hidden");
  const nums = generateNumbers();
  renderGrid(nums);
  interval = setInterval(() => {
    seconds++;
    timer.textContent = formatTime(seconds);
  }, 1000);
}

function showResult() {
  const avg = Math.round(totalTime / 5);
  let message = "";

  if (avg <= 30) {
    message = "Отличный результат! Ваша эффективность очень высокая.";
  } else if (avg <= 35) {
    message = "Хороший результат. Ваша скорость реакции в порядке.";
  } else if (avg <= 45) {
    message = "Удовлетворительный результат. Есть над чем поработать.";
  } else if (avg <= 55) {
    message = "Низкая эффективность. Требуется тренировка.";
  } else {
    message = "Результат слабый. Не расстраивайтесь — регулярные тренировки помогут.";
  }

  resultBox.innerHTML = `
    <p>Среднее время: <strong>${formatTime(avg)}</strong></p>
    <p>${message}</p>
  `;
  resultBox.classList.remove("hidden");
  grid.innerHTML = "";
  startBtn.classList.add("hidden");
  restartBtn.classList.remove("hidden");
  timer.textContent = "";
}

startBtn.addEventListener("click", () => {
  tableCount++;
  startTable();
});

restartBtn.addEventListener("click", () => {
  tableCount = 0;
  current = 1;
  seconds = 0;
  totalTime = 0;
  times = [];
  resultBox.classList.add("hidden");
  restartBtn.classList.add("hidden");
  startBtn.textContent = "Начать";
  startBtn.classList.remove("hidden");
});
