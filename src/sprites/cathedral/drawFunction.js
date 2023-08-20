game.sprites.cathedral.drawFunction = function (ctx) {

    for (let stone of this.structure) {
        this.drawStone(ctx,stone)
    }

/*
    for (let x = 0; x<=80; x+=1) {
        for (let z = 60; z>0; z-=1) {
            this.drawStone(ctx,{x:x,y:0,z:z})
        }
        //this.drawStone(ctx,{x:x,y:0,z:60})
        //this.drawStone(ctx,{x:x,y:1,z:60})
        //this.drawStone(ctx,{x:x,y:2,z:60})
    }
*/

/*

    this.drawStone(ctx,{x:0,y:0,z:1})
    this.drawStone(ctx,{x:1,y:0,z:1})
    this.drawStone(ctx,{x:2,y:0,z:1})
    this.drawStone(ctx,{x:3,y:0,z:1})
    this.drawStone(ctx,{x:4,y:0,z:1})
    this.drawStone(ctx,{x:5,y:0,z:1})
    this.drawStone(ctx,{x:6,y:0,z:1})


    this.drawStone(ctx,{x:0,y:0,z:0})
    this.drawStone(ctx,{x:1,y:0,z:0})
    this.drawStone(ctx,{x:2,y:0,z:0})
    this.drawStone(ctx,{x:3,y:0,z:0})
    this.drawStone(ctx,{x:4,y:0,z:0})
    this.drawStone(ctx,{x:5,y:0,z:0})
    this.drawStone(ctx,{x:6,y:0,z:0})
*/
/*
    game.engine3D.cube.frontStyle.lineWidth = 1
    game.engine3D.cube.topStyle.lineWidth = 1
    game.engine3D.cube.bottomStyle.lineWidth = 1
    game.engine3D.cube.leftStyle.lineWidth = 1
    game.engine3D.cube.rightStyle.lineWidth = 1

    game.engine3D.cube.size = {x:10, y:10, z:0.5}
    game.engine3D.cube.position = {x:200, y:600, z:0}

    for (let curZ = 60; curZ>=0; curZ-=3) {
        game.engine3D.cube.position.z = curZ
        game.engine3D.cube.draw(ctx)
    }

    game.engine3D.cube.size = {x:10, y:10, z:0.5}
    game.engine3D.cube.position = {x:300, y:600, z:0}

    for (let curZ = 60; curZ>=0; curZ-=3) {
        game.engine3D.cube.position.z = curZ
        game.engine3D.cube.draw(ctx)
    }

*/

    

    

}
