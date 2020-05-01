/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Build the nav
let navbar__items = ["Section 1", "Section 2", "Section 3", "Footer"];

let container = document.getElementById("navbar__list");

function createNavigationMenu() {
    let itemsLength = navbar__items.length;

    if(itemsLength>0) {
        let myList = document.createElement("ul");

        myList.className = "navbar__list";

        for(let i=0; i<itemsLength; i++) {
            let anchor = document.createElement("a");
            anchor.href = "";
            anchor.innerText = navbar__items[i];

            let item = document.createElement("li");

            let itemValue = document.createTextNode(navbar__items[i]);
            
            item.appendChild(anchor);
            myList.appendChild(item);
        }
        container.appendChild(myList);
    }
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
function scrollToClick() {
    let navbar = document.getElementById("navbar__list");
    navbar.addEventListener('click', function (event) {
        const clicked = document.querySelector('#' + event.target.dataset.nav)
        clicked.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
       
    }); console.log("Hey")
};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
document.getElementById("navbar__list").addEventListener("click", function(e) {
	if(e.target && e.target.nodeName == "LI") {
        const click = document.querySelector('#' + event.target.dataset.nav)
        click.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
		console.log("List item");
    }
});

// Set sections as active


