export const Snowflake = ({
    numberOfSnowflakes = 100,
    maxSnowflakesSize = 5,
    maxSnowflakesSpeed = 0.1,
    snowflakeColor = '#ddd',
} = {}) => {
    const snowflakes = [];

    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed'; // Fixed ensures it sticks to the viewport
    canvas.style.pointerEvents = 'none';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    // Set canvas size
    const adjustCanvasSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    // Initialize canvas size
    adjustCanvasSize();

    // Snowflake factory
    const createSnowflake = () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.floor(Math.random() * maxSnowflakesSize) + 1,
        color: snowflakeColor,
        speed: Math.round((Math.random() * maxSnowflakesSpeed + 0.5) * 10) / 10, // Round to 1 decimal
        sway: Math.round((Math.random() - 0.5) * 10) / 10, // Round to 1 decimal
    });

    // Draw a snowflake
    const drawSnowflake = snowflake => {
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
        ctx.fillStyle = snowflake.color;
        ctx.fill();
        ctx.closePath();
    };

    // Update a snowflake's position
    const updateSnowflake = snowflake => {
        snowflake.y += snowflake.speed;
        snowflake.x += snowflake.sway;

        // Reset snowflake if it goes off-screen
        if (snowflake.y > canvas.height) {
            snowflake.y = 0; // Reset to top
            snowflake.x = Math.random() * canvas.width; // Randomize x position
        }

        // Wrap around horizontally
        if (snowflake.x > canvas.width) {
            snowflake.x = 0;
        } else if (snowflake.x < 0) {
            snowflake.x = canvas.width;
        }
    };

    // Animation loop
    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        snowflakes.forEach(snowflake => {
            updateSnowflake(snowflake);
            drawSnowflake(snowflake);
        });

        requestAnimationFrame(animate);
    };

    // Create snowflakes
    for (let i = 0; i < numberOfSnowflakes; i++) {
        snowflakes.push(createSnowflake());
    }

    // Handle window resize with debounce
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(adjustCanvasSize, 200);
    });

    // Start the animation
    animate();
};
