import Game from "/src/game";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Gamepad(GAME_WIDTH, GAME_HEIGHT);
game.start();

let lastTime = 0;
function gameLoop(timestamp) - lastTime;
let deltaTime = timestamp - lastTime;
lastTime  = timestamp;

ctxclearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

game.update(deltaTime);
game.draw(ctx)

