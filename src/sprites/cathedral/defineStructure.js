//////////////////////
// Define the structure of the cathedral
// and the order the stones must will be
// built
//////////////////////

game.sprites.cathedral.arch = function(xStart,xEnd,height) {
    let r = []
    let y = height
    // Ground
    r.push([xStart,xEnd,0,0])
    // Left wall
    r.push([xStart,xStart,1,height])
    // arch
    for (let x=xStart+1;x<xEnd;x+=1) {
        if(x<=xEnd-(xEnd-xStart)/2) {
            y+=1
        } else {y-=1}
        r.push([x,x,y,y])
    }
    // Right wall
    r.push([xEnd,xEnd,1,height])
    return r
}



game.sprites.cathedral.defineStructure = function() {

    let arch = game.sprites.cathedral.arch

    let structure = [   
                        // 120
                        [[26,34,0,6],[26,27,7,19],[27,27,20,20],[28,28,17,21],[29,29,18,22],[30,30,19,23],[31,31,18,22],[32,32,17,21],[33,34,7,19],[33,33,20,20]],
                        // 119
                        arch(25,35,19),
                        // 118
                        arch(24,36,19),
                        // 117
                        arch(23,37,19),
                        // 116
                        arch(22,38,19),
                        // 115
                        arch(22,38,19),
                        // 114
                        arch(22,38,19),
                        // 113
                        arch(22,38,19),
                        // 112
                        [[20,40,0,0],[20,22,1,13],[21,22,14,14],[22,22,15,19],[23,23,20,20],[24,24,21,21],[25,25,22,22],[26,26,23,23],[27,27,24,24],[28,28,25,25],[29,31,25,33],[32,32,25,25],[33,33,24,24],[34,34,23,23],[35,35,22,22],[36,36,21,21],[37,37,20,20],[38,38,1,19],[39,39,1,15],[40,40,1,14]],
                        // 111
                        [[20,40,0,0],[20,22,1,13],[21,22,14,14],[22,22,15,19],[23,23,20,20],[24,24,21,21],[25,25,22,22],[26,26,23,23],[27,27,24,24],[28,28,25,25],[29,31,25,33],[32,32,25,25],[33,33,24,24],[34,34,23,23],[35,35,22,22],[36,36,21,21],[37,37,20,20],[38,38,1,19],[39,39,1,15],[40,40,1,14]],
                        // 110
                        arch(21,39,19).concat([[29,31,34,35]]),
                        // 109
                        arch(20,40,19).concat([[29,31,35,36]]),
                        // 108
                        arch(19,41,19).concat([[29,31,36,37]]),
                        // 107
                        arch(18,42,19).concat([[29,31,37,38]]),
                        // 106
                        arch(17,43,19).concat([[29,31,38,39]]),
                        // 105
                        arch(16,44,19).concat([[29,31,39,40]])
                    ]

    let z = 120

    // Iterate on structure array
    for (let i=0;i<=structure.length-1;i+=1) {
        for (let j=0;j<=structure[i].length-1;j+=1) {
            // Draw wall
            let wall = structure[i][j]
            for (let y=wall[2];y<=wall[3];y+=1) {
                for (let x=wall[0];x<=wall[1];x+=1) {
                    this.structure.push({x:x,y:y,z:z,type:wall[4]})
                }
            }
        }
        z-=1
    }
   

}
