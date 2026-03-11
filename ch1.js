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

editedRedux.innerText = "Node.js";
editedReactTestingLibrary.innerText = "MongoDB";
js.insertAdjacentHTML("afterend", typescript);
