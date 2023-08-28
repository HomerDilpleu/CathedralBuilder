game.sprites.stock.init = function() {
    
    // Init sprit properties
    this.width = 100
    this.height = 50
    this.drawBoundaries=true

    // Define additional properties
    this.id = ""
    this.text = ""

    // Create "Stock rock" button
    let stockRock = this.cloneCreate()
    stockRock.id = "stockRock"
    stockRock.text = "Rock"
    stockRock.x = 60
    stockRock.y = 200

    // Create "Stock stone" button
    let stockStone = this.cloneCreate()
    stockStone.id = "stockStone"
    stockStone.text = "Stone"
    stockStone.x = 60
    stockStone.y = 300

    // Create "Gold stone" button
    let stockGold = this.cloneCreate()
    stockGold.id = "stockGold"
    stockGold.text = "Gold"
    stockGold.x = 60
    stockGold.y = 400
}
