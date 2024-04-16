
var fileName = location.href.split("/").slice(-1); 
var mobile = window.matchMedia("(max-width: 600px)").matches;
let leftArrow = document.querySelector("#leftArrow");
let rightArrow = document.querySelector("#rightArrow");


// ANIMATE OPACITY ON PAGE LOAD
window.onload = function() {
    var content = document.querySelector(".content");
    content.animate([
        { // from
            opacity: 0,
        },
        { // to
            opacity: 1,
        }
    ], 1000);
    content.style.opacity = '1';
}

window.onunload = function() {
    var content = document.querySelector(".content");
    content.animate([
        { // from
            opacity: 1,
        },
        { // to
            opacity: 0,
        }
    ], 1000);
    content.style.opacity = '0';
}
// ANIMATE FRAME
let frame = document.querySelector(".frame");
window.setInterval(() => {
    for (i = 0; i < 4; i++){
        frame.children[i].animate([
            { // from
              opacity: Math.random(1)+0.5,
            },
            { // to
              opacity: Math.random(1)+0.5,
            }
          ], 100);
    }
}, 100 / 60);

// MANAGE PROJECT IMAGES ON DESKTOP
if (!mobile){
    function setImgAspect() {
        let images = document.querySelector(".project-img");
        if (images){
            if(images.children){
                for (i = 0; i < images.children.length; i++){
                    let image = images.children[i];
                    if (image.width < image.height){
                        image.style.width = String(images.offsetWidth/2-10)+"px";
                    }
                }
            }
        }
    }
    if(document.readyState === 'ready' || document.readyState === 'complete') {
        setImgAspect();
    }
    else {
        document.onreadystatechange = function () {
            if (document.readyState == "complete") {
                setImgAspect();
            }
        }
    }
}


/*
// PROJECT SCROLL RIGHT
function goRight() {

    if (projects[0].getBoundingClientRect().x < 0){
        newProject = projects[0].cloneNode(true);
        carousel.appendChild(newProject);
        carousel.removeChild(projects[0]);
    }

    projects = document.querySelectorAll(".project");
    document.querySelector(".carousel").scrollLeft += scrollAmount;
    projects[0].classList.toggle('fade');
    projects[1].classList.toggle('fade');


}

//PROJECT SCROLL LEFT
function goLeft() {
    
    if (projects[1].getBoundingClientRect().x > window.innerWidth/2){
        newProject = projects[projects.length-1].cloneNode(true);
        carousel.prepend(newProject);
        carousel.removeChild(projects[projects.length-1]);
    }

    projects = document.querySelectorAll(".project");
    document.querySelector(".carousel").scrollLeft -= scrollAmount;
    projects[0].classList.toggle('fade');
    projects[1].classList.toggle('fade');
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}


*/

//MOBILE/IPAD
if(mobile){
    const menu = document.querySelector(".hambMenu");
    const menuItems = document.querySelectorAll(".menuItem");
    const hamburger= document.querySelector(".hamburger");

    hamburger.addEventListener("click", function() {                                        // TOGGLE HAMBURGER SHAPE
        hamburger.classList.toggle("change");
        toggleMenu();
    })

    function toggleMenu() {                                                                 // APPEAR/ DISAPPEAR MENU
        if (menu.classList.contains("showMenu")) {  
            menu.classList.remove("showMenu");

        } 
        else {
            menu.classList.add("showMenu");

        }
    }

    menuItems.forEach(                                                                      // TOGGLE HAMBUEGER SHAPE
        function(menuItem) { 
            menuItem.addEventListener("click", function(){
                toggleMenu();
                hamburger.classList.toggle("change");
            });
        }
    )
}





