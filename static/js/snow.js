const NUMBER_OF_SNOWFLAKES = 100;
const MAX_SNOWFLAKE_SIZE = 5;
const MAX_SNOWFLAKE_SPEED = 0.1;
const SNOWFLAKE_COLOUR = '#ddd';
const snowflakes = [];

// Create the canvas
const canvas = document.createElement('canvas');
canvas.style.position = 'fixed'; // Use fixed instead of absolute
canvas.style.pointerEvents = 'none'; // Ensure it doesn't interfere with page interactions
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = "999";
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

// Function to set canvas size
const adjustCanvasSize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; // Always match the viewport height
};

// Initial canvas setup
adjustCanvasSize();

const createSnowflake = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
    color: SNOWFLAKE_COLOUR,
    speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
    sway: Math.random() - 0.5,
});

const drawSnowflake = snowflake => {
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
    ctx.fillStyle = snowflake.color;
    ctx.fill();
    ctx.closePath();
};

const updateSnowflake = snowflake => {
    snowflake.y += snowflake.speed;
    snowflake.x += snowflake.sway;

    // Reset snowflake to the top if it falls out of view
    if (snowflake.y > canvas.height) {
        snowflake.y = 0; // Reset to top
        snowflake.x = Math.random() * canvas.width; // Randomize x position
    }
};

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach(snowflake => {
        updateSnowflake(snowflake);
        drawSnowflake(snowflake);
    });

    requestAnimationFrame(animate);
};

// Create snowflakes
for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
    snowflakes.push(createSnowflake());
}

// Adjust canvas size on resize
window.addEventListener('resize', adjustCanvasSize);

// Start animation
animate();
