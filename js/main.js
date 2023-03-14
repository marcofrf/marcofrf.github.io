// ANIMATE OPACITY ON PAGE LOAD
window.onload = function() {
        document.querySelector(".content").animate([
            { // from
                opacity: 0,
            },
            { // to
                opacity: 1,
            }
            ], 1000);
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



var fileName = location.href.split("/").slice(-1); 
var mobile = window.matchMedia("(max-width: 600px)").matches;
let leftArrow = document.querySelector("#leftArrow");
let rightArrow = document.querySelector("#rightArrow");

//MOBILE/IPAD
if(mobile){
    const menu = document.querySelector(".hambMenu");
    const menuItems = document.querySelectorAll(".menuItem");
    const hamburger= document.querySelector(".hamburger");

    hamburger.addEventListener("click", function() {                                        // TOGGLE HAMBUEGER SHAPE
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

// IN PROJECTS PAGE
if (fileName == "works.html"){                                  
    var carousel = document.querySelector(".carousel");
    var projects = document.querySelectorAll(".project");
    var newProject;
    var scrollAmount = projects[0].offsetWidth;
    var ball = [];
    var ballCount = 0;
    let projScroll = document.querySelector(".project-scroll");

    for(i=0; i<projects.length; i++){                                                               // APPENDS PROJECT SCROLL BALLS

        ball[i] = document.createElement('div');
        ball[i].setAttribute("class","ball");
        ball[i].setAttribute("id", "ballDown");
        projScroll.append(ball[i]);
    }

    projects[0].classList.toggle('fade');
    ball[ballCount].style.background = "white";
    
    rightArrow.addEventListener("click", function(){                                                // CLICK RIGHT SCREEN ARROW - SCROLL RIGHT, ANIMATE SCROLL BALLS
        console.log(carousel.scrollLeft);
        if (carousel.scrollLeft == 0 || carousel.scrollLeft == carousel.offsetWidth){
            goRight();
            ball[ballCount].style.background = "transparent";
            ballCount++;
            if(ballCount == ball.length){
                ballCount = 0;
            }
            ball[ballCount].style.background = "white";
        }
    });
    
    leftArrow.addEventListener("click", function(){                                                 // CLICK LEFT SCREEN ARROW - SCROLL LEFT, ANIMATE SCROLL BALLS
        if (carousel.scrollLeft == 0 || carousel.scrollLeft == carousel.offsetWidth){
            goLeft();
            ball[ballCount].style.background = "transparent";
            ballCount--;
            if(ballCount == -1){
                ballCount = ball.length-1;
            }
            ball[ballCount].style.background = "white";
        }
    });

    window.addEventListener("keydown", function(e){                                                 // RIGHT KEY ARROW - SCROLL RIGHT, ANIMATE SCROLL BALLS
        console.log(carousel.scrollLeft);
        console.log(carousel.offsetWidth);
        if (carousel.scrollLeft == 0 || carousel.scrollLeft == carousel.offsetWidth){

            if(e.keyCode == "39"){
                goRight();
                ball[ballCount].style.background = "transparent";
                ballCount++;
                if(ballCount == ball.length){
                    ballCount = 0;
                }
                ball[ballCount].style.background = "white";
            }
            if(e.keyCode == "37"){                                                                  // LEFT KEY ARROW - SCROLL RIGHT, ANIMATE SCROLL BALLS
                goLeft();
                ball[ballCount].style.background = "transparent";
                ballCount--;
                if(ballCount == -1){
                    ballCount = ball.length-1;
                }
                ball[ballCount].style.background = "white";
            }
        }
    }); 


    var xi, xf, yi, yf;
    if(mobile){
        
        // MOBILE PROJECT SCROLL
        window.addEventListener("mousedown", function(e){                                           
            xi = e.clientX;
            yi = e.clientY;
            if (xi > 280){
                goRight();
                ball[ballCount].style.background = "transparent";
                ballCount++;
                if(ballCount == ball.length){
                    ballCount = 0;
                }
                ball[ballCount].style.background = "white";
            }
            if (xi < 90){
                goLeft();
                ball[ballCount].style.background = "transparent";
                ballCount--;
                if(ballCount == -1){
                    ballCount = ball.length-1;
                }
                ball[ballCount].style.background = "white";
            }
        })
    }
}





