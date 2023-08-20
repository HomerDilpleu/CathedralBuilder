//////////////////////
// Build the structure of the cathedral
//////////////////////
game.sprites.cathedral.buildStructure = function() {

    // ground
    for (let x = 0; x<=80; x+=1) {
        for (let z = 60; z>0; z-=1) {
            this.structure.push({x:x,y:0,z:z})
        }
    }

    // Column 1
    for (let y = 0; y<=20; y+=1) {
        this.structure.push({x:20,y:y,z:5})
    }

    // Column 2
    for (let y = 0; y<=20; y+=1) {
        this.structure.push({x:20,y:y,z:10})
    }

/*
    this.structure.push({x:0,y:0,z:0})
    this.structure.push({x:1,y:0,z:0})
    this.structure.push({x:2,y:0,z:0})
    this.structure.push({x:3,y:0,z:0})
    this.structure.push({x:4,y:0,z:0})
    this.structure.push({x:5,y:0,z:0})
    this.structure.push({x:6,y:0,z:0})

    this.structure.push({x:6,y:10,z:0})
    this.structure.push({x:6,y:10,z:5})
    this.structure.push({x:8,y:3,z:5})
*/
}
