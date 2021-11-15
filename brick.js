import { detectCollision} from " ./collisionDetection";

export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("img_brick");

    this.game = game;

    this.position = position;
    this.width = 80;
    this.height = 24;
  }

  update() {
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
    }
  }

  draw(ctx) {
    ctx.drawImage(