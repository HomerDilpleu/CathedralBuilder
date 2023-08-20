//////////////////////
// Define the structure of the cathedral
// and the order the stones must will be
// built
//////////////////////
game.sprites.cathedral.defineStructure = function() {
/*
for (let x = 0; x<=this.size.x; x+=1) {
    for (let y = this.size.y; y>0; y-=1) {
        for (let z = this.size.z; z>0; z-=1) {
            this.structure.push({x:x,y:y,z:z})
        }
    }
}
*/

 /*
    // ground
    for (let x = 0; x<=this.size.x; x+=1) {
        for (let z = this.size.x; z>0; z-=1) {
            this.structure.push({x:x,y:0,z:z})
        }
    }

    // left tower back
    for (let x = 0; x <15; x+=1) {
        for (let y = this.size.y+100; y>=0; y-=1) {
            this.structure.push({x:x,y:y,z:60})
        }
    }

    // right tower back
    for (let x = 40; x <55; x+=1) {
        for (let y = this.size.y; y>=0; y-=1) {
            this.structure.push({x:x,y:y,z:60})
        }
    }
*/
    // left tower
    for (let x = 0; x <15; x+=1) {
        for (let y = 0; y<=this.size.y; y+=1) {
            this.structure.push({x:x,y:y,z:0})
        }
    }

    // facade
    for (let x = 15; x <40; x+=1) {
        for (let y = 0; y<=30; y+=1) {
            this.structure.push({x:x,y:y,z:1})
        }
    }

    // right tower
    for (let x = 40; x <55; x+=1) {
        for (let y = 0; y<=this.size.y; y+=1) {
            this.structure.push({x:x,y:y,z:0})
        }
    }


}
