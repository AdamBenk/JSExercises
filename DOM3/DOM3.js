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
const itemTemplate = `<li class="lineItem"><input type="checkbox" class="checkBoxField"><p>Buy chicken</p><button class="redButton">Delete</button></li>`;
let addBtn, taskName, itemListContainer, clearCompletedBtn, countField, markAllCompletedBtn, markAllIncompleteBtn, deleteAllBtn, deleteSelectedBtn;

window.addEventListener("load", init);

function init() {
    addBtn = document.getElementById("addBtn");
    taskName = document.getElementById("taskName");
    itemListContainer = document.getElementById("itemListContainer");
    checkBox = document.querySelectorAll("checkBoxField")
    clearCompletedBtn = document.getElementById("clearCompletedBtn");
    countField = document.getElementById("countField");
    markAllCompletedBtn = document.getElementById("markAllCompletedBtn");
    markAllIncompleteBtn = document.getElementById("markAllIncompleteBtn");
    deleteAllBtn = document.getElementById("deleteAllBtn");
    deleteSelectedBtn = document.getElementById("deleteSelectedBtn");

    addBtn.addEventListener("click", addTask);
    clearCompletedBtn.addEventListener("click", clearCompleted);
    taskName.addEventListener("keyup", setAddBtnEnabled);
    markAllCompletedBtn.addEventListener("click", markAllCompleted);
    markAllIncompleteBtn.addEventListener("click", markAllIncomplete);
    deleteAllBtn.addEventListener("click", deleteAll);
    deleteSelectedBtn.addEventListener("click", deleteSelectedItems)

    setAddBtnEnabled();
    updateIncompleteItemCount();
    setCompleteBtn();  
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

    const completedItems = document.querySelectorAll(".itemContent.completed");
    completedItems.forEach(item => {
        const leftContainer = item.parentElement; 
        const lineItem = leftContainer.parentElement;
        itemListContainer.removeChild(lineItem);
    }); 
    updateIncompleteItemCount();
}

function createItem(name) {
    const item = document.createElement("li");
    item.classList.add("lineItem");

    const containerLeft = document.createElement("div")
    containerLeft.classList.add("containerLeft");
    item.appendChild(containerLeft);

    const containerRight = document.createElement("div")
    containerLeft.classList.add("containerRight");
    item.appendChild(containerRight);

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("checkBox");
    containerLeft.appendChild(checkBox);

    const p = document.createElement("p");
    p.classList.add("itemContent");
    p.innerText = name;
    containerLeft.appendChild(p);

    const completeBtn = document.createElement("button");
    completeBtn.classList.add("completeButton");
    completeBtn.innerText = "Complete";
    containerRight.appendChild(completeBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("redButton");
    deleteBtn.innerText = "Delete";
    containerRight.appendChild(deleteBtn);

    completeBtn.addEventListener("click", toggleItemCompleted);
    deleteBtn.addEventListener("click", deleteItem);
    p.addEventListener("click", createInput);
    return item;
}

function toggleItemCompleted(event) {
    const clickedBtn = event.target;
    const rightContainer = clickedBtn.parentElement;
    const lineItem = rightContainer.parentElement;    
    const leftContainer = lineItem.firstChild;
    const itemContent = leftContainer.lastChild;
    itemContent.classList.toggle("completed");
    updateIncompleteItemCount();
    setCompleteBtn();
}

function setCompleteBtn() {
    const completedItems = document.querySelectorAll(".itemContent.completed")
    completedItems.forEach((item) => {
        const leftContainer = item.parentElement;
        const lineItem = leftContainer.parentElement;
        const rightContainer = lineItem.lastChild;
        const btnToSet = rightContainer.firstChild;
        btnToSet.innerText = "Incomplete";
    })

    const nonCompletedItems = document.querySelectorAll(".itemContent:not(.completed)")
    nonCompletedItems.forEach((item) => {
        const leftContainer = item.parentElement;
        const lineItem = leftContainer.parentElement;
        const rightContainer = lineItem.lastChild;
        const btnToSet = rightContainer.firstChild;
        btnToSet.innerText = "Complete";
    })
}

function  createInput(event) {
    const textToReplace = event.target;
    const newInputField = document.createElement("input");
    newInputField.classList.add("newInput");
    const leftContainer = textToReplace.parentElement;
    leftContainer.replaceChild(newInputField, textToReplace);
    newInputField.addEventListener("blur", (event) => {
        const newText = document.createElement("p");
        newText.innerText = event.target.value;
        newText.classList.add("itemContent");
        const parent = event.target.parentElement; 
        parent.replaceChild(newText, event.target);
        newText.addEventListener("click", createInput);
    })
}

function deleteItem(event) {
    const button = event.target;
    const middleDiv = button.parentElement;
    const item = middleDiv.parentElement;
    itemListContainer.removeChild(item);
    updateIncompleteItemCount();
}

function setAddBtnEnabled() {
    const itemName = taskName.value;
    addBtn.disabled = (itemName.length === 0);
}

function updateIncompleteItemCount() {
    const count = itemListContainer.querySelectorAll(".itemContent:not(.completed)").length;
    countField.innerText = count;
}

function markAllCompleted(event) {
    const items = itemListContainer.querySelectorAll(".itemContent:not(.completed)");
    items.forEach(item => {
        item.classList.toggle("completed");
    })
    updateIncompleteItemCount();
}

function markAllIncomplete() {
    const items = itemListContainer.querySelectorAll(".itemContent.completed");
    items.forEach(item => {
        item.classList.toggle("completed");
    })
    updateIncompleteItemCount();
}

function deleteAll() {
    const items = itemListContainer.querySelectorAll(".lineItem");
    items.forEach(item => {
        itemListContainer.removeChild(item);
    })
    updateIncompleteItemCount();
}

function deleteSelectedItems() {
    const items = itemListContainer.querySelectorAll(".lineItem");
    items.forEach(item => {
        const firstchild = item.firstChild;
        if (firstchild.firstChild.checked) {
            itemListContainer.removeChild(item);
        }
    });
    updateIncompleteItemCount();
}

/**
 * Additional Tasks:
 *    1. Add a "Mark All Complete" button that marks all items as complete.
 *    2. Add a "Mark All Incomplete" button that marks all items as incomplete.
 *    3. Add a "Delete All" button that removes all items from the list.
 *
 *    4. Delete selected items
 *    5. format and style the list
 *
 *
 *
 * Additional Tasks:
 *
 * 1. Add Complete button to each item, so instead of clicking on the item to mark it as complete, the user can click
 * on the button to mark it as complete. When Complete button is clicked, the caption of the button should change to
 * "Incomplete" and the item should be marked as complete. When the button is clicked again, the caption should change
 * back to "Complete" and the item should be marked as incomplete.
 *
 * 2. Expand the To-Do List application to allow the user to edit items by clicking on the text. When an item is
 * clicked, it should be replaced with an input field that allows the user to edit the text. When the user presses
 * Enter or clicks outside the input field, the text should be updated and the input field should disappear.
 * Consider using "click" and "blur" events.
 *
 */