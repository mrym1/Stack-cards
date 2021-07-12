let stack = document.querySelector(".stack");

[...stack.children].reverse().forEach(i => stack.append(i));
setInterval(swap, 1500);

function swap() {
  let card = document.querySelector(".card:last-child");
  card.style.animation = "swap 700ms forwards";

  setTimeout(() => {
    card.style.animation = "";
    stack.prepend(card);
  }, 700);
}
