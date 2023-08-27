game.sprites.booster.drawFunction = function (ctx) {

    // Draw button
    ctx.fillStyle='red'
    ctx.font = "20px serif"
    ctx.textAlign = "center"
    ctx.fillText(this.text, this.width/2, this.height/2 -5)
    ctx.font = "15px serif"
    ctx.fillText(this.goldNeeded + ' gold', this.width/2, this.height/2 + 15)

    // Hide if not enough money
    ctx.fillStyle = 'rgba(0,0,0,0.6)'
    if (this.disable) {
        ctx.fillRect(0,0,this.width,this.height)
    } 
   
}
