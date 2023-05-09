/**
 * Task: Build a To-Do List Application
 *
 * You will create a basic to-do list application that allows a user to add and remove items from a list. The user should also be able to mark items as complete and unmark them.
 *
 *     Here are the specific tasks that you need to complete:
 *
 *     Create an empty HTML page with a single container element, such as a div.
 *
 *     Exercise 1: Design (HTML/CSS)
 *     Implement the design shown in file todo-design.png. You can use CSS to style the list items and the input field/button as desired.
 *     Add a header to the container element that says "To-Do List". Please use styling to make the header stand out.
 *     Create an input field and a button that allows a user to add an item to the list.
 *
 *     Note the followings:
 *         * the page has minimum width, so that the page will not be too wide when the browser window is resized.
 *         * the page has a maximum width, so that the page will not be too wide when the browser window is resized.
 *         * the page is centered in the browser window.
           * the "Enter Task" field has 2 state: normal and "on focus". You can use the ":focus" pseudo-class to style the input field when it is on focus.
 *         * the "Add" button has 2 state: normal and "on hover". You can use the ":hover" pseudo-class to style the button when the mouse is over it.
           * Every second row in the TODO list is gray. You can use the ":nth-child" pseudo-class to style every second row.
 *         * Every other row background is white. You can use the ":nth-child" pseudo-class to style every other row.
 *         * when the cursor is hover over a row, they will be highlighted. You can use the ":hover" pseudo-class to style the row when the mouse is over it.
 *         * when hover over a list item, the cursor will change to a pointer. You can use the "cursor" property to change the cursor.
 *         
 *
 *     Exercise 2: Behaviour (JavaScript)
 *         * when user clicks the Add button, a new todo item will be added to the bottom of the list. Use appendChild method inside the event listener to add a new item to the list. You can choose to use innerHTML or createElement to create the new items.
 *         * when user clicks user clicks any todo item, it will be marked as completed, and a line will be drawn through the text. You can use the "text-decoration" property to draw a line through the text.
 *         * when user clicks the "Delete" button, the corresponding todo item will be removed from the list
 *         * when user clicks the "Clear Completed" button, all completed items will be removed from the list.
 *             You need to use a loop to iterate through all items in the list, and use removeChild method to remove the corresponding HTML element.
 *             You need to use addEventListener to handle the click event.
 *
 *
 *    Exercise 3: Extra Features
 *     Add the ability to unmark completed items. When a completed item is unmarked, it should no longer have the strike-through line.
 *     Add button is disabled when the input field is empty.

 *
 *     Good luck!
 *
 */
const itemTemplate = `<li class="lineItem"><p>Buy chicken</p><button class="redButton">Delete</button></li>`;
let addBtn, taskName, itemListContainer, clearCompletedBtn, countField;

window.addEventListener("load", init);

function init() {
    addBtn = document.getElementById("addBtn");
    taskName = document.getElementById("taskName");
    itemListContainer = document.getElementById("itemListContainer");
    clearCompletedBtn = document.getElementById("clearCompletedBtn");
    countField = document.getElementById("countField");

    addBtn.addEventListener("click", addTask);
    clearCompletedBtn.addEventListener("click", clearCompleted);
    taskName.addEventListener("keyup", setAddBtnEnabled);

    setAddBtnEnabled();
    updateIncompleteItemCount();
}

function addTask(event) {
    event.preventDefault();
    event.stopPropagation();

    const name = taskName.value;
    const item = createItem(name);

    taskName.value = "";

    itemListContainer.appendChild(item);
    updateIncompleteItemCount();
    setAddBtnEnabled();
}

function clearCompleted(event) {
    event.preventDefault();
    event.stopPropagation();

    const items = itemListContainer.querySelectorAll(".lineItem.completed");
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        itemListContainer.removeChild(item);
    }
    updateIncompleteItemCount();
}

function createItem(name) {
    const item = document.createElement("li");
    item.classList.add("lineItem");

    const p = document.createElement("p");
    p.innerText = name;
    item.appendChild(p);

    const button = document.createElement("button");
    button.classList.add("redButton");
    button.innerText = "Delete";
    item.appendChild(button);

    button.addEventListener("click", deleteItem);
    item.addEventListener("click", toggleItemCompleted);

    return item;
}

function toggleItemCompleted(event) {
    const item = event.target;
    item.classList.toggle("completed");
    updateIncompleteItemCount();
}

function deleteItem(event) {
    const button = event.target;
    const item = button.parentElement;

    itemListContainer.removeChild(item);
    updateIncompleteItemCount();
}

function setAddBtnEnabled() {
    const itemName = taskName.value;

    addBtn.disabled = (itemName.length === 0);
}

function updateIncompleteItemCount() {
    const count = itemListContainer.querySelectorAll(".lineItem:not(.completed)").length;
    countField.innerText = count;
}


/**
 * Additional Tasks:
 *    1. Add a "Mark All Complete" button that marks all items as complete.
 *    2. Add a "Mark All Incomplete" button that marks all items as incomplete.
 *    3. Add a "Delete All" button that removes all items from the list.
 */