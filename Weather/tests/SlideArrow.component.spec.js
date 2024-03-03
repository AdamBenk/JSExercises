import SlideArrow from "../src/SlideArrow.component";
import {JSDOM} from "jsdom";
import {expect, jest, test} from '@jest/globals';

describe("SlideArrow", () => {
    let document;
    let mockSlide;
    let mockButton;
    let mockDirection;
    let slideArrow;
    
    beforeEach(() => {
       const jsdom = new JSDOM(`<html><body>
                            <button></button>
                            <div class="slideContainer">
                                <div class="slide">
                                    <div class="slideChildelement" clientWidth="" clientHeight=""></div>
                                </div>
                            </div></body></html>`);
        document = jsdom.window.document;
        mockSlide = createFakeElement();
        mockButton = createFakeElement();
        slideArrow = new SlideArrow(mockButton, mockSlide, mockDirection);
    })

    function createFakeElement() {
        return {
            style: {
                left: "0px",
                top: "0px",
            },
            clientHeight: 0,
            clientWidth: 0,
            parentElement: {
                clientHeight: 0,
                clientWidth: 0,
            },
            firstChild: {
                clientHeight: 0,
                clientWidth: 0,
            },
            addEventListener: function(eventName, callback) {},
        }
    }

    it("constructor should fill button, slider and direction", () => {
        mockDirection = "top";
        slideArrow = new SlideArrow(mockButton, mockSlide, mockDirection);
        expect(slideArrow.button).toBe(mockButton);
        expect(slideArrow.slider).toBe(mockSlide);
        expect(slideArrow.direction).toBe(mockDirection);
    });

    it("should set step length matching to direction if mockDirection is left", () => {
        slideArrow.direction = "left"; 
        mockSlide.firstChild.clientWidth = 30;
        slideArrow.stepSetter(mockDirection);
        expect(slideArrow.step).toBe(mockSlide.firstChild.clientWidth);
    });

    it("should set step length matching to direction if mockDirection is right", () => {
        slideArrow.direction = "right";
        mockSlide.firstChild.clientWidth = 20;
        slideArrow.stepSetter(mockDirection);
        expect(slideArrow.step).toBe(mockSlide.firstChild.clientWidth);
    });

    it("should set step length matching to direction if mockDirection is top", () => {
        slideArrow.direction = "top"; 
        mockSlide.firstChild.clientHeight = 20;
        slideArrow.stepSetter(mockDirection);
        expect(slideArrow.step).toBe(mockSlide.firstChild.clientHeight);
    });

    it("should set step length matching to direction if mockDirection is down", () => {
        slideArrow.direction = "down"; 
        mockSlide.firstChild.clientHeight = 20;
        slideArrow.stepSetter(mockDirection);
        expect(slideArrow.step).toBe(mockSlide.firstChild.clientHeight);
    });

    it("should call addEventListener if mockDirection is left", () => {
        slideArrow.direction = "left";
        const spy = jest.spyOn(slideArrow.button, "addEventListener");
        slideArrow.init();
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it("should slide left if one click on left arrow button", () => {
        slideArrow.direction = "left"; 
    });

    it("should slide right if one click on right arrow button", () => {
        slideArrow.direction = "right"; 
    });

    it("should slide top if one click on top arrow button", () => {
        slideArrow.direction = "top"; 
    });

    it("should slide down if one click on down arrow button", () => {
        slideArrow.direction = "down"; 
    });

    it.skip("should adjust left property of slider with step", () => {
        if(slideArrow.arrowClickHorizontal()) {
            expect(mockSlide.style.left).toBe(mockSlide.firstChild.clientWidth + slideArrow.stepSetter(mockDirection));
        }
    });

    it.skip("should adjust top property of slider with step", () => {
        if(slideArrow.arrowClickVertical()) {
            expect(mockSlide.style.top).toBe(mockSlide.firstChild.clientHeight + slideArrow.stepSetter(mockDirection));
        }
    });
});