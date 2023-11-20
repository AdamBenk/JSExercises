
window.addEventListener("load", () => {    
    //moveDOMElement("picAnimated", {top:50, left:100}, {top:300, left:700}, 10);
    moveDOMElementPromise("picAnimated", {top:50, left:100}, {top:300, left:700}, 10);
}); 

/*function moveDOMElement(imagename, { top: a, left: b}, { top: aa, left: bb }, steps) {
    findElement(imagename, (imageobject) => {
        setStartPosition(imageobject, { top: a, left: b}, (imageobject) => {
            setSteps(imageobject, { top: aa, left: bb }, steps, (imageobject, endcoordinates, steptop, stepleft) => {
                makeMoves(imageobject, endcoordinates, steptop, stepleft);
            });
        });
    });
}*/



function moveDOMElementPromise(imagename, { top: a, left: b}, { top: aa, left: bb }, steps) {
    return new Promise((resolve) => {
            resolve(findElement(imagename))
        })
        .then((imageobject) => setStartPosition(imageobject, { top: a, left: b}))
        .then((imageobject) => setSteps(imageobject, { top: aa, left: bb }, steps))
        .then((returnValues) => makeMoves(returnValues[0], returnValues[1], returnValues[2], returnValues[3]))
        .catch(() => console.error("error"));
}

function findElement(imagename) {
    const imageobject = document.getElementById(`${imagename}`);
    return imageobject;
}

function setStartPosition(imageobject, startcoordinates) {
    imageobject.style.top = `${startcoordinates.top}px`;
    imageobject.style.left = `${startcoordinates.left}px`;
    return imageobject;
}

function setSteps(imageobject, endcoordinates, steps) {
    const steptop = (endcoordinates.top - imageobject.offsetTop)/steps;
    const stepleft = (endcoordinates.left - imageobject.offsetLeft)/steps;
    const returnValues = [imageobject, endcoordinates, steptop, stepleft];
    return returnValues;
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
}



/*function findElement(imagename, cb) {
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