///1
function startInterval() {
  let count = 0;
  const output = document.getElementById("output1");
  output.textContent = "";

  const interval = setInterval(() => {
    count++;
    output.textContent += "Повідомлення " + count + "\n";

    if (count === 5) {
      clearInterval(interval);
    }
  }, 1000);
}

///2
function startAnimation() {
  let position = 0;
  const box1 = document.getElementById("box1");
  const box2 = document.getElementById("box2");

  const animation = setInterval(() => {
    position += 5;
    box1.style.left = position + "px";
    box2.style.top = position + "px";

    if (position > 200) {
      clearInterval(animation);
    }
  }, 100);
}

///3
function startGame() {
  let score = 0;
  document.getElementById("score").innerText = score;
  const gameArea = document.getElementById("gameArea");
  gameArea.innerHTML = "";

  function createTarget() {
    const target = document.createElement("div");
    target.classList.add("target");

    target.style.left = Math.random() * 260 + "px";
    target.style.top = Math.random() * 260 + "px";

    target.onclick = () => {
      score++;
      document.getElementById("score").innerText = score;
      target.remove();
    };

    gameArea.appendChild(target);
    setTimeout(() => target.remove(), 800);
  }

  const gameInterval = setInterval(createTarget, 1000);

  setTimeout(() => {
    clearInterval(gameInterval);
    alert("Гра завершена! Ваш результат: " + score);
  }, 10000);
}

///4
function startTimer() {
  let time = parseInt(document.getElementById("seconds").value);
  const output = document.getElementById("timer");

  const interval = setInterval(() => {
    output.innerText = "Залишилось: " + time + " сек.";
    time--;

    if (time < 0) {
      clearInterval(interval);
      output.innerText = "Час вийшов!";
    }
  }, 1000);
}
