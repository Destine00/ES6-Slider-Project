import people from "./data.js";

const slideContainer = document.querySelector(".slide-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

slideContainer.innerHTML = people
  .map((person, index) => {
    let position = "next";
    if (index === 0) {
      position = "active";
    }
    if (index === people.length - 1) {
      position = "last";
    }
    const { img, name, job, text } = person;
    return `<article class="slide ${position}">
          <img
            src=${img}
            class="img"
            alt=${name}
          />
          <h4 class="title">${name}</h4>
          <p class="text">${job}</p>
          <p>${text}</p>
          <div class="quote-icon">
            <i class="fas fa-quote-right"></i>
          </div>
        </article>`;
  })
  .join("");

const startSlider = (type) => {
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;

  if (!next) {
    next = slideContainer.firstElementChild;
  }
  active.classList.remove(["active"]);
  last.classList.remove(["last"]);
  next.classList.remove(["next"]);
  if (type === "next") {
    active.classList.add("last");
    next.classList.add("active");
    last.classList.add("next");
    return;
  }
  if (type === "prev") {
    active.classList.add("next");
    next.classList.add("last");
    last.classList.add("active");
    return;
  }
};
nextBtn.addEventListener("click", () => {
  startSlider("next");
});
prevBtn.addEventListener("click", () => {
  startSlider("prev");
});
