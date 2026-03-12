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

const liNodeLists = document.querySelectorAll(".skills__list li");

liNodeLists.forEach((item) => {
  // removes the underline class from all <li> first, then add it to the clicked one
  item.addEventListener("click", () => {
    liNodeLists.forEach((li) => {
      li.classList.remove("underline");
    });
    item.classList.add("underline");
  });
});
