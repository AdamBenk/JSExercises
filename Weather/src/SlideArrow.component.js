export class SlideArrow {
    button;
    slider;
    direction; 
    step; 

    constructor(button, slider, direction) {
        this.button = button;
        this.slider = slider;
        this.direction = direction; 
        this.step = slider.firstChild.clientWidth;
    }

    render() {
        this.slider.style.left = "0px";
        const maxLeftSlide = this.slider.clientWidth - this.slider.parentElement.clientWidth;
        
        this.button.addEventListener("click", () => {
            let currentPos = parseInt(this.slider.style.left);
            if (this.direction === "left" && currentPos > -maxLeftSlide) {
                currentPos -= this.step;
            } else if (this.direction === "right" && currentPos < 0) {
                currentPos += this.step;
            }
            this.slider.style.left = currentPos + 'px';
        });
    }

        /*switch(direction) {
            case "left":
                slider.style.left -= step + 'px';
            case "right":
                slider.style.left += step + 'px';
            case "up":
                slider.style.top += step + 'px';
            case "down":
                slider.style.top -= step + 'px';
        }*/
}