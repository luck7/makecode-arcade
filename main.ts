controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.baDing.play()
    mySprite.startEffect(effects.spray, 500)
})
let mySprite: Sprite = null
game.splash("Flashing Heart")
mySprite = sprites.create(img`
    ....ffffff.........ccc..
    ....ff22ccf.......cc4f..
    .....ffccccfff...cc44f..
    ....cc24442222cccc442f..
    ...c9b4422222222cc422f..
    ..c9999b222222222222fc..
    .c2b991119222222222c22c.
    c2222b11992222ccccccc22f
    f222222222222c222ccfffff
    .f2222222222444222f.....
    ..ff2222222cf444222f....
    ....ffffffffff444222c...
    .........f2cfffc2222c...
    .........fcc2ffffffff...
    ..........fc2ffff.......
    ...........fffff........
    `, SpriteKind.Player)
