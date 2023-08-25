game.sprites.click.update = function (ctx) {
    // Shosrcuts
    let id = this.id

    // Start the progress if the button is still not in progress, if prerequisites are OK and if buton is clicked
    if (!this.isStarted) {
        this.progress = 0
        if (id == 'rockButton' && this.isClicked) {
            this.isStarted = true
            this.startTime = performance.now()
        } else if (id == 'stoneButton' && game.variables.rockStock >= 1 && this.isClicked) {
            game.variables.rockStock-=1
            this.isStarted = true
            this.startTime = performance.now()
        } else if (id == 'goldButton' && this.isClicked) {
            this.isStarted = true
            this.startTime = performance.now()
        }
    }

    // Claculate progress
    if (this.isStarted) {
        this.progress = (performance.now()-this.startTime)/this.speed
        if (this.progress>=1) {this.progress=1}
    }

    // Update stocks and reset progress if progress is 100%
    if (this.progress==1) {
        this.progress = 0
        this.isStarted = false
        if (id == 'rockButton') {
            game.variables.rockStock+=1
        } else if (id == 'stoneButton') {
            game.variables.stoneStock+=5
        } else if (id == 'goldButton') {
            game.variables.goldStock+=1
        }
    }
}

