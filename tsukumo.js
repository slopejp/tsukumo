// 豆知識機能
const factBtn = document.getElementById("fact-btn");
const fact = document.getElementById("fact");

const facts = [
  "蛇にはまぶたがありません。",
  "蛇は舌で匂いを感じ取ります。",
  "蛇をハンドリングする時は、人間と接する面積が多い方が安心しやすいです。",
  "ほとんどの蛇には耳がなく、地面の振動で音を感じます。",

];

factBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  fact.textContent = facts[randomIndex];
  fact.classList.toggle("hidden");
});

// クイズ機能
const quizButtons = document.querySelectorAll(".quiz-btn");
const quizResult = document.getElementById("quiz-result");

quizButtons.forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.dataset.answer;
    if (answer === "no") {
      quizResult.textContent = "正解！蛇にはまぶたがありません。";
      quizResult.style.color = "green";
    } else {
      quizResult.textContent = "残念！蛇にはまぶたがありません。";
      quizResult.style.color = "red";
    }
  });
});
