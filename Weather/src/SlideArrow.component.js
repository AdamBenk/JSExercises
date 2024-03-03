export default class SlideArrow {
    button;
    slider;
    direction; 
    step;

    constructor(button, slider, direction) {
        this.button = button;
        this.slider = slider;
        this.direction = direction; 
        this.stepSetter();
    }

    init() {
        if (["left", "right"].includes(this.direction)) {
            this.slider.style.left = "0px";
            this.button.addEventListener("click", this.arrowClickHorizontal.bind(this));
        } 
        if (["top", "down"].includes(this.direction)) {
            this.slider.style.top = "0px";
            this.button.addEventListener("click", this.arrowClickVertical.bind(this));
        }
    }

    arrowClickHorizontal() {
        const maxLeftSlide = this.slider.clientWidth - this.slider.parentElement.clientWidth;
        let currentPos = parseInt(this.slider.style.left);
        if (this.direction === "left" && currentPos > -maxLeftSlide) {
            currentPos -= this.step;
        } else if (this.direction === "right" && currentPos < 0) {
            currentPos += this.step;
        }
        this.slider.style.left = currentPos + 'px';
    }

    arrowClickVertical() {
        const maxTopSlide = this.slider.clientHeight - this.slider.parentElement.clientHeight;
        let currentPos = parseInt(this.slider.style.top);
        if (this.direction === "top" && currentPos > -maxTopSlide) {
            currentPos -= this.step;
        } else if (this.direction === "down" && currentPos < 0) {
            currentPos += this.step;
        }
        this.slider.style.top = currentPos + 'px';
    }

    stepSetter() {
        switch(this.direction) {
            case "left": 
                this.step = this.slider.firstChild.clientWidth;
            break;
            case "right": 
                this.step = this.slider.firstChild.clientWidth;
            break;
            case "top":
                this.step = this.slider.firstChild.clientHeight; 
            break;
            case "down":
                this.step = this.slider.firstChild.clientHeight; 
            break;
        }
    }
}