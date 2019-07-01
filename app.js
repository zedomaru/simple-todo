const addForm = document.querySelector(".add");
const template = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = attribute => {
  let html = ``;
  html += `<li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <span>${attribute}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;
  template.innerHTML += html;
};

//add todos
addForm.addEventListener("submit", e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  //   console.log(todo);
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  } else {
    alert("Please insert correct task");
  }
});

//delete todos
template.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

//searching

const filterTodo = input => {
  Array.from(template.children)
    .filter(todo => !todo.textContent.toLocaleLowerCase().includes(input))
    .forEach(result => result.classList.add("filtered"));

  Array.from(template.children)
    .filter(todo => todo.textContent.toLocaleLowerCase().includes(input))
    .forEach(result => result.classList.remove("filtered"));
};

search.addEventListener("keyup", () => {
  const input = search.value.trim().toLocaleLowerCase();
  filterTodo(input);
});
