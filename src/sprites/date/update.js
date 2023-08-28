game.sprites.date.update = function (ctx) {

    // Update year and month
    if (performance.now() - this.lastChange > 500) {
        this.lastChange = performance.now()
        if (this.month == 12) {
            this.month = 1
            this.year += 1
        } else {
            this.month+=1
        }
    }
}

