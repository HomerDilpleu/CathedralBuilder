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
    let endOfChor = [[20,40,0,0],[20,22,1,13],[21,22,14,14],[22,22,15,19],[23,23,20,20],[24,24,21,21],[25,25,22,22],[26,26,23,23],[27,27,24,24],[28,28,25,25],[29,31,25,33],[32,32,25,25],[33,33,24,24],[34,34,23,23],[35,35,22,22],[36,36,21,21],[37,37,20,20],[38,38,1,19],[39,39,1,15],[40,40,1,14]]
    let navePilar =  [[11,49,0,0],[11,12,1,13],[12,12,14,14],[13,14,1,19],[11,15,20,20],[12,15,21,21],[13,15,22,22],[14,16,23,23],[15,16,24,33],[16,16,24,34],[17,17,25,26],[17,17,34,35],[18,18,26,27],[18,18,35,36],[19,19,25,28],[19,19,36,37],[20,20,23,29],[20,20,37,38],[21,21,20,30],[21,21,38,39],[22,22,1,42],[21,21,43,43],[22,22,43,44],[23,23,1,45],[24,24,38,46],[25,25,42,47],[26,26,45,48],[27,27,47,49],[28,28,49,50],[29,29,50,51],[30,30,51,52],[31,31,50,51],[32,32,49,50],[33,33,47,49],[34,34,45,48],[35,35,42,47],[36,36,38,46],[37,37,1,45],[38,38,1,44],[39,39,20,30],[39,39,38,39],[39,39,43,43],[40,40,23,29],[40,40,37,38],[41,41,25,28],[41,41,36,37],[42,42,26,27],[42,42,35,36],[43,43,25,26],[43,43,34,35],[44,44,23,34],[45,45,20,33],[46,46,1,23],[47,47,1,22],[48,48,1,14],[48,48,20,21],[49,49,1,13],[49,49,20,20]]
    let nave = [[13,47,0,0],[11,11,20,20],[12,12,20,21],[13,13,1,22],[14,14,22,23],[15,15,23,24],[16,16,24,25],[17,17,25,26],[18,18,26,27],[19,19,27,28],[20,20,28,29],[21,21,29,30],[21,21,43,43],[22,22,30,44],[23,23,44,45],[24,24,45,46],[25,25,46,47],[26,26,47,48],[27,27,48,49],[28,28,49,50],[29,29,50,51],[30,30,51,52],[31,31,50,51],[32,32,49,50],[33,33,48,49],[34,34,47,48],[35,35,46,47],[36,36,45,46],[37,37,44,45],[38,38,30,44],[39,39,43,43],[39,39,29,30],[40,40,28,29],[41,41,27,28],[42,42,26,27],[43,43,25,26],[44,44,24,25],[45,45,23,24],[46,46,22,23],[47,47,1,22],[48,48,20,21],[49,49,20,20]]
    
    let structure = [   [[26,34,0,6],[26,27,7,19],[27,27,20,20],[28,28,17,21],[29,29,18,22],[30,30,19,23],[31,31,18,22],[32,32,17,21],[33,34,7,19],[33,33,20,20]],
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
                        endOfChor,
                        // 111
                        endOfChor,
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
                        arch(16,44,19).concat([[29,31,39,40]]),
                        // 104
                        arch(15,45,19).concat([[29,31,40,41]]),
                        // 103
                        navePilar,
                        // 104
                        navePilar,
                        // 103
                        nave,nave,nave,nave,nave,nave,
                        navePilar,navePilar,
                        nave,nave,nave,nave,nave,nave,
                        navePilar,navePilar,
                        nave,nave,nave,nave,nave,nave,
                        navePilar,navePilar,
                        nave,nave,nave,nave,nave,nave,
                        navePilar,navePilar,
                        nave,nave,nave,nave,nave,nave,
                        navePilar,navePilar,
                        nave,nave,nave,nave,nave,nave,
                        navePilar,navePilar,
                        nave,nave,nave,nave,nave,nave,
                        navePilar,navePilar,
                        nave,nave,nave,nave,nave,nave,
                        navePilar,navePilar,
                        nave,nave,nave,nave,nave,nave,
                        navePilar,navePilar,
                        nave,nave,nave,nave,nave,nave,
                        navePilar,navePilar,
                        nave,nave,nave,nave,nave,nave,
                        navePilar,navePilar,
                        nave,nave,nave,nave,nave,nave
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
