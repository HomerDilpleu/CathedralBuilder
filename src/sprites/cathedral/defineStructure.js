//////////////////////
// Define the structure of the cathedral
// and the order the stones must will be
// built
//////////////////////
game.sprites.cathedral.defineStructure = function() {

    let choir = [[22,22,0,24],[22,38,0,0],[22,38,24,24],[38,38,0,24]]

    let structure = [   
                        // 120
                        [[26,34,0,6],[26,27,7,20],[28,28,17,20],[29,29,18,20],[30,30,19,20],[31,31,18,20],[32,32,17,20],[33,34,7,20]],
                        // 119
                        [[25,25,0,21],[26,34,0,0],[26,34,21,21],[35,35,0,21]],
                        // 118
                        [[24,24,0,22],[24,36,0,0],[24,36,22,22],[36,36,0,22]],
                        // 117
                        [[23,23,0,23],[23,37,0,0],[23,37,23,23],[37,37,0,23]],
                        // 116
                        choir,
                        // 115
                        choir,
                        // 114
                        choir,
                        // 113
                        choir
                    ]

    let z = 120

    // Iterate on structure array
    for (let i=0;i<=structure.length-1;i+=1) {
        for (let j=0;j<=structure[i].length-1;j+=1) {
            // Draw wall
            let wall = structure[i][j]
            for (let y=wall[2];y<=wall[3];y+=1) {
                for (let x=wall[0];x<=wall[1];x+=1) {
                    this.structure.push({x:x,y:y,z:z})
                }
            }
        }
        z-=1
    }
   

}
