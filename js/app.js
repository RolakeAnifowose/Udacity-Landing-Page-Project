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
let navbar__items = ["Section 1", "Section 2", "Section 3", "Section 4"];

const section = document.getElementsByTagName('section');

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

            //Scroll to section
            anchor.addEventListener("click", () => { 
                event.preventDefault();
                section[i].scrollIntoView({ behavior: "smooth" });
                anchor[i].style.color = 'red';
            });

            let item = document.createElement("li");
            
            let itemValue = document.createTextNode(navbar__items[i]);
            
            item.appendChild(anchor);
            myList.appendChild(item);
        }
        container.appendChild(myList);
    }
}

// Add class 'active' to section when near top of viewport
const isInViewport = function (element) {
    const rect = element.getBoundingClientRect(),
        viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top > viewHeight);
};

// Set sections as active
function makeActiveSection() {
    for (let i = 0; i < section.length; i++) {
        if(isInViewport(section[i])){
            section[i].classList.add('your-active-class');
        } else {
            section[i].classList.remove('your-active-class');
        }
    }
}