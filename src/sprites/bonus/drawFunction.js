game.sprites.bonus.drawFunction = function (ctx) {

    // Red
    let light = '#FF9999'
    let medium1 = '#FF6666'
    let medium2 = '#FF3333'
    let medium3 = '#CC0000'
    let dark = '#990000'

    if (this.color == 'blue') {
        light = '#99CCFF'
        medium1 = '#66B2FF'
        medium2 = '#3399FF'
        medium3 = '#0066CC'
        dark = '#004C99'
    } else if (this.color == 'green') {
        light = '#99FF99'
        medium1 = '#66FF66'
        medium2 = '#33FF33'
        medium3 = '#00CC00'
        dark = '#009900'
    }

    // Draw
    ctx.fillStyle=light
    ctx.fill(this.upLeft)
    ctx.fillStyle=medium1
    ctx.fill(this.center)
    ctx.fillStyle=medium2
    ctx.fill(this.left)
    ctx.fill(this.down)
    ctx.fill(this.up)
    ctx.fillStyle=medium3
    ctx.fill(this.downLeft)
    ctx.fill(this.upRight)
    ctx.fill(this.downRight)
    ctx.fillStyle=dark
    ctx.fill(this.right)
    ctx.fillStyle=dark
    ctx.font = "12px serif"
    ctx.textAlign = "center"
    ctx.fillText(this.text,50,28)
}