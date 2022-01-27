const clickbox = document.querySelector('[data-js="clickbox"]');

clickbox.addEventListener("click", () => {
  clickbox.classList.toggle("card__bookmark--filled");
});

const svg = document.querySelector('[data-js="svg-bookmark"]');

svg.addEventListener("click", () => {
  svg.classList.toggle("card__bookmark--filled");
});

console.log(svg);
