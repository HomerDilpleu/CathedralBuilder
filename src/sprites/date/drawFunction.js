game.sprites.date.drawFunction = function (ctx) {

    let dark = game.colors.dark

    // Draw button
    ctx.fillStyle=dark
    ctx.font = "30px serif"
    ctx.fillText('Year: ' + this.year + ' - Month: ' + this.month, 10, this.height/2 + 5)
 
}
