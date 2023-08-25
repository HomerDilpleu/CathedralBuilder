game.sprites.click.drawFunction = function (ctx) {
    // Shortcuts
    id = this.id

    // Draw button
    ctx.fillStyle='red'
    ctx.font = "20px serif"
    ctx.textAlign = "center"
    ctx.fillText(this.text, this.width/2, this.height/2 + 5)
    ctx.fillText(this.progress, 0,0)

    // Progression bar
    if (this.isStarted) {
        ctx.fillStyle = 'green'
        ctx.fillRect(0,this.height*3/4,this.width*this.progress,this.height/4)
    }

    // Hide if prerequisites are KO
    ctx.fillStyle = 'rgba(0,0,0,0.6)'
    if (id == 'stoneButton' && game.variables.rockStock < 1) {
        ctx.fillRect(0,0,this.width,this.height)
    } 
   
}
