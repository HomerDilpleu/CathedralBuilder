game.sprites.play.drawFunction = function (ctx) {
    // Draw button
    ctx.fillStyle='red'
    ctx.font = "20px serif"
    ctx.textAlign = "center"
    ctx.fillText('Play', this.width/2, this.height/2 + 5)
}
