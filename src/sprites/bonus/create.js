game.sprites.bonus.create = function(type,nb) {

    // Shortcuts
    let u = game.utils

    let bonus = this.cloneCreate()
    //bonus.color = u.getRandomItem(['red','blue','green'])
    bonus.color = u.getRandomItem(['red','blue'])
    bonus.xSpeed = u.getRandomNumber(1,3)
    bonus.ySpeed = u.getRandomNumber(1,3)
    bonus.x = u.getRandomInteger(600,1000)
    bonus.y = 200
    bonus.type = type
    bonus.nb = nb
    bonus.text = type
}
