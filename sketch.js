let canvas;
let paragraphs = [];
let num_paragraph = 100;
let x = 0;
let y = 0;

// Resive the canvas when the size of the browser changes
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	setup();
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '-1');

	for (let i = 0; i < num_paragraph; i++) {
		paragraphs.push(createP('Mine'));
		let size = random(0.25, 3);
		let opacity = random();
		let red = random(255);
		let green = random(255);
		let blue = random(255);
		paragraphs[i].style('font-size', `${size}em`);
		paragraphs[i].style('font-family', '"Gill Sans"');
		paragraphs[i].style('opacity', `${opacity}`);
		paragraphs[i].style('color', `rgb(${red}, ${green}, ${blue})`);
		paragraphs[i].position(random(0, windowWidth), random(0, windowHeight));
	}
}

function draw() {
	background(30);

	for (let p of paragraphs) {
		move(p);
	}

}

function move(p) {
	x = constrain(p.x + random(-2, 2), 0, windowWidth);
	y = constrain(p.y + random(-2, 2), 0, windowHeight);
	p.position(x, y);
}
