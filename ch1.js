const editedRedux = document.querySelector("[data-name=redux] .skills__title");
const editedReactTestingLibrary = document.querySelector(
  "[data-name='react testing library'] .skills__title",
);
const js = document.querySelector("[data-name=javascript]");
const typescript = `
            <li data-name="typescript" class="skills__item">
                <h2 class="skills__title">Typescript</h2>
                <span class="skills__years">2 years</span>
            </li>
`;
const downloadBtn = document.querySelector("#downloadBtn");
const personalImg = document.querySelector(".bio__pic");

editedRedux.innerText = "Node.js";
editedReactTestingLibrary.innerText = "MongoDB";
js.insertAdjacentHTML("afterend", typescript);
downloadBtn.remove();
personalImg.style.width = "36rem";
// document.querySelector(".bio__pic").style.width = "36rem";

// Get the <ul> element
const list = document.querySelector(".skills__list");

// Attach a single event listener to the list itself
list.addEventListener("click", (e) => {
  // On click, check that the element clicked on is a direct descendent of the list
  const { target } = e;
  if (target.parentNode === list) {
    // If it is, then remove it from the list
    target.remove();
    // Do the same thing, using `removeChild() instead`
    // list.removeChild(target);
  }
});
