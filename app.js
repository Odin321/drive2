// Setup the canvas and the game elements
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set the canvas size
canvas.width = 800;
canvas.height = 600;

// Car object
const car = {
    x: canvas.width / 2 - 25,
    y: canvas.height - 70,
    width: 50,
    height: 70,
    speed: 5,
    dx: 0,
    dy: 0,
    color: "#ff0000", // Red car
};

// Draw the car on the canvas
function drawCar() {
    ctx.fillStyle = car.color;
    ctx.fillRect(car.x, car.y, car.width, car.height);
}

// Move the car based on the current direction
function moveCar() {
    car.x += car.dx;
    car.y += car.dy;

    // Prevent the car from going out of bounds
    if (car.x < 0) car.x = 0;
    if (car.x + car.width > canvas.width) car.x = canvas.width - car.width;
    if (car.y < 0) car.y = 0;
    if (car.y + car.height > canvas.height) car.y = canvas.height - car.height;
}

// Clear the canvas and redraw everything
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Update the game
function update() {
    clear();
    drawCar();
    moveCar();
    requestAnimationFrame(update); // Keep the game running
}

// Handle key presses
function keyDownHandler(e) {
    if (e.key === "ArrowUp") {
        car.dy = -car.speed;
    }
    if (e.key === "ArrowDown") {
        car.dy = car.speed;
    }
    if (e.key === "ArrowLeft") {
        car.dx = -car.speed;
    }
    if (e.key === "ArrowRight") {
        car.dx = car.speed;
    }
}

// Stop the car when the key is released
function keyUpHandler(e) {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        car.dy = 0;
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        car.dx = 0;
    }
}

// Event listeners for keyboard controls
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

// Start the game
update();
