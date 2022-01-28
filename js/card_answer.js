export function cardAnswer() {
  const answerButton = document.querySelector('[data-js="answer-button"]');
  const answerText = document.querySelector('[data-js="text-answer"]');

  answerButton.addEventListener("click", () => {
    if (answerButton.textContent === "Show Answer") {
      answerButton.textContent = "Hide Answer";
      answerText.classList.remove("card__text__answer--hidden");
    } else {
      answerButton.textContent = "Show Answer";
      answerText.classList.add("card__text__answer--hidden");
    }
  });
}
