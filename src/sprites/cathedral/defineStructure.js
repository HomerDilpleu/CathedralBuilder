//////////////////////
// Define the structure of the cathedral
// and the order the stones must will be
// built
//////////////////////
game.sprites.cathedral.defineStructure = function() {

// bords
for (let z = this.size.z; z>=this.size.z / 2 ; z-=1) {
    // mur gauche
    for (let y = 0 ; y<=this.size.x ; y+=1) {
        this.structure.push({x:0,y:y,z:z})
    }
    // sol
    for (let x = 1 ; x<=this.size.x-1 ; x+=1) {
        this.structure.push({x:x,y:0,z:z})
    }
    // mur droite
    for (let y = 0 ; y<=this.size.y ; y+=1) {
        this.structure.push({x:this.size.x,y:y,z:z})
    }
}

}
