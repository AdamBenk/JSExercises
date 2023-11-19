
window.addEventListener("load", () => {    
    moveDOMElement("picAnimated", {top:50, left:100}, {top:300, left:700}, 10);
}); 

function moveDOMElement(imagename, { top: a, left: b}, { top: aa, left: bb }, steps) {
    findElement(imagename, (imageobject) => {
        setStartPosition(imageobject, { top: a, left: b}, (imageobject) => {
            setSteps(imageobject, { top: aa, left: bb }, steps, (imageobject, endcoordinates, steptop, stepleft) => {
                makeMoves(imageobject, endcoordinates, steptop, stepleft);
            });
        });
    });
}

function findElement(imagename, cb) {
    const img = document.getElementById(`${imagename}`);
    console.log(imagename, document, img);
    cb(img)
}

function setStartPosition(imageobject, startcoordinates, cb) {
    imageobject.style.top = `${startcoordinates.top}px`;
    imageobject.style.left = `${startcoordinates.left}px`;
    console.info("startPos:", startcoordinates, "start position image coords:",  imageobject.style.top,  imageobject.style.left, imageobject.offsetTop, imageobject.offsetLeft)
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

        if (imageobject.offsetLeft === endcoordinates.left) {
            clearInterval(moveIntervalID);
        }
    }, 500)
}
