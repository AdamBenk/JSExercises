/*
      Some help:
      - you can select tags (elements) using the following methods of the document object:
        - querySelector returns the first element that matches the specified selector
        - querySelectorAll returns a list of all elements that matches the specified selector
        - getElementsByTagName returns a list of all elements with the specified tag name
        - getElementsByClassName returns a list of all elements with the specified class name
        - getElementsByName returns a list of all elements with the specified name
        - getElementById returns the element with the specified id

        Selector means the tag name, id, class, attribute, etc. like css selectors like: p, #id, .class, [attribute], etc.
        Examples for more complex css selectors: (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

      - you can change the style of elements using the style property
        - the style property is an object that contains all the css properties of the element (https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)
        - you can change the value of the css properties using the style property
        - you can use camelCase or kebab-case for the css properties
          - e.g. backgroundColor or background-color

      - you can change the text content of elements using the textContent property
        - the textContent property contains the text content of the element
        - you can change the text content of the element using the textContent property

      - you can change the value of input elements using the value property
        - the value property contains the value of the input element
        - you can change the value of the input element using the value property

      - innerHTML is a property that can be used to get or set the HTML content (including HTML elements) of an element
        - the innerHTML property contains the HTML content of the element
        - you can change the HTML content of the element using the innerHTML property
        - Example: element.innerHTML = '<p>This is a new paragraph.</p>'; where element is the element you want to change the HTML content of

      - you can add elements to the DOM using the following methods:
        - createElement creates an element with the specified tag name
        - createTextNode creates a text node with the specified text
        - appendChild appends a node as the last child of a node
        - insertBefore inserts a node before a specified reference node as a child of a specified parent node
        - Example: element.appendChild(child); where element is the element you want to append the child to and child is the element you want to append


      Example of getting a list of paragraphs and adding style to them:
       const paragraphs = document.querySelectorAll('p');
       paragraphs.forEach((paragraph) => {
         paragraph.style.color = 'red';
       });

       As you can see the forEach method is used to iterate over the list of paragraphs.

        Example of getting a list of paragraphs and adding a class to them:
         const paragraphs = document.querySelectorAll('p');
        paragraphs.forEach((paragraph) => {
            paragraph.classList.add('class-name');
        });
     */



// ------- [ BEGIN CODE IMPLEMENTATION ] ------- //

// Read the exercises carefully and implement the code below.
// you can use the console to test your code.
// remember to refresh the page to reset the DOM.
// each exercise is independent of the others.
// each exercise should be implemented in the space provided.

/* Exercise 1:
  Change text color and font face of the paragraph id:"#text" when the button with id: "colorButton" is clicked.
  The event handler which is getting executed when button is clicked already exists.
  Inside the event handler you have to implement the following:
  1. Get the paragraph element using the id attribute. (hint: use the getElementById method)
  2. Change the color of the paragraph text to blue. (hint: use the style property)
  3. Change the font face of the paragraph text to Arial. (hint: use the style property)

 */
function onColorButtonClick() {
    const text = document.getElementById('text');
    text.style.color = 'red';
}

/* Exercise 2:
  Add a new paragraph to the div with id: "paragraphContainer" when the button with id: "addButton" is clicked.
  The event handler which is getting executed when button is clicked already exists.
  Inside the event handler you have to implement the following:
  1. Create a new paragraph element. (hint: use the createElement method)
  2. Create a text node with the text: "This is a new paragraph." (hint: use the createTextNode method)
  3. Append the text node to the paragraph element. (hint: use the appendChild method)
  4. Append the paragraph element to the div with id: "paragraphContainer". (hint: use the appendChild method)
 */
function onAddButtonClick() {
    const newParagraph = document.createElement('p');
    const paragraphContainer = document.getElementById('paragraphContainer');

    newParagraph.innerHTML = 'This is a new paragraph.';

    paragraphContainer.appendChild(newParagraph);
}

/*  Exercise 3:
    Add the class "red" to all paragraphs when the button with id: "classButton" is clicked.
    The event handler which is getting executed when button is clicked already exists.
    Inside the event handler you have to implement the following:
    1. Get all paragraphs from
    2. Iterate over the list of paragraphs and add the class "red" to each paragraph. (hint: use the classList property)
 */
function onClassButtonClick() {
    const paragraphs = document.querySelectorAll('#exercise1 p');
    paragraphs.forEach(paragraph => {
        paragraph.classList.add('red');
    });
}

/*
    Exercise 4:
    Remove the last paragraph from the div with id: "main" when the button with id: "removeButton" is clicked.
    The event handler which is getting executed when button is clicked already exists.
    Inside the event handler you have to implement the following:
    1. Get the last paragraph from the div with id: "main".
    2. Remove the last paragraph from the div with id: "main".
 */
function onRemoveButtonClick() {
    const lastParagraph = document.querySelector('#main p:last-child');
    lastParagraph.remove();
}

/*
    Exercise 5:
    Update text content of the paragraph with id: "text" when the button with id: "textButton" is clicked.
    The event handler which is getting executed when button is clicked already exists.
    Inside the event handler you have to implement the following:
    1. Get the paragraph with id: "text".
    2. Update the text content of the paragraph with id: "text" to "New text content".
 */
function onTextButtonClick() {
    const text = document.getElementById('text');
    text.textContent = 'New text content';
}

/*
    Exercise 6:
    Add an image to the div with id: "imageDiv" when the button with id: "imageButton" is clicked.
    The event handler which is getting executed when button is clicked already exists.
    Inside the event handler you have to implement the following:
    1. Create an image element.
    2. Set the src attribute of the image element to "https://www.w3schools.com/w3images/lights.jpg".
    3. Set the alt attribute of the image element to "Lights".
    4. Append the image element to the div with id: "imageDiv".
 */
function onAddImageClick() {
    const image = document.createElement('img');
    image.setAttribute('src', 'https://www.w3schools.com/w3images/lights.jpg');
    image.setAttribute('alt', 'Lights');
    document.getElementById('imageDiv').appendChild(image);
}

/*
  Exercise 7:
    Change the background color of the div with id: "backgroundDiv" to yellow when the button with id: "backgroundButton" is clicked.
    The event handler which is getting executed when button is clicked already exists.
    Inside the event handler you have to implement the following:
    1. Get the div with id: "backgroundDiv".
    2. Change the background color of the div with id: "backgroundDiv" to yellow.
 */
function onBackgroundButtonClick() {
    const backgroundDiv = document.getElementById('backgroundDiv');
    backgroundDiv.style.backgroundColor = 'yellow';
}

// ------- [ END CODE IMPLEMENTATION ] ------- //

// ------- [ BEGIN EVENT LISTENERS - DO NOT CHANGE ] ------- //
document.getElementById('colorButton').addEventListener('click', onColorButtonClick);
document.getElementById('addButton').addEventListener('click', onAddButtonClick);
document.getElementById('classButton').addEventListener('click', onClassButtonClick);
document.getElementById('removeButton').addEventListener('click', onRemoveButtonClick);
document.getElementById('textButton').addEventListener('click', onTextButtonClick);
document.getElementById('imageButton').addEventListener('click', onAddImageClick);
document.getElementById('backgroundButton').addEventListener('click', onBackgroundButtonClick);

// ------- [ END EVENT LISTENERS ] ------- //