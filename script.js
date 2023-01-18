const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = `${screen.height/2}px`;
dodger.style.left = `${screen.width/2}px`;
const screenWidth = screen.width;
const recent = "up";

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 10}px`;
  }
}
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
 if (left < screenWidth-40) {
    dodger.style.left = `${left + 10}px`;
  }
  dodger.style.backgroundColor = `rgb (${left}, 0, 0)`;
}
function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
    
    if (bottom < screen.height) {
      dodger.style.bottom = `${bottom + 10}px`;
    }
  }
  function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
  
    if (bottom > 0) {
      dodger.style.bottom = `${bottom - 10}px`;
    }
  }
  function center(){
    dodger.style.bottom = `${screen.height/2}px`;
    dodger.style.left = `${screen.width/2}px`;
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }else if (e.key === "ArrowUp") {
        moveDodgerUp();
    }else if (e.key === "ArrowDown") {
        moveDodgerDown();
    }else if (e.keyCode === 32) {
        center();
    }
  });
dodger.addEventListener("mouseover",function(){
    dodger.style.backgroundColor = "red";  
}, true);
dodger.addEventListener("click",function(){
    dodger.style.backgroundColor = "green";  
}, true);
dodger.addEventListener("mouseleave",function(){
    dodger.style.backgroundColor = "#FF69B4";  
}, true);