game.sprites.date.drawFunction = function (ctx) {

    // Draw button
    ctx.fillStyle='red'
    ctx.font = "20px serif"
    ctx.fillText('Year: ' + this.year + ' - Month: ' + this.month, 10, this.height/2 + 5)
 
}
