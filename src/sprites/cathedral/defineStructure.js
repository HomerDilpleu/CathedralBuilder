//////////////////////
// Define the structure of the cathedral
// and the order the stones must will be
// built
//////////////////////
game.sprites.cathedral.defineStructure = function() {

/*    
let z = this.size.z
for (let x = 30 ; x<=45 ; x+=1) {
    for (let y = 0 ; y<=30; y+=1) {
        this.structure.push({x:x,y:y,z:z})
    }
}
*/

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


/*

this.structure.push({x:5,y:62,z:0,type:'bottom'})

    // left tower
    for (let x = 0; x <15; x+=1) {
        for (let y = 0; y<=this.size.y; y+=1) {
            this.structure.push({x:x,y:y,z:59})
        }
    }

    // facade
    for (let x = 15; x <40; x+=1) {
        for (let y = 0; y<=30; y+=1) {
            this.structure.push({x:x,y:y,z:60})
        }
    }

    // right tower
    for (let x = 40; x <55; x+=1) {
        for (let y = 0; y<=this.size.y; y+=1) {
            this.structure.push({x:x,y:y,z:59})
        }
    }
*/

}
