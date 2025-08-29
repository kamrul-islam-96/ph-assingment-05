##1
getElementById will find one element with specific id.
getElementByClassName will finds all the same class name elements.
querySelector Finds the first element matching a CSS selector.
querySelectorAll finds all elements matching a CSS selector.

##2 
Creating and Appending Elements
First of all you have to create a div or other elements using document.createElement and most important that have to store a variable then variableNaem. using textContent = "type anything" that have to append into parentElement. For example if you want to appent into body then what you have to do is document.body.appendChild(variablename).

##3
Event Bubbling
Event Bubbling means when an event occurs on an element, it bubbles up. For example you have a div and here is another div inside first div. you add addEventListner both div then if you click child div it will show you clicked both div cause bubbling up.

##4
Event Delegation
Event Delegation means attaching a single event listener to a parent element instead of adding listeners to multiple child elements.

##5
Event Methods
event.preventDefault() is using for changing forms default behaveior. if you click on submit button then page will auto realoading, for stop this action we use event.preventDefault(). event.stopPropagation() Stops the event from bubbling up to parent elements.
