function create_swiggs() {
    swiggs = [];
    let swig_count = 70;
    let gap = height / swig_count;
    let value = 0;
    let y = 0;
    for (let i = 0; i < swig_count; i++) {
        swiggs.push(new Swiggly(value, y));
        value += 0.1;
        y += gap;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    create_swiggs();
}

let swiggs = [];

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);

    create_swiggs();
}

let x = 0;
let incx = 0.001;
let incy = 0.01;
function draw() {
    background(0);
    swiggs.forEach(element => {
        element.show();
    });
}

function keyPressed() {
    if (key === 's') {
        saveGif('swiggly', 5);
    }
}