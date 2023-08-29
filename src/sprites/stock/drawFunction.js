game.sprites.stock.drawFunction = function (ctx) {
    // Shortcuts
    id = this.id
    let v = game.variables
    light = game.colors.light
    dark = game.colors.dark
    transparentGrey = game.colors.transparentGrey

    // Draw button
    ctx.fillStyle=dark
    ctx.strokeStyle=dark
    ctx.lineWidth=4
    ctx.fillRect(0,0,this.width,this.height)
    ctx.strokeRect(0,0,this.width,this.height)
    // Draw caption
    ctx.fillStyle=light
    ctx.font = "25px serif"
    ctx.textAlign = "center"
    ctx.fillText(this.text, this.width/2, this.height/2 -5)
    // Draw stock
    ctx.font = "20px serif"
    let text = ''
    if (id == 'stockRock') {text = v.rockStock}
    if (id == 'stockStone') {text = v.stoneStock}
    if (id == 'stockGold') {text = v.goldStock}
    ctx.fillText(text, this.width/2, this.height/2 + 25)
    
}
