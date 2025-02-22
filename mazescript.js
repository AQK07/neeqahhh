const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const rows = 10;
const cols = 13;
const tileSize = 40;

canvas.width = cols * tileSize;
canvas.height = rows * tileSize;

// Load images
const wallImage = new Image();
wallImage.src = "https://imgur.com/2wxq3od.png";

const walkwayImage = new Image();
walkwayImage.src = "https://i.imgur.com/3henhoR.png";

const playerImage = new Image();
playerImage.src = "https://i.pinimg.com/564x/a9/a4/ec/a9a4ec03fa9afc407028ca40c20ed774.jpg"; // Minecraft Alex

const whiteHeartImage = new Image();
whiteHeartImage.src = "https://media.tenor.com/wnVuzMq9fYsAAAAi/love-heart.gif";

const blackHeartImage = new Image();
blackHeartImage.src = "https://media.tenor.com/qVJBrbsBk8EAAAAi/pixel-art-gmail.gif";

// Maze definition (1 = wall, 0 = walkway)
const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// Player
const player = { x: 1, y: 1 };
const whiteHeartPos = { x: 11, y: 8 };
const blackHeartPos = { x: 1, y: 1 };

let gameStarted = false;

// Draw the maze
function drawMaze() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            ctx.drawImage(maze[y][x] === 1 ? wallImage : walkwayImage, x * tileSize, y * tileSize, tileSize, tileSize);
        }
    }

    ctx.drawImage(whiteHeartImage, whiteHeartPos.x * tileSize, whiteHeartPos.y * tileSize, tileSize, tileSize);
    ctx.drawImage(playerImage, player.x * tileSize, player.y * tileSize, tileSize, tileSize);
}

// Movement
window.addEventListener("keydown", (event) => {
    let dx = 0, dy = 0;
    if (event.key === "ArrowUp") dy = -1;
    if (event.key === "ArrowDown") dy = 1;
    if (event.key === "ArrowLeft") dx = -1;
    if (event.key === "ArrowRight") dx = 1;

    let newX = player.x + dx;
    let newY = player.y + dy;

    if (maze[newY][newX] === 0) {
        player.x = newX;
        player.y = newY;
    }

    drawMaze();
});

function startGame() {
    document.getElementById("start-screen").style.display = "none";
    gameStarted = true;
    drawMaze();
}

wallImage.onload = drawMaze;
