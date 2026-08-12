// We will directly start with the challenges and manipulation in the DOM 
// so basically a window contains three things 
// 1. DOM , 2. BOM , 3. JavaScript

// Example - 1
document
    .getElementById("changeTextButton")
    .addEventListener("click", function () {
        let hold = document.getElementById("myParagraph")
        hold.textContent = "Yay!!! I'm changed";
    });
// so, we hold the paragraph, which we want to change, on 'click'

// Example - 2
document
    .getElementById("highlightFirstCity")
    .addEventListener('click', function () {
        let hold = document.getElementById("citiesList");
        console.log(hold.firstElementChild.classList);
        hold.firstElementChild.classList.add("highlight");
    });
// so in the above code, it first gets the DOMTokenList and then add the hightlight css.

// Example - 3
document
    .getElementById("changeOrder")
    .addEventListener('click', function () {
        let hold = document.getElementById("coffeeType");
        hold.textContent = "Espresso";
        hold.style.backgroundColor = "blue"
        hold.style.padding = "5px 10px"
        hold.style.borderRadius = "5px"
    });
// so, in the above code, we can add the text, css and what not whatever we want to.

// Example - 4
document
    .getElementById("addNewItem")
    .addEventListener('click', function () {
        // first of all we have to create a node, so that we can append later on
        let newItem = document.createElement('li');
        newItem.textContent = "Eggs";
        let hold = document.getElementById("shoppingList");
        hold.appendChild(newItem);
    });
// so, in the above code, we have to create a node first, so that we can later append it in the unordered list

// Example - 5
document
    .getElementById("removeLastTask")
    .addEventListener("click", function () {
        let hold = document.getElementById("taskList");
        let lastItem = hold.lastElementChild
        // first of all we have to grab the last element sot hat we can delete later on
        lastItem.remove();
    });
// so, in the above code, we have to grab the last child node, and then delete it with the help of remove function 

// Example - 6
document
    .getElementById("clickMeButton")
    .addEventListener('mouseover', function () {
        // there are several other eventListeneer
        // 1. click -> happens when someone click the button
        // 2. dblclick -> happens when someone double click the button
        // 3. mouseover -> happens when someone drags the mouse on the button
        console.log("night");
        // alert("night's wait is over");
    });
// so, in the above code, we learn about various event listeners, and alert is avoided in the production.

// Example - 7
document
    .getElementById("teaList")
    .addEventListener("click", function (event) {
        if (event.target && event.target.matches(".teaItem")) {
            console.log(event.target.textContent);
            // alert("You selected : " + event.target.textContent);
        }
    });
// so, in the above code, we have seen how to select a particular event with passing it as a parameter in the function.

// Example - 8
document
    .getElementById("feedbackForm")
    .addEventListener('submit', function (event) {
        // first of all we have to tell the browser that don't reload the page after submitting the form
        event.preventDefault();
        let hold = document.getElementById("feedbackInput").value; // now it holds the text which is the feedback
        console.log(hold);
        document.getElementById("feedbackDisplay").append(`Feedback given: ${hold}`);
    });
// so, in the above code, we can also take the value and directly edit it with textContent.

// Example - 9
document
    .addEventListener("DOMContentLoaded", function () {
        let hold = document.getElementById("domStatus");
        hold.textContent = "DOM content loading....";
    })
// here, we have directly applies the event Listener

// Example - 10
document
    .getElementById("toggleHighlight")
    .addEventListener('mouseover', function () {
        let hold = document.getElementById("descriptionText");
        hold.classList.toggle("highlight");
    }) 
// so in the above code, we have used the toggle behaviour to add the classes of css.