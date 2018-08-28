class Score {
    constructor() {
        this.score = 0;
    }

    draw(ctx) {
        ctx.save();

        ctx.tanslate(this.score);

        ctx.beginPath();
        ctx.closePath();

        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.restore();
    }
}