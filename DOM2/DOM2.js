/**
 * Task: Change Text with a Button Click
 *
 * You will create a button that, when clicked, changes the text content of an HTML element using the innerHTML property.
 *
 * Here are the specific tasks that you need to complete:
 *
 *     * Create an HTML page with a container element, such as a div.
 *     * Add a header to the container element that says "Change Text with a Button Click". Please use styling to make the header stand out.
 *     * Add an HTML element to the container element, such as a paragraph, with some initial text content. Please also use styling to make the text stand out.
 *     * Create a button that, when clicked, changes the text content of the HTML element to a different value using the innerHTML property.
 *
 *     Here are some links to the methods and properties that you'll need to use:
 *      * document.createElement: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
 *      * appendChild: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
 *      * addEventListener: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 *      * innerHTML: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
 *
 * Here are some additional tips and considerations:
 *
 *     You should use JavaScript to handle the DOM manipulation.
 *     Specifically, you'll need to use functions like document.createElement, appendChild, and addEventListener.
 *     You can use CSS to style the button and the HTML element as desired.
 *     You can use an array to store multiple values to display in the HTML element,
 *     and use a counter variable to keep track of which value to display next.
 *     You can use the innerHTML property to set the text content of the HTML element to the current value in the array.
 *
 *     Note that using innerHTML to update the contents of an element can be dangerous if the content is user-generated
 *     or comes from an untrusted source, as it can lead to security vulnerabilities such as cross-site scripting (XSS)
 *     attacks. It's generally safer to use other methods like textContent or createTextNode to set the text content of
 *     an element. However, for this exercise, we'll use innerHTML for simplicity.
 */


function createSomething() {
    const newDiv = document.createElement("div");
    document.body.appendChild(newDiv);
    const headerInDiv = document.createElement("h1");
    newDiv.appendChild(headerInDiv);
    headerInDiv.innerHTML = "Hi, I am the header here!";
    const someContent = document.createElement("p");
    newDiv.appendChild(someContent);
    someContent.innerHTML = "This is some content to style!"
    const newBtn = document.createElement("button");
    newDiv.appendChild(newBtn);
    newBtn.classList.add("newButton");
    newBtn.innerHTML = "Click Me!";
    newBtn.addEventListener("click", () => {
        someContent.style.backgroundColor = "rgb(70, 88, 82)";
        someContent.innerHTML = "The content is different now!"
     });
}

window.addEventListener("load", createSomething)
