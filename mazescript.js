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
playerImage.src = "https://i.pinimg.com/564x/a9/a4/ec/a9a4ec03fa9afc407028ca40c20ed774.jpg"; // Minecraft Alex image

const whiteHeartImage = new Image();
whiteHeartImage.src = "https://media.tenor.com/wnVuzMq9fYsAAAAi/love-heart.gif";

const blackHeartImage = new Image();
blackHeartImage.src = "https://media.tenor.com/qVJBrbsBk8EAAAAi/pixel-art-gmail.gif";

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

const player = { x: 6, y: 4 };
const whiteHeartPos = { x: 11, y: 8 };
const blackHeartPos = { x: 1, y: 1 };

let gameStarted = false;

function drawMaze() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            if (maze[y][x] === 1) {
                ctx.drawImage(wallImage, x * tileSize, y * tileSize, tileSize, tileSize);
            } else {
                ctx.drawImage(walkwayImage, x * tileSize, y * tileSize, tileSize, tileSize);
            }
        }
    }
    ctx.drawImage(whiteHeartImage, whiteHeartPos.x * tileSize, whiteHeartPos.y * tileSize, tileSize, tileSize);
    ctx.drawImage(blackHeartImage, blackHeartPos.x * tileSize, blackHeartPos.y * tileSize, tileSize, tileSize);
    ctx.drawImage(playerImage, player.x * tileSize, player.y * tileSize, tileSize, tileSize);
}

function movePlayer(dx, dy) {
    if (!gameStarted) return;

    let newX = player.x + dx;
    let newY = player.y + dy;

    if (
        newX >= 0 &&
        newX < cols &&
        newY >= 0 &&
        newY < rows &&
        maze[newY][newX] === 0
    ) {
        player.x = newX;
        player.y = newY;

        if (player.x === whiteHeartPos.x && player.y === whiteHeartPos.y) {
            showWinContent();
        }

        if (player.x === blackHeartPos.x && player.y === blackHeartPos.y) {
            showGameOver();
        }

        drawMaze();
    }
}

function showWinContent() {
    window.location.href = "valentine-success.html";
}

function showGameOver() {
    document.getElementById("game-over-screen").style.display = "block";
    gameStarted = false;
}

function startGame() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-over-screen").style.display = "none";
    gameStarted = true;
    player.x = 6;
    player.y = 4;
    drawMaze();
}

function restartGame() {
    document.getElementById("game-over-screen").style.display = "none";
    startGame();
}

window.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowUp":    movePlayer(0, -1); break;
        case "ArrowDown":  movePlayer(0,  1); break;
        case "ArrowLeft":  movePlayer(-1, 0); break;
        case "ArrowRight": movePlayer(1,  0); break;
    }
});

wallImage.onload = drawMaze;
walkwayImage.onload = drawMaze;
playerImage.onload = drawMaze;
whiteHeartImage.onload = drawMaze;
blackHeartImage.onload = drawMaze;
