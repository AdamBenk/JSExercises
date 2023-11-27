
window.addEventListener("load", () => {    
    //moveDOMElementPromise("picAnimated", {top:50, left:100}, {top:300, left:700}, 100);
    //moveDOMElementPromise("picAnimated", {top:50, left:50}, {top:500, left:100}, 10);
    //moveDOMElementAsync("picAnimated", {top:50, left:100}, {top:300, left:700}, 4);
    moveAroundCorners({left:0, top:0}, 700, 500, 20);
    //moveRandom({left:0, top:0}, {left:20, top:70});
}); 


async function moveAroundCorners(startposition, leftstep, topstep, innersteps) {
    const img1ID = "picAnimated";

    const p1 = startposition;
    const p2 = {left: startposition.left, top: startposition.top + topstep};
    const p3 = {left: startposition.left + leftstep, top: startposition.top + topstep};
    const p4 = {left: startposition.left + leftstep, top: startposition.top};
    const p5 = {left: startposition.left, top: startposition.top};

    await moveDOMElementPromise(img1ID, p1, p2, innersteps);
    await moveDOMElementPromise(img1ID, p2, p3, innersteps);
    await moveDOMElementPromise(img1ID, p3, p4, innersteps);
    await moveDOMElementPromise(img1ID, p4, p5, innersteps);
}

async function moveRandom(startPos1, startPos2) {
    const img1ID = "picAnimated";
    const img2ID = "picAnimated2";
    const steps = 20;
    const backGround = document.querySelector("#backGroundContainer"); 
    
    
    const endPos1 = {left: startPos1.left + Math.random() * 1000, top: startPos1.top + Math.random() * 1000};
    const endPos2 = {left: startPos2.left + Math.random() * 1000, top: startPos2.top + Math.random() * 1000};

    const moveImg1 = moveDOMElementPromise(img1ID, startPos1, endPos1, steps);
    const moveImg2 = moveDOMElementPromise(img2ID, startPos2, endPos2, steps);
    const bothMoving = Promise.all(moveImg1, moveImg2); 
    await bothMoving;
    backGround.style.background = "rgb(101, 55, 117)"
}

function moveDOMElementPromise(imagename, startPos, endPos, steps) {
    return new Promise((resolve) => {
        let imageobject = findElement(imagename);

        setStartPosition(imageobject, startPos)
        const stepValue = setSteps(startPos, endPos, steps);
        makeMoves(imageobject, startPos, endPos, stepValue, resolve);
    });
}

async function moveDOMElementAsync(imagename, { top: a, left: b}, { top: aa, left: bb }, steps) {
    let result1 = findElement(imagename);
    setStartPosition(result1, { top: a, left: b});
    let result2 = setStartPosition(result1, { top: a, left: b});
    setSteps(result2, { top: aa, left: bb }, steps);
    let result3 = setSteps(result2, { top: aa, left: bb }, steps);
    makeMoves(imageobject, startPos, endPos, stepValue, resolve);
}

function findElement(imagename) {
    const imageobject = document.querySelector(`#${imagename}`);
    return imageobject;
}

function setStartPosition(imageobject, startcoordinates) {
    imageobject.style.top = `${startcoordinates.top}px`;
    imageobject.style.left = `${startcoordinates.left}px`;
    return imageobject;
}

function setSteps(startPos, endPos, steps) {
    const stepTop = (endPos.top - startPos.top) / steps;
    const stepLeft = (endPos.left - startPos.left) / steps;
    return  {
        top: stepTop,
        left: stepLeft
    };
}

function makeMoves(imageobject, startPos, endPos, stepValue, cb) {
    let currPos = startPos;
    const moveIntervalID = setInterval(() => {

        currPos.left  += stepValue.left;
        currPos.top  += stepValue.top;
        //console.info("coords:",currPos.left, currPos.top, stepValue.left, stepValue.top);
        imageobject.style.left = `${currPos.left}px`;
        imageobject.style.top = `${currPos.top}px`;

        const diffX = Math.abs(currPos.left - endPos.left);
        const diffY = Math.abs(currPos.top - endPos.top);
        if (diffX < 0.0000001 && diffY < 0.0000001) {
            clearInterval(moveIntervalID);
            cb();
        }
    }, 50);
    return endPos;
}

//CALLBACKHELL SOLUTION:

/*function moveDOMElement(imagename, { top: a, left: b}, { top: aa, left: bb }, steps) {
    findElement(imagename, (imageobject) => {
        setStartPosition(imageobject, { top: a, left: b}, (imageobject) => {
            setSteps(imageobject, { top: aa, left: bb }, steps, (imageobject, endcoordinates, steptop, stepleft) => {
                makeMoves(imageobject, endcoordinates, steptop, stepleft);
            });
        });
    });

function findElement(imagename, cb) {
    const imageobject = document.getElementById(`${imagename}`);
    cb(imageobject)
}

function setStartPosition(imageobject, startcoordinates, cb) {
    imageobject.style.top = `${startcoordinates.top}px`;
    imageobject.style.left = `${startcoordinates.left}px`;
    cb(imageobject);
}

function setSteps(imageobject, endcoordinates, steps, cb) {
    const steptop = (endcoordinates.top - imageobject.offsetTop)/steps;
    const stepleft = (endcoordinates.left - imageobject.offsetLeft)/steps;;
    cb(imageobject, endcoordinates, steptop, stepleft);
}

function makeMoves(imageobject, endcoordinates, steptop, stepleft) {
    const moveIntervalID = setInterval(() => {
        const startTop = imageobject.offsetTop;
        const startLeft = imageobject.offsetLeft;
        console.info("left and top:", startLeft, startTop, "endcoord:", endcoordinates.left, endcoordinates.top)
        imageobject.style.top = `${startTop + steptop}px`;
        imageobject.style.left = `${startLeft + stepleft}px`;

        if (imageobject.offsetLeft > endcoordinates.left) {
            clearInterval(moveIntervalID);
        }
    }, 500)
}*/ 