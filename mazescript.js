/* Reset defaults */
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

/* Body styling */
body { 
    text-align: center;
    background: #ffdde1 url('https://i.imgur.com/nVVaZgV.jpg') no-repeat center center fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: 'Press Start 2P', cursive;
    overflow: hidden;
}

/* Centering the maze */
#canvas {
    background: #fff;
    display: block;
    border-radius: 10px;
    border: 5px solid #fba2b7;
    box-shadow: 0 0 10px rgba(255, 111, 145, 0.3);

    /* Centering */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}

/* Centering start screen */
#start-screen {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 221, 225, 0.9);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    
    z-index: 2;
}

/* Centering game over screen */
#game-over-screen {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 221, 225, 0.9);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    
    z-index: 2;
    display: none;
}

/* Buttons */
#start-screen button,
#game-over-screen button {
    font-family: 'Press Start 2P', cursive;
    font-size: 16px;
    padding: 10px 20px;
    background: #ff6f91;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
}

#start-screen button:hover,
#game-over-screen button:hover {
    background: #ff4d6d;
}
