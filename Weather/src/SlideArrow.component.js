export class SlideArrow {
  
    addListener(leftArrow, rightArrow) {
        leftArrow.addEventListener("click", () => {
            console.info(leftArrow.nextElementSibling.style)
            leftArrow.nextElementSibling.style.tarnsform = "translateX(50px)";
        });
        rightArrow.addEventListener("click", () => {
            console.info(rightArrow.previousElementSibling.style.transform)
            rightArrow.previousElementSibling.style.tarnsform = "translateX(50px)";
        });
    }
}