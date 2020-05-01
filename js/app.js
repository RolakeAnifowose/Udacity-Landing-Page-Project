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
            // document.querySelector('#section2').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})

            let item = document.createElement("li");

            let itemValue = document.createTextNode(navbar__items[i]);
            
            item.appendChild(anchor);
            // item.appendChild(itemValue);
            myList.appendChild(item);
            console.log("hi")
        }
        container.appendChild(myList);
        console.log("hi");
    }
}

function scrollToSection1() {
    // this.slides.toArray()[this.index].nativeElement.scrollIntoView({behavior: 'smooth'});
    let scrollItem = document.getElementById("section1");
    scrollItem.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

function scrollToSection2() {
    let scrollItem = document.getElementById("section2");
    scrollItem.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

function scrollToSection3() {
    let scrollItem = document.getElementById("section3");
    scrollItem.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

// let container = document.getElementsByClassName('navbar__menu');
// var strs = [ "String 1", "String 2", "String 3" ];
// var list = document.createElement("ul");
// for (var i in strs) {
//   var anchor = document.createElement("a");
//   anchor.href = "#";
//   anchor.innerText = strs[i];

//   var elem = document.createElement("li");
//   elem.appendChild(anchor);
//   list.appendChild(elem);
//   container.appendChild(list);
//   console.log('Hi')
// }

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


