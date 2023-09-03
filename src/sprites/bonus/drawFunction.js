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
    } else 
    if (this.color == 'green') {
        light = '#99FF99'
        medium1 = '#66FF66'
        medium2 = '#33FF33'
        medium3 = '#00CC00'
        dark = '#009900'
    }

    // Red
    //let light = '#FF9999'
    //let medium1 = '#FF6666'
    //let medium2 = '#FF3333'
    //let medium3 = '#CC0000'
    //let dark = '#990000'

    // Blue
    //let light = '#99CCFF'
    //let medium1 = '#66B2FF'
    //let medium2 = '#3399FF'
    //let medium3 = '#0066CC'
    //let dark = '#004C99'

    // Green
    //let light = '#99FF99'
    //let medium1 = '#66FF66'
    //let medium2 = '#33FF33'
    //let medium3 = '#00CC00'
    //let dark = '#009900'


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
    ctx.fillText('AUTO CLICK',50,28)
    

/*
    ctx.strokeStyle='#000000'
    ctx.fillStyle='#a500e1'
    ctx.lineWidth = 1
    ctx.stroke(this.up)
    ctx.stroke(this.upRight)
    ctx.stroke(this.right)
    ctx.stroke(this.downRight)
    ctx.stroke(this.down)
    ctx.stroke(this.downLeft)
    ctx.stroke(this.left)
    ctx.stroke(this.upLeft)
    ctx.strokeStyle='red'
    ctx.stroke(this.center)
 */ 

 

    /*
    // Shortcuts
    let v = game.variables
    let dark = game.colors.dark
    */
 
    /*
    // Draw Level text
    ctx.fillStyle=dark
    ctx.font = "30px serif"
    ctx.textAlign = "center"
    ctx.fillText('BONUS',this.width/2,this.height/2)*/

/*
    // Draw progress frame
    let barSize = 300
    ctx.strokeStyle=dark
    ctx.strokeRect(110,15,barSize,15)
    // Draw progress
    let progress = v.stoneBuilt / v.levelGoal
    ctx.fillRect(110,15,progress*barSize,15)

    // Draw current score
    ctx.font = "20px serif"
    ctx.fillText(v.stoneBuilt, 110 + progress*barSize, 50)
    
    // Draw target score
    ctx.font = "20px serif"
    ctx.fillText(v.levelGoal, 120 + barSize, 28)*/
}
