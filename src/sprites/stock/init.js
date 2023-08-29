game.sprites.stock.init = function() {
    
    // Init sprit properties
    this.width = 100
    this.height = 80
    //this.drawBoundaries=true

    // Define additional properties
    this.id = ""
    this.text = ""

    // Create "Stock rock" button
    let stockRock = this.cloneCreate()
    stockRock.id = "stockRock"
    stockRock.text = "ROCK"
    stockRock.x = 60
    stockRock.y = 220

    // Create "Stock stone" button
    let stockStone = this.cloneCreate()
    stockStone.id = "stockStone"
    stockStone.text = "STONE"
    stockStone.x = 60
    stockStone.y = 320

    // Create "Gold stone" button
    let stockGold = this.cloneCreate()
    stockGold.id = "stockGold"
    stockGold.text = "GOLD"
    stockGold.x = 60
    stockGold.y = 420
}
