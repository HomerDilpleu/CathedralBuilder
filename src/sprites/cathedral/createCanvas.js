//////////////////////
// Creates a specific canvas
// to render the cathedral
//////////////////////
game.sprites.cathedral.createCanvas = function() {
    // Create canvas
    let htmlCanvas =  document.createElement('canvas')
    htmlCanvas.id = 'cat'
	htmlCanvas.width = this.width
	htmlCanvas.height = this.height
    htmlCanvas.style.display = 'none'
	document.body.appendChild(htmlCanvas)
    // save context and html reference
    this.canvas.ctx = htmlCanvas.getContext('2d')
    this.canvas.htmlRef = htmlCanvas
}
