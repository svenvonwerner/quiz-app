export function bookmarks() {
  const svg = document.querySelector('[data-js="svg-bookmark"]');

  svg?.addEventListener("click", () => {
    svg.classList.toggle("card__bookmark--filled");
  });
}
