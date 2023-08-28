game.sprites.stock.drawFunction = function (ctx) {
    //shortcuts
    let id = this.id
    let v = game.variables

    // Draw button
    ctx.fillStyle='red'
    ctx.font = "20px serif"
    ctx.textAlign = "center"
    ctx.fillText(this.text, this.width/2, this.height/2 -5)
    ctx.font = "15px serif"

    // Adapt text depending on button type
    let text = ''
    if (id == 'stockRock') {text = v.rockStock}
    if (id == 'stockStone') {text = v.stoneStock}
    if (id == 'stockGold') {text = v.goldStock}

    ctx.fillText(text, this.width/2, this.height/2 + 15)
  
}
