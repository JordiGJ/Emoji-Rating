// get elements
const emojiContainer = document.querySelector(".emoji-container");
const stars = document.querySelectorAll(".star-container i");
stars.forEach((star, index) => (star.id = index));

// functions
function handleClick(e) {
  const amount = +e.target.id;
  const step = 48;
  let left = 48;
  stars.forEach((star) => {
    star.classList.remove("active");
    star.classList.add("inactive");
  });
  for (let i = 0; i <= amount; i++) {
    stars[i].classList.add("active");
    stars[i].classList.remove("inactive");
    emojiContainer.style.left = `${(left -= step)}px`;
  }
}

// eventListeners
stars.forEach((star) => star.addEventListener("click", handleClick));
