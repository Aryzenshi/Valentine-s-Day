const interactiveImage = document.getElementById('interactiveImage');
const container = document.getElementById('container');

let posX = 0;
let posY = 0;
let velX = 2;
let velY = 0;
const gravity = 0.1;
const bounceFactor = -0.6;

const minX = 0;
const maxX = container.clientWidth - interactiveImage.width;
const minY = 0;
const maxY = container.clientHeight - interactiveImage.height-70;

let isDraggingImage = false;
let dragStartX;
let dragStartY;
let dragDistanceX;
let dragDistanceY;

function startDragImage(e) {
    isDraggingImage = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    dragDistanceX = 0;
    dragDistanceY = 0;

    velX = 0;
    velY = 0;

    e.preventDefault();
}

function endDragImage(e) {
    if (isDraggingImage) {
        isDraggingImage = false;
        setVelocityFromDrag();
    }
}

function dragImage(e) {
    if (isDraggingImage) {
        e.preventDefault();

        const deltaX = e.clientX - dragStartX;
        const deltaY = e.clientY - dragStartY;

        posX += deltaX;
        posY += deltaY;

        posX = Math.max(minX, Math.min(maxX, posX));
        posY = Math.max(minY, Math.min(maxY, posY));

        dragDistanceX += deltaX;
        dragDistanceY += deltaY;

        dragStartX = e.clientX;
        dragStartY = e.clientY;

        interactiveImage.style.left = posX + 'px';
        interactiveImage.style.top = posY + 'px';
    }
}

function setVelocityFromDrag() {
    velX = dragDistanceX * 0.05;
    velY = dragDistanceY * 0.05;
}

function update() {
    velY += gravity;
    posX += velX;
    posY += velY;

    if (posX > maxX || posX < minX) {
        velX *= bounceFactor;
        posX = Math.max(minX, Math.min(maxX, posX));
    }

    if (posY > maxY || posY < minY) {
        velY *= bounceFactor;
        posY = Math.max(minY, Math.min(maxY, posY));

        if (posY === maxY) {
            velX *= 0.9;
        }
    }

    interactiveImage.style.left = posX + 'px';
    interactiveImage.style.top = posY + 'px';

    requestAnimationFrame(update);
}

interactiveImage.addEventListener('mousedown', startDragImage);
document.addEventListener('mouseup', endDragImage);
document.addEventListener('mousemove', dragImage);

update();