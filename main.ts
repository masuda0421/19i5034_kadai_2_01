namespace SpriteKind {
    export const Item = SpriteKind.create()
    export const block1 = SpriteKind.create()
    export const fire = SpriteKind.create()
}
/**
 * ・音が足りなかったので、数値入力し自分で作った。
 * 
 * ・ばねでより高く飛べるようにした。
 * 
 * ・火の球が浮かぶようにした。
 * 
 * ・コインにアニメーションをつけた。
 * 
 * ・ブロックを頭突きで破壊できるようにした。
 * 
 * ・土管に入ると別ステージに行ける。
 * 
 * ・別ステージでは違うBGMが流れるようにした。
 * 
 * ・BGMはマリオの地上と地下を借りました。
 * 
 * 敵にアニメーションをつけたものの、壁に当たった際に向きを変えることができなかった。どうやってやるの？どうしてもムーンウォークします。なぜ？
 */
// コインに当たった時の処理
sprites.onOverlap(SpriteKind.Player, SpriteKind.Item, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    info.changeScoreBy(10)
    music.baDing.play()
})
// 右向きの歩行アニメ
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f . . . 
        . . f f e e e e e f . . 
        . f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f f 
        . f 4 d 4 d d d d f f . 
        . f f f 4 d d b b f . . 
        . . f e e 4 4 4 e f . . 
        . . 4 d d e 1 1 1 f . . 
        . . e d d e 1 1 1 f . . 
        . . f e e f 6 6 6 f . . 
        . . . f f f f f f . . . 
        . . . . f f f . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e e f . . 
        f f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f . 
        . f 4 d 4 d d d d f . . 
        . f f f e e d b b f . . 
        . . f 4 d d e 4 e f . . 
        . . f e d d e 1 1 f . . 
        . f f f e e f 6 6 f f . 
        . f f f f f f f f f f . 
        . . f f . . . f f f . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e e f . . 
        f f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f . 
        f f 4 d 4 d d d d f . . 
        . f f f 4 d d b b f . . 
        . 4 d d e 4 4 4 e f . . 
        . e d d e 1 1 1 1 f . . 
        . f e e f 6 6 6 6 f f . 
        . f f f f f f f f f f . 
        . . f f . . . f f f . . 
        `],
    100,
    true
    )
})
function BGM12 () {
    music.playTone(370, music.beat(BeatFraction.Eighth))
    music.playTone(370, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(370, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(370, music.beat(BeatFraction.Eighth))
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    if (stage == 0 || stage == 2) {
        BGM112()
    }
    if (stage == 0 || stage == 2) {
        BGM112()
    }
    if (stage == 0 || stage == 2) {
        BGM112()
    }
    if (stage == 0 || stage == 2) {
        BGM112()
    }
}
// ゴール！
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    game.over(true)
})
// ホッピング台でジャンプ
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    mySprite.vy = -200
})
function BGM11 () {
    music.playTone(659, music.beat(BeatFraction.Eighth))
    music.playTone(659, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(659, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(523, music.beat(BeatFraction.Eighth))
    music.playTone(659, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    if (stage == 0 || stage == 2) {
        BGM111()
    }
    if (stage == 0 || stage == 2) {
        BGM111()
    }
    if (stage == 0 || stage == 2) {
        BGM111()
    }
    if (stage == 0 || stage == 2) {
        BGM111()
    }
}
// 土管2に入るときの処理
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    if (controller.up.isPressed()) {
        for (let 値 of sprites.allOfKind(SpriteKind.Enemy)) {
            値.destroy()
        }
        for (let 値 of sprites.allOfKind(SpriteKind.Item)) {
            値.destroy()
        }
        for (let 値 of sprites.allOfKind(SpriteKind.fire)) {
            値.destroy()
        }
        stage += 1
        music.stopAllSounds()
        StageSet()
    }
})
// 歩行アニメーション終了
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
// 火の球に当たった時の処理
sprites.onOverlap(SpriteKind.Player, SpriteKind.fire, function (sprite, otherSprite) {
    music.bigCrash.play()
    info.changeLifeBy(-1)
    pause(1000)
})
// 壊せるブロックの処理
sprites.onOverlap(SpriteKind.Player, SpriteKind.block1, function (sprite, otherSprite) {
    if (mySprite.overlapsWith(block1)) {
        tiles.setWallAt(tiles.getTileLocation(11, 2), false)
    } else if (mySprite.overlapsWith(block2)) {
        tiles.setWallAt(tiles.getTileLocation(12, 2), false)
    } else if (mySprite.overlapsWith(block3)) {
        tiles.setWallAt(tiles.getTileLocation(5, 6), false)
    } else {
        tiles.setWallAt(tiles.getTileLocation(26, 6), false)
    }
    otherSprite.destroy(effects.disintegrate, 200)
    music.smallCrash.play()
    info.changeScoreBy(5)
})
function BGM112 () {
    music.playTone(330, music.beat(BeatFraction.Triplet))
    music.playTone(330, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(277, music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    music.playTone(392, music.beat(BeatFraction.Sixteenth))
    music.playTone(494, music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Eighth))
    music.playTone(494, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Eighth))
    music.playTone(277, music.beat(BeatFraction.Triplet))
}
// 壊せるブロック
function Block1 () {
    block1 = sprites.create(img`
        . . 5 5 5 5 5 d e e e e e e e . 
        . . 5 5 5 5 5 d e e e e e e e . 
        . . 5 5 5 5 5 d e e e e e e e . 
        . . d d d d d d d d d d d d d . 
        . . e d e e e e e e e d e e e . 
        . . c d b e e e e e e d e e e . 
        . . c d b b b e e e e d b b e . 
        . . d d d d d d d d d d d d d . 
        . . e e e e e d e e e e e e e . 
        . . e e e e e d c b e e e e e . 
        . . b e e e e d c c c e e e e . 
        . . d d d d d d d d d d d d d . 
        . . e c d c e e e e e d 5 5 5 . 
        . . c c d c e e e e e d b 5 5 . 
        . . c c d b c e e e e d b c 5 . 
        . . d d d d d d d d d d d d d . 
        `, SpriteKind.block1)
    block1.setPosition(182, 45)
    tiles.setWallAt(tiles.getTileLocation(11, 2), true)
    block2 = sprites.create(img`
        . . 5 5 5 5 5 d e e e e e e e . 
        . . 5 5 5 5 5 d e e e e e e e . 
        . . 5 5 5 5 5 d e e e e e e e . 
        . . d d d d d d d d d d d d d . 
        . . e d e e e e e e e d e e e . 
        . . c d b e e e e e e d e e e . 
        . . c d b b b e e e e d b b e . 
        . . d d d d d d d d d d d d d . 
        . . e e e e e d e e e e e e e . 
        . . e e e e e d c b e e e e e . 
        . . b e e e e d c c c e e e e . 
        . . d d d d d d d d d d d d d . 
        . . e c d c e e e e e d 5 5 5 . 
        . . c c d c e e e e e d b 5 5 . 
        . . c c d b c e e e e d b c 5 . 
        . . d d d d d d d d d d d d d . 
        `, SpriteKind.block1)
    block2.setPosition(193, 45)
    tiles.setWallAt(tiles.getTileLocation(12, 2), true)
    block3 = sprites.create(img`
        5 5 5 5 5 e e d e e e e e e b b 
        5 5 e e e e e d e e e e e e b e 
        5 5 e e e e e d e e e e e e b b 
        d d d d d d d d d d d d d d d d 
        e e e d e e e e e e e d e e e e 
        e e c d b e e e e e e d e e e e 
        e e c d b b b e e e e d b b e e 
        d d d d d d d d d d d d d d d d 
        e e e e e e e d e e e e e e e e 
        e b e e e e e d c b e e e e b b 
        e b b b e e e d c c c e e e b b 
        d d d d d d d d d d d d d d d d 
        e e e c d c e e e e e d 5 5 5 e 
        e b c c d c e e e e e d b 5 5 e 
        b b c c d b c e e e e d b c 5 b 
        d d d d d d d d d d d d d d d d 
        `, SpriteKind.block1)
    block3.setPosition(87, 107)
    tiles.setWallAt(tiles.getTileLocation(5, 6), true)
    block4 = sprites.create(img`
        . . 5 5 5 5 5 d e e e e e e e . 
        . . 5 5 5 5 5 d e e e e e e e . 
        . . 5 5 5 5 5 d e e e e e e e . 
        . . d d d d d d d d d d d d d . 
        . . e d e e e e e e e d e e e . 
        . . c d b e e e e e e d e e e . 
        . . c d b b b e e e e d b b e . 
        . . d d d d d d d d d d d d d . 
        . . e e e e e d e e e e e e e . 
        . . e e e e e d c b e e e e e . 
        . . b e e e e d c c c e e e e . 
        . . d d d d d d d d d d d d d . 
        . . e c d c e e e e e d 5 5 5 . 
        . . c c d c e e e e e d b 5 5 . 
        . . c c d b c e e e e d b c 5 . 
        . . d d d d d d d d d d d d d . 
        `, SpriteKind.block1)
    block4.setPosition(420, 107)
    tiles.setWallAt(tiles.getTileLocation(26, 6), true)
}
// 左向きの歩行アニメ
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . f f f f f . . . . 
        . . f e e e e e f f . . 
        . f e e e e e e e f f . 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        f f e 4 4 f f 4 e 4 f f 
        . f f d d d d 4 d 4 f . 
        . . f b b d d 4 f f f . 
        . . f e 4 4 4 e e f . . 
        . . f 1 1 1 e d d 4 . . 
        . . f 1 1 1 e d d e . . 
        . . f 6 6 6 f e e f . . 
        . . . f f f f f f . . . 
        . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . . f e e e e e f f f . 
        . f e e e e e e e f f f 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        . f e 4 4 f f 4 e 4 f f 
        . . f d d d d 4 d 4 f . 
        . . f b b d e e f f f . 
        . . f e 4 e d d 4 f . . 
        . . f 1 1 e d d e f . . 
        . f f 6 6 f e e f f f . 
        . f f f f f f f f f f . 
        . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . . f e e e e e f f f . 
        . f e e e e e e e f f f 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        . f e 4 4 f f 4 e 4 f f 
        . . f d d d d 4 d 4 f f 
        . . f b b d d 4 f f f . 
        . . f e 4 4 4 e d d 4 . 
        . . f 1 1 1 1 e d d e . 
        . f f 6 6 6 6 f e e f . 
        . f f f f f f f f f f . 
        . . f f f . . . f f . . 
        `],
    100,
    true
    )
})
function BGM22 () {
    music.playTone(131, music.beat(BeatFraction.Sixteenth))
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    // 低い低いラ
    music.playTone(110, music.beat(BeatFraction.Sixteenth))
    music.playTone(220, music.beat(BeatFraction.Sixteenth))
    // 低い低いシ#
    music.playTone(117, music.beat(BeatFraction.Sixteenth))
    music.playTone(233, music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(131, music.beat(BeatFraction.Sixteenth))
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    // 低い低いラ
    music.playTone(110, music.beat(BeatFraction.Sixteenth))
    music.playTone(220, music.beat(BeatFraction.Sixteenth))
    // 低い低いシb
    music.playTone(117, music.beat(BeatFraction.Sixteenth))
    music.playTone(233, music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Quarter))
    // 低い低いファ
    music.playTone(88, music.beat(BeatFraction.Sixteenth))
    music.playTone(175, music.beat(BeatFraction.Sixteenth))
    // 低い低いレ
    music.playTone(74, music.beat(BeatFraction.Sixteenth))
    music.playTone(147, music.beat(BeatFraction.Sixteenth))
    // 低い低いミｂ
    music.playTone(78, music.beat(BeatFraction.Sixteenth))
    music.playTone(156, music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Quarter))
    // 低い低いファ
    music.playTone(88, music.beat(BeatFraction.Sixteenth))
    music.playTone(175, music.beat(BeatFraction.Sixteenth))
    // 低い低いレ
    music.playTone(74, music.beat(BeatFraction.Sixteenth))
    music.playTone(147, music.beat(BeatFraction.Sixteenth))
    // 低い低いミｂ
    music.playTone(78, music.beat(BeatFraction.Sixteenth))
    music.playTone(156, music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(156, music.beat(BeatFraction.Sixteenth))
    music.playTone(147, music.beat(BeatFraction.Sixteenth))
    music.playTone(139, music.beat(BeatFraction.Sixteenth))
    music.playTone(131, music.beat(BeatFraction.Eighth))
    music.playTone(156, music.beat(BeatFraction.Eighth))
    music.playTone(147, music.beat(BeatFraction.Eighth))
    // 低い低いラb
    music.playTone(104, music.beat(BeatFraction.Eighth))
    // 低い低いソ
    music.playTone(98, music.beat(BeatFraction.Eighth))
    music.playTone(139, music.beat(BeatFraction.Eighth))
    music.playTone(131, music.beat(BeatFraction.Sixteenth))
    music.playTone(185, music.beat(BeatFraction.Sixteenth))
    music.playTone(175, music.beat(BeatFraction.Sixteenth))
    music.playTone(156, music.beat(BeatFraction.Sixteenth))
    music.playTone(233, music.beat(BeatFraction.Sixteenth))
    music.playTone(220, music.beat(BeatFraction.Sixteenth))
    music.playTone(208, music.beat(BeatFraction.Sixteenth))
    music.playTone(156, music.beat(BeatFraction.Sixteenth))
    // 低い低いシ
    music.playTone(124, music.beat(BeatFraction.Sixteenth))
    // 低い低いシb
    music.playTone(117, music.beat(BeatFraction.Sixteenth))
    // 低い低いラ
    music.playTone(110, music.beat(BeatFraction.Sixteenth))
    // 低い低いラb
    music.playTone(104, music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
}
function BGM111 () {
    music.playTone(523, music.beat(BeatFraction.Triplet))
    music.playTone(392, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(466, music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.setTempo(25)
    music.playTone(392, music.beat(BeatFraction.Sixteenth))
    music.playTone(659, music.beat(BeatFraction.Sixteenth))
    music.playTone(784, music.beat(BeatFraction.Sixteenth))
    music.setTempo(50)
    music.playTone(880, music.beat(BeatFraction.Quarter))
    music.playTone(698, music.beat(BeatFraction.Eighth))
    music.playTone(784, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(659, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(494, music.beat(BeatFraction.Triplet))
}
// コイン
function ItemSet () {
    for (let 値 of tiles.getTilesByType(sprites.dungeon.collectibleRedCrystal)) {
        coin = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.Item)
        animation.runImageAnimation(
        coin,
        [img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `,img`
            . . b b b . . . 
            . b 5 5 5 b . . 
            b 5 d 3 d 5 b . 
            b 5 3 5 1 5 b . 
            c 5 3 5 1 d c . 
            c 5 d 1 d d c . 
            . f d d d f . . 
            . . f f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 d 1 5 b . 
            . b 5 3 1 5 b . 
            . c 5 3 1 d c . 
            . c 5 1 d d c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . . b 1 1 b . . 
            . . b 5 5 b . . 
            . . b d d b . . 
            . . c d d c . . 
            . . c 3 3 c . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 1 d 5 b . 
            . b 5 1 3 5 b . 
            . c d 1 3 5 c . 
            . c d d 1 5 c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b b . . 
            . . b 5 5 5 b . 
            . b 5 d 3 d 5 b 
            . b 5 1 5 3 5 b 
            . c d 1 5 3 5 c 
            . c d d 1 d 5 c 
            . . f d d d f . 
            . . . f f f . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(coin, 値)
        tiles.setTileAt(値, assets.tile`transparency16`)
    }
}
// 歩行アニメーション終了
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
function BGM13 () {
    music.playTone(147, music.beat(BeatFraction.Eighth))
    music.playTone(147, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(147, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(147, music.beat(BeatFraction.Eighth))
    music.playTone(147, music.beat(BeatFraction.Quarter))
    music.playTone(196, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(196, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    if (stage == 0 || stage == 2) {
        BGM113()
    }
    if (stage == 0 || stage == 2) {
        BGM113()
    }
    if (stage == 0 || stage == 2) {
        BGM113()
    }
    if (stage == 0 || stage == 2) {
        BGM113()
    }
}
// 敵！
function EnemySet () {
    for (let 値 of tiles.getTilesByType(sprites.castle.tileGrass1)) {
        Enemy1 = sprites.create(img`
            . . . . . . . . b b b b . . . . 
            . . . . b b b b 3 3 3 3 b . . . 
            . c c b b 1 1 3 3 3 3 3 b b . . 
            c c 3 3 1 1 3 3 3 3 3 1 1 b . . 
            c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
            f b b c c c 3 3 3 3 3 3 3 c . . 
            f b c c c b b b b 3 3 3 3 3 c . 
            f b c c d d d d d b b 3 3 3 3 c 
            . c c d c d d d d d d b c 3 3 c 
            . c b d c d d d c d d c c c 3 f 
            . f d d d d d c d d d c c c b f 
            . f d b b b d d d d d c c c b f 
            . . c d d d d d d d b c b b f f 
            . . f f d d d d c c b f f f f . 
            . f f b b f f c c b d d b f . . 
            . f b b b f f . . b d d d f . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(Enemy1, 値)
        tiles.setTileAt(値, assets.tile`transparency16`)
        Enemy1.vx = -30
        animation.runImageAnimation(
        Enemy1,
        [img`
            . . . . . . . . b b b b . . . . 
            . . . . b b b b 3 3 3 3 b . . . 
            . c c b b 1 1 3 3 3 3 3 b b . . 
            c c b 3 1 1 3 3 3 3 3 1 1 b . . 
            c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
            f b b c c c c b 3 3 3 3 3 c . . 
            f b c c c d d d b b 3 3 3 3 c . 
            f b c b d d d d d d b b 3 3 b c 
            . c b d c d d d d d d b c 3 3 c 
            . c d d c d d d c d d c c c 3 f 
            . f d d d d d c d d d c c c b f 
            . f d b b b d d b f f c c c b f 
            . . c d d d d b d d b f b b f f 
            . . . c d d d b b d d f f f f . 
            . . . f f b b f b b b b . . . . 
            . . . f b b b f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b b b b . . . . 
            . . . . b b b b 3 3 3 3 b . . . 
            . c c b b 1 1 3 3 3 3 3 b b . . 
            c c c 3 1 1 1 3 3 3 3 1 1 b . . 
            c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
            f b b c c c c b b 3 3 1 1 c . . 
            f b c c b d d d d b b 3 3 c c . 
            f b c d d d d d d d b b 3 3 b c 
            . c d d c d d d d d d b b 3 3 c 
            . c d d c d d d c d d b c 3 3 f 
            . f d d d d d c d d d c c c b f 
            . f d b b b b f f d d c c c b f 
            . . c d d b d d b f c c b b f f 
            . . . c d b b d d f c c f f f . 
            . . . . c f b b b b . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b b b b . . . . 
            . . . . b b b b 3 3 3 3 b . . . 
            . c c b 1 1 3 3 3 3 3 3 b b . . 
            c c c 3 1 1 1 3 3 3 3 3 3 b . . 
            c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
            f b b c c c c b 3 3 3 1 1 c . . 
            f b c c c d d d b b 3 3 3 c c . 
            f b c b d d d d d d b b 3 3 b c 
            . c b d d d d d d d d b c 3 3 c 
            . c d c c d d d d d d c c c 3 f 
            . f d d d d d c c d d c c c b f 
            . f d b b b d d d d d c c c b f 
            . . c d d d d d b f f c b b f f 
            . . f b d d d b b d d f f f f . 
            . . f f f c c b d d d f . . . . 
            `,img`
            . . . . . . . . b b b b . . . . 
            . . . . b b b b 3 3 3 3 b . . . 
            . c c b b 1 1 3 3 3 3 3 b b . . 
            c c 3 3 1 1 3 3 3 3 3 1 1 b . . 
            c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
            f b b c c c 3 3 3 3 3 3 3 c . . 
            f b c c c b b b b 3 3 3 3 3 c . 
            f b c c d d d d d b b 3 3 3 3 c 
            . c c d c d d d d d d b c 3 3 c 
            . c b d c d d d c d d c c c 3 f 
            . f d d d d d c d d d c c c b f 
            . f d b b b d d d d d c c c b f 
            . . c d d d d d d d b c b b f f 
            . . f f d d d d c c b f f f f . 
            . f f b b f f c c b d d b f . . 
            . f b b b f f . . b d d d f . . 
            `],
        100,
        true
        )
        Enemy1.setFlag(SpriteFlag.BounceOnWall, true)
    }
    if (stage == 1) {
        for (let 値 of tiles.getTilesByType(sprites.castle.tileDarkGrass2)) {
            Enemy2 = sprites.create(img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .......fb111111bf.......
                ......fffcdb1bdffff.....
                ....fc111cbfbfc111cf....
                ....f1b1b1ffff1b1b1f....
                ....fbfbffffffbfbfbf....
                .........ffffff.........
                ...........fff..........
                ........................
                ........................
                ........................
                ........................
                `, SpriteKind.Enemy)
            tiles.placeOnTile(Enemy2, 値)
            tiles.setTileAt(値, assets.tile`transparency16`)
            animation.runImageAnimation(
            Enemy2,
            [img`
                ........................
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .....fffc1111111f.......
                ...fc111cd1111111f......
                ...f1b1b1b1111dddf......
                ...fbfbffcf11fcddf......
                ......fcf111111bbf......
                .......ccbdb1b1fcf......
                .......fffbfbfdff.......
                ........ffffffff........
                ........fffffffffff.....
                .........fffffc111cf....
                .........fffff1b1b1f....
                ..........ffffbfbfbf....
                ...........ffff.........
                ........................
                ........................
                ........................
                `,img`
                ........................
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ....7.fd11111111df......
                ...7..fd11111111df......
                ...7..fd11111111df......
                ...7..fddd1111dddff.....
                ...77.fbdbfddfbdbfcf....
                ...777fcdcf11fcdcfbf....
                ....77fffbdb1bdffcf.....
                ....fcb1bcffffff........
                ....f1c1c1ffffff........
                ....fdfdfdfffff.........
                .....f.f.f..............
                ........................
                ........................
                ........................
                `,img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd111111111f......
                ......fd11111111df......
                ......fd11111111df......
                ......fcdd1111ddcff.....
                .......fbcf11fcbfbbf....
                .......ffbdb1bdffff.....
                ........fcbfbfdf........
                ........ffffffff........
                ......ffffffffff........
                .....fcb1bcffff.........
                ......ffbff.............
                ........................
                ........................
                ........................
                ........................
                ........................
                `,img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fdd111111ddf......
                ......fbdd1111dddf......
                ......fcdbfddfbdbf......
                .......fbcf11fcbfff.....
                .......ffb1111bcfbcf....
                ........fcdb1bdfbbbf....
                .......ffffffffffcf.....
                .....fcb1bcfffff........
                .....f1b1b1ffff.........
                ......ffbff.............
                ........................
                ........................
                ........................
                ........................
                ........................
                `],
            100,
            true
            )
        }
    }
}
// Bダッシュ！
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 120, 0)
})
// Bダッシュ終了
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(mySprite, 70, 0)
})
// 火の球
function Dame () {
    for (let 値 of tiles.getTilesByType(assets.tile`myTile20`)) {
        fire1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 4 4 . . . . . . 
            . . . . . . 5 5 4 5 5 5 5 4 . . 
            . . . . . 5 5 4 4 4 4 4 2 4 . . 
            . . . . 5 5 4 2 2 2 8 5 4 5 . . 
            . . . . 5 4 2 2 2 8 2 2 4 4 . . 
            . . . 5 5 4 2 8 8 2 2 5 4 4 5 . 
            . . 5 5 4 4 2 8 2 4 2 4 4 5 . . 
            . . 5 5 4 2 2 8 8 2 2 4 5 5 . . 
            . . . 5 4 4 2 2 2 4 4 5 5 . . . 
            . . . . 5 4 2 4 4 4 4 5 . . . . 
            . . . . . 4 2 2 4 5 5 . . . . . 
            . . . . . 4 2 2 2 5 . . . . . . 
            . . . . . 4 4 4 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.fire)
        tiles.placeOnTile(fire1, 値)
        tiles.setTileAt(値, assets.tile`transparency16`)
        fire1.startEffect(effects.fire)
        animation.runMovementAnimation(
        fire1,
        "c 0 -120 0 120 0 0",
        2000,
        true
        )
    }
}
function BGM21 () {
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Sixteenth))
    music.playTone(220, music.beat(BeatFraction.Sixteenth))
    music.playTone(440, music.beat(BeatFraction.Sixteenth))
    music.playTone(233, music.beat(BeatFraction.Sixteenth))
    music.playTone(466, music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Sixteenth))
    music.playTone(220, music.beat(BeatFraction.Sixteenth))
    music.playTone(440, music.beat(BeatFraction.Sixteenth))
    music.playTone(233, music.beat(BeatFraction.Sixteenth))
    music.playTone(466, music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(175, music.beat(BeatFraction.Sixteenth))
    music.playTone(349, music.beat(BeatFraction.Sixteenth))
    music.playTone(147, music.beat(BeatFraction.Sixteenth))
    music.playTone(294, music.beat(BeatFraction.Sixteenth))
    music.playTone(156, music.beat(BeatFraction.Sixteenth))
    music.playTone(311, music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(175, music.beat(BeatFraction.Sixteenth))
    music.playTone(349, music.beat(BeatFraction.Sixteenth))
    music.playTone(147, music.beat(BeatFraction.Sixteenth))
    music.playTone(294, music.beat(BeatFraction.Sixteenth))
    music.playTone(156, music.beat(BeatFraction.Sixteenth))
    music.playTone(311, music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(311, music.beat(BeatFraction.Sixteenth))
    music.playTone(294, music.beat(BeatFraction.Sixteenth))
    music.playTone(277, music.beat(BeatFraction.Sixteenth))
    music.playTone(262, music.beat(BeatFraction.Eighth))
    music.playTone(311, music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Eighth))
    music.playTone(208, music.beat(BeatFraction.Eighth))
    music.playTone(196, music.beat(BeatFraction.Eighth))
    music.playTone(277, music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    music.playTone(370, music.beat(BeatFraction.Sixteenth))
    music.playTone(349, music.beat(BeatFraction.Sixteenth))
    music.playTone(330, music.beat(BeatFraction.Sixteenth))
    music.playTone(466, music.beat(BeatFraction.Sixteenth))
    music.playTone(440, music.beat(BeatFraction.Sixteenth))
    music.playTone(415, music.beat(BeatFraction.Sixteenth))
    music.playTone(311, music.beat(BeatFraction.Sixteenth))
    music.playTone(247, music.beat(BeatFraction.Sixteenth))
    music.playTone(233, music.beat(BeatFraction.Sixteenth))
    music.playTone(220, music.beat(BeatFraction.Sixteenth))
    music.playTone(208, music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
}
// マグマに落ちた時の処理
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    game.over(false, effects.melt)
})
// ステージについて
function StageSet () {
    if (stage == 0) {
        scene.setBackgroundImage(img`
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111199991111111111111111111111111111111111119999111111111111111111111111111111111111999911111111111111111111111111111111111199991111111111111111111
            1111111111199999999999111111111111111111111111111119999999999911111111111111111111111111111999999999991111111111111111111111111111199999999999111111111111111111
            1111111199999999999999111111111111111111111111119999999999999911111111111111111111111111999999999999991111111111111111111111111199999999999999111111111111111111
            1111119999999999999999111111111111111111111111999999999999999911111111111111111111111199999999999999991111111111111111111111119999999999999999111111111111111111
            1111199999999999999999111111111111111111111119999999999999999911111111111111111111111999999999999999991111111111111111111111199999999999999999111111111111111111
            1111199999999999999999111111111111111111111119999999999999999911111111111111111111111999999999999999991111111111111111111111199999999999999999111111111111111111
            1111999999999999999999911111111111111111111199999999999999999991111111111111111111119999999999999999999111111111111111111111999999999999999999911111111111111111
            1111999999999999999999911111111111111111111199999999999999999991111111111111111111119999999999999999999111111111111111111111999999999999999999911111111111111111
            1119999999999999999999911111199911111111111999999999999999999991111119991111111111199999999999999999999111111999111111111119999999999999999999911111199911111111
            1119999999999999999999911111999991111111111999999999999999999991111199999111111111199999999999999999999111119999911111111119999999999999999999911111999991111111
            1199999999999999999999911111999991111111119999999999999999999991111199999111111111999999999999999999999111119999911111111199999999999999999999911111999991111111
            1199999999999999999999911111999991111111119999999999999999999991111199999111111111999999999999999999999111119999911111111199999999999999999999911111999991111111
            1199999999999999999999911111999999111111119999999999999999999991111199999911111111999999999999999999999111119999991111111199999999999999999999911111999999111111
            1999999999999999999999911111999999111111199999999999999999999991111199999911111119999999999999999999999111119999991111111999999999999999999999911111999999111111
            1999999999999999999999911111999999111111199999999999999999999991111199999911111119999999999999999999999111119999991111111999999999999999999999911111999999111111
            1999999999999999999999911119999999111111199999999999999999999991111999999911111119999999999999999999999111199999991111111999999999999999999999911119999999111111
            9999999999999998999999911119999999111199999999999999999899999991111999999911119999999999999999989999999111199999991111999999999999999998999999911119999999111199
            9999999999999988999999911119999999119999999999999999998899999991111999999911999999999999999999889999999111199999991199999999999999999988999999911119999999119999
            9999999999999988999999911119999999919999999999999999998899999991111999999991999999999999999999889999999111199999999199999999999999999988999999911119999999919999
            9999999999999888899999911119999999999999999999999999988889999991111999999999999999999999999998888999999111199999999999999999999999999888899999911119999999999999
            9999999999988888999999999999999999999999999999999998888899999999999999999999999999999999999888889999999999999999999999999999999999988888999999999999999999999999
            9999999999999888999999999999999666666699999999999999988899999999999999966666669999999999999998889999999999999996666666999999999999999888999999999999999666666699
            9999999999998888899999999999966666666666999999999999888889999999999996666666666699999999999988888999999999999666666666669999999999998888899999999999966666666666
            6999999999998888888999999999666666666666699999999999888888899999999966666666666669999999999988888889999999996666666666666999999999998888888999999999666666666666
            6669999999988888899999999966666666666666666999999998888889999999996666666666666666699999999888888999999999666666666666666669999999988888899999999966666666666666
            6666999998888888889999999666666666666666666699999888888888999999966666666666666666669999988888888899999996666666666666666666999998888888889999999666666666666666
            6666699999988888888999996666666666666666666669999998888888899999666666666666666666666999999888888889999966666666666666666666699999988888888999996666666666666666
            6666669966888888899999966666666666666666666666996688888889999996666666666666666666666699668888888999999666666666666666666666669966888888899999966666666666666666
            6666666666668888889999668666666666666666666666666666888888999966866666666666666666666666666688888899996686666666666666666666666666668888889999668666666666666666
            6666666666888888888996668666666666666666666666666688888888899666866666666666666666666666668888888889966686666666666666666666666666888888888996668666666666666666
            6666666668888888888866688666666666666666666666666888888888886668866666666666666666666666688888888888666886666666666666666666666668888888888866688666666666666666
            6666666888888888886666668866666666666666666666688888888888666666886666666666666666666668888888888866666688666666666666666666666888888888886666668866666666666666
            6666666668888888886666688666666666666666666666666888888888666668866666666666666666666666688888888866666886666666666666666666666668888888886666688666666666666666
            6666666668888888666666888866666666666666666666666888888866666688886666666666666666666666688888886666668888666666666666666666666668888888666666888866666666666666
            6666666688988888888668888886666666666666666666668898888888866888888666666666666666666666889888888886688888866666666666666666666688988888888668888886666666666666
            6666666666888888888866688666666666668666666666666688888888886668866666666666866666666666668888888888666886666666666686666666666666888888888866688666666666668666
            6666666688888888888668888886666666668666666666668888888888866888888666666666866666666666888888888886688888866666666686666666666688888888888668888886666666668666
            6668666888888888888688888888666666688866666866688888888888868888888866666668886666686668888888888886888888886666666888666668666888888888888688888888666666688866
            6668866666888888888888888866666666668866666886666688888888888888886666666666886666688666668888888888888888666666666688666668866666888888888888888866666666668866
            6688666688888888888888888888666666688666668866668888888888888888888866666668866666886666888888888888888888886666666886666688666688888888888888888888666666688666
            6668866888888888888888888888866666888866666886688888888888888888888886666688886666688668888888888888888888888666668888666668866888888888888888888888866666888866
            6688888888888888888888888886666666688886668888888888888888888888888666666668888666888888888888888888888888866666666888866688888888888888888888888886666666688886
            6668888888888888888888888888866666888866666888888888888888888888888886666688886666688888888888888888888888888666668888666668888888888888888888888888866666888866
            6668888888888888888888888888886668888886666888888888888888888888888888666888888666688888888888888888888888888866688888866668888888888888888888888888886668888886
            6688888888888888888888888888666666888866668888888888888888888888888866666688886666888888888888888888888888886666668888666688888888888888888888888888666666888866
            6888888888888888888888888888886688888886688888888888888888888888888888668888888668888888888888888888888888888866888888866888888888888888888888888888886688888886
            6688888888888888888888888888888668888888668888888888888888888888888888866888888866888888888888888888888888888886688888886688888888888888888888888888888668888888
            6688888888888888888888888888886688888888668888888888888888888888888888668888888866888888888888888888888888888866888888886688888888888888888888888888886688888888
            8888888888888888888888888888888688888888888888888888888888888888888888868888888888888888888888888888888888888886888888888888888888888888888888888888888688888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            `)
        tiles.setTilemap(tilemap`レベル6`)
        mySprite = sprites.create(img`
            . . . . f f f f f . . . 
            . . f f e e e e e f . . 
            . f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f f 
            . f 4 d 4 d d d d f f . 
            . f f f 4 d d b b f . . 
            . . f e e 4 4 4 e f . . 
            . . 4 d d e 1 1 1 f . . 
            . . e d d e 1 1 1 f . . 
            . . f e e f 6 6 6 f . . 
            . . . f f f f f f . . . 
            . . . . f f f . . . . . 
            `, SpriteKind.Player)
        controller.moveSprite(mySprite, 70, 0)
        mySprite.ay = 400
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 8))
        scene.cameraFollowSprite(mySprite)
        EnemySet()
        Block1()
        ItemSet()
        Dame()
    } else if (stage == 1) {
        scene.setBackgroundImage(img`
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccbbbbbbbccccccccccccccccccccccccccbbbccccccccccccccccccccccccccccccccccccccccbbbbbccccccccccccccccccbbccccccccccccccccbbbbccccccccccccccccccccc
            ccbbbccccccccccccbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccbbbbbbbbbccccccccccccccccbbcccccccccccccccbbbbbbbbbbbbbccccccccccccb
            bbbbbbcccccccccccbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccbbbbbbbbbbbbbbcccccccccccbbbbbccccccccccccccbbbbbbbbbbbbbbbcccccccccbbb
            bbbbbbcccccccccccbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbbbbbbbbcccccccccbbbbbbccccccccccccccbbbbbbbbbbbbbbbccccccccbbbb
            bbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbcccccccbbbb
            bbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbccccbbbbb
            bbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbccccbbbbb
            bbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbccccbbbbb
            bbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddbbbbbddd
            bbbbbbbbddddddddbbbbbbbbbbbbbbbbddddddddddddddddddddddddbbbbbbbbbdddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddd
            bbbbbbdddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbdddddddddddddddddbbbbbbbbbbbbdddddbbbbbbbbbbbdddddddddddddddddddddddbbbbbbbbbddddddddddddddddddd
            bbbbbdddddddddddddddbbbbbbbbbbbddddddddddddddddddddddddddddbbbbdddddddddddddddddddbbbbbbbdddddddddddddbbbbbbddddddddddddddddddddddddbbbbbbbbdddddddddddddddddddd
            bbbdddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbddddddddddddddbbbbbdddddddddddddddddddddddddbbbbbbbddddddddddddddddddddd
            bbddddddddddddddddddbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbdddddddddddddddddddddd
            ddddddddddddddddddddbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbdddddddddddddddddddddd
            ddddddddddddddddddddbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbddddd
            ddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbdddddddddddddddddddddddbbbbddddddddddddddddddddddddddddddddddddddddbbbbbbddddd
            ddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbdddddddddddddddddddddddbbbbddddddddddddddddddddddddddddddddddddddddbbbbbbddddd
            ddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbdddddddddddddddddddddbbbbbbbdddddddddddddddddddddddddddddddddddddddbbbbbbddddd
            dbbbbddddddddddddbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddbbbbbbbbbddddddddddddddddddddddddddddddddddddddbbbbbbddddd
            dbbbbdddddddddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbddddddddddddddddbbbbbbbbbdddddddddddddddddddbbbbdddddddddddddddbbbbbbddddd
            dbbbbbddddddddbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbddddddddddddddbbbbbbbbbbbdddddbbbddddddddddbbbbbbbddddddddddddbbbbbbbbbddd
            dbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbddddddddddddbbbbbdbbbbbbbdddddddddddddddddbbbbbbbbddddddddddbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbddddddddddddbbbbbbbbbbbbbdddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddbbbbbbbbbbbbbbddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbdddddddddddddbbbdddddddddbbbbdddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbddddddddddbbbbbbdddddddddbbbbdddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbdddddddddbbbbbbbbddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbddddddddbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbb
            bbbbbbbbcccccbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbccccccbbbbbbbb
            bbbbbbbccccccbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbccccccbbbbbbbb
            bbbbbbbccccccbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbcccccccccbbbbb
            bbbbbbbccccccbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbcccccccccbbbbb
            bbbbbbbccccccbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbcccccccccbbbbb
            bbbbbbbccccccbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbccccccccccbbbb
            bbbbbbbccccccbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbbccccccccccbbbb
            bbbbbbbccccccbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbbbbccccccccccccbbb
            bbbbbbcccccccbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbcccccccccccccbb
            bbbbbbcccccccbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbccccccccccccccb
            bbbbbbccccccccbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbccccccccccccccb
            bbbbbcccccccccbbbbbbbbbcccbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccbbbbbbbccccccccccccccc
            bbbbccccccccccbbbbbbbbbcccbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccbbbbbbccccccccccccccc
            bbbbcccccccccccbbbbbbbccccbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccbbbbbcccccccccccccccc
            bbbbcccccccccccbbbbbccccccbbbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccbbbcccccccccccccccccc
            bbbbccccccccccccbbbbcccccccbbcccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccbccccccccccccccccccc
            bbbcccccccccccccbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccbbbbcccccccccccccccccccccccccccccbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccbbcccccccccccccccccccccccccccccccbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            `)
        tiles.setTilemap(tilemap`レベル8`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 8))
        scene.cameraFollowSprite(mySprite)
        EnemySet()
        ItemSet()
        Dame()
    } else {
        scene.setBackgroundImage(img`
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111199991111111111111111111111111111111111119999111111111111111111111111111111111111999911111111111111111111111111111111111199991111111111111111111
            1111111111199999999999111111111111111111111111111119999999999911111111111111111111111111111999999999991111111111111111111111111111199999999999111111111111111111
            1111111199999999999999111111111111111111111111119999999999999911111111111111111111111111999999999999991111111111111111111111111199999999999999111111111111111111
            1111119999999999999999111111111111111111111111999999999999999911111111111111111111111199999999999999991111111111111111111111119999999999999999111111111111111111
            1111199999999999999999111111111111111111111119999999999999999911111111111111111111111999999999999999991111111111111111111111199999999999999999111111111111111111
            1111199999999999999999111111111111111111111119999999999999999911111111111111111111111999999999999999991111111111111111111111199999999999999999111111111111111111
            1111999999999999999999911111111111111111111199999999999999999991111111111111111111119999999999999999999111111111111111111111999999999999999999911111111111111111
            1111999999999999999999911111111111111111111199999999999999999991111111111111111111119999999999999999999111111111111111111111999999999999999999911111111111111111
            1119999999999999999999911111199911111111111999999999999999999991111119991111111111199999999999999999999111111999111111111119999999999999999999911111199911111111
            1119999999999999999999911111999991111111111999999999999999999991111199999111111111199999999999999999999111119999911111111119999999999999999999911111999991111111
            1199999999999999999999911111999991111111119999999999999999999991111199999111111111999999999999999999999111119999911111111199999999999999999999911111999991111111
            1199999999999999999999911111999991111111119999999999999999999991111199999111111111999999999999999999999111119999911111111199999999999999999999911111999991111111
            1199999999999999999999911111999999111111119999999999999999999991111199999911111111999999999999999999999111119999991111111199999999999999999999911111999999111111
            1999999999999999999999911111999999111111199999999999999999999991111199999911111119999999999999999999999111119999991111111999999999999999999999911111999999111111
            1999999999999999999999911111999999111111199999999999999999999991111199999911111119999999999999999999999111119999991111111999999999999999999999911111999999111111
            1999999999999999999999911119999999111111199999999999999999999991111999999911111119999999999999999999999111199999991111111999999999999999999999911119999999111111
            9999999999999998999999911119999999111199999999999999999899999991111999999911119999999999999999989999999111199999991111999999999999999998999999911119999999111199
            9999999999999988999999911119999999119999999999999999998899999991111999999911999999999999999999889999999111199999991199999999999999999988999999911119999999119999
            9999999999999988999999911119999999919999999999999999998899999991111999999991999999999999999999889999999111199999999199999999999999999988999999911119999999919999
            9999999999999888899999911119999999999999999999999999988889999991111999999999999999999999999998888999999111199999999999999999999999999888899999911119999999999999
            9999999999988888999999999999999999999999999999999998888899999999999999999999999999999999999888889999999999999999999999999999999999988888999999999999999999999999
            9999999999999888999999999999999666666699999999999999988899999999999999966666669999999999999998889999999999999996666666999999999999999888999999999999999666666699
            9999999999998888899999999999966666666666999999999999888889999999999996666666666699999999999988888999999999999666666666669999999999998888899999999999966666666666
            6999999999998888888999999999666666666666699999999999888888899999999966666666666669999999999988888889999999996666666666666999999999998888888999999999666666666666
            6669999999988888899999999966666666666666666999999998888889999999996666666666666666699999999888888999999999666666666666666669999999988888899999999966666666666666
            6666999998888888889999999666666666666666666699999888888888999999966666666666666666669999988888888899999996666666666666666666999998888888889999999666666666666666
            6666699999988888888999996666666666666666666669999998888888899999666666666666666666666999999888888889999966666666666666666666699999988888888999996666666666666666
            6666669966888888899999966666666666666666666666996688888889999996666666666666666666666699668888888999999666666666666666666666669966888888899999966666666666666666
            6666666666668888889999668666666666666666666666666666888888999966866666666666666666666666666688888899996686666666666666666666666666668888889999668666666666666666
            6666666666888888888996668666666666666666666666666688888888899666866666666666666666666666668888888889966686666666666666666666666666888888888996668666666666666666
            6666666668888888888866688666666666666666666666666888888888886668866666666666666666666666688888888888666886666666666666666666666668888888888866688666666666666666
            6666666888888888886666668866666666666666666666688888888888666666886666666666666666666668888888888866666688666666666666666666666888888888886666668866666666666666
            6666666668888888886666688666666666666666666666666888888888666668866666666666666666666666688888888866666886666666666666666666666668888888886666688666666666666666
            6666666668888888666666888866666666666666666666666888888866666688886666666666666666666666688888886666668888666666666666666666666668888888666666888866666666666666
            6666666688988888888668888886666666666666666666668898888888866888888666666666666666666666889888888886688888866666666666666666666688988888888668888886666666666666
            6666666666888888888866688666666666668666666666666688888888886668866666666666866666666666668888888888666886666666666686666666666666888888888866688666666666668666
            6666666688888888888668888886666666668666666666668888888888866888888666666666866666666666888888888886688888866666666686666666666688888888888668888886666666668666
            6668666888888888888688888888666666688866666866688888888888868888888866666668886666686668888888888886888888886666666888666668666888888888888688888888666666688866
            6668866666888888888888888866666666668866666886666688888888888888886666666666886666688666668888888888888888666666666688666668866666888888888888888866666666668866
            6688666688888888888888888888666666688666668866668888888888888888888866666668866666886666888888888888888888886666666886666688666688888888888888888888666666688666
            6668866888888888888888888888866666888866666886688888888888888888888886666688886666688668888888888888888888888666668888666668866888888888888888888888866666888866
            6688888888888888888888888886666666688886668888888888888888888888888666666668888666888888888888888888888888866666666888866688888888888888888888888886666666688886
            6668888888888888888888888888866666888866666888888888888888888888888886666688886666688888888888888888888888888666668888666668888888888888888888888888866666888866
            6668888888888888888888888888886668888886666888888888888888888888888888666888888666688888888888888888888888888866688888866668888888888888888888888888886668888886
            6688888888888888888888888888666666888866668888888888888888888888888866666688886666888888888888888888888888886666668888666688888888888888888888888888666666888866
            6888888888888888888888888888886688888886688888888888888888888888888888668888888668888888888888888888888888888866888888866888888888888888888888888888886688888886
            6688888888888888888888888888888668888888668888888888888888888888888888866888888866888888888888888888888888888886688888886688888888888888888888888888888668888888
            6688888888888888888888888888886688888888668888888888888888888888888888668888888866888888888888888888888888888866888888886688888888888888888888888888886688888888
            8888888888888888888888888888888688888888888888888888888888888888888888868888888888888888888888888888888888888886888888888888888888888888888888888888888688888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            `)
        tiles.setTilemap(tilemap`レベル9`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 9))
        scene.cameraFollowSprite(mySprite)
    }
}
function BGM23 () {
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
}
// 土管1に入るときの処理
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    if (controller.down.isPressed()) {
        for (let 値 of sprites.allOfKind(SpriteKind.Enemy)) {
            値.destroy()
        }
        for (let 値 of sprites.allOfKind(SpriteKind.Item)) {
            値.destroy()
        }
        for (let 値 of sprites.allOfKind(SpriteKind.block1)) {
            値.destroy()
        }
        for (let 値 of sprites.allOfKind(SpriteKind.fire)) {
            値.destroy()
        }
        tiles.setWallAt(tiles.getTileLocation(11, 2), false)
        tiles.setWallAt(tiles.getTileLocation(12, 2), false)
        tiles.setWallAt(tiles.getTileLocation(5, 6), false)
        tiles.setWallAt(tiles.getTileLocation(26, 6), false)
        stage += 1
        music.stopAllSounds()
        StageSet()
    }
})
// 敵に当たった時の処理
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (mySprite.vy > 0) {
        otherSprite.destroy(effects.disintegrate, 200)
        music.baDing.play()
        info.changeScoreBy(10)
    } else {
        mySprite.startEffect(effects.disintegrate)
        music.bigCrash.play()
        info.changeLifeBy(-1)
        pause(1000)
    }
})
// Aボタンでジャンプ(アニメーションつき)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -170
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e e f . . 
            f f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f . 
            f f 4 d 4 d d d d f . . 
            . f f f 4 d d b b f . . 
            . 4 d d e 4 4 4 e f . . 
            . e d d e 1 1 1 1 f . . 
            . f e e f 6 6 6 6 f f . 
            . f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e e f . . 
            f f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f . 
            . f 4 d 4 d d d d f . . 
            . f f f 4 d d b b f . . 
            . 4 d d e 4 4 4 e f . . 
            . e d d e 1 1 1 1 f . . 
            . f e e f 6 6 6 6 f . . 
            . f f f f f f f f f . . 
            . . f f . . . f f f . . 
            `,img`
            . . . . f f f f f . . . 
            . . f f e e e e e f . . 
            . f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f f 
            . f 4 d 4 d d d d f f . 
            . f f f 4 d d b b f . . 
            . . f e e 4 4 4 e f . . 
            . . 4 d d e 1 1 1 f . . 
            . . e d d e 1 1 1 f . . 
            . . f e e f f f 6 f . . 
            . . . f f f f f f . . . 
            . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e e f . . 
            f f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f . 
            . f 4 d 4 d d d d f . . 
            . f f f 4 d d b b f . . 
            . 4 d d e 4 4 4 e f . . 
            . e d d e 1 1 1 1 f . . 
            . f e e f 6 6 6 6 f . . 
            . f f f f f f f f f . . 
            . . f f . . . f f f . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e e f . . 
            f f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f . 
            f f 4 d 4 d d d d f . . 
            . f f f 4 d d b b f . . 
            . 4 d d e 4 4 4 e f . . 
            . e d d e 1 1 1 1 f . . 
            . f e e f 6 6 6 6 f f . 
            . f f f f f f f f f f . 
            `,img`
            . . . . f f f f f . . . 
            . . f f e e e e e f . . 
            . f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f f 
            . f 4 d 4 d d d d f f . 
            . f f f 4 d d b b f . . 
            . . f e e 4 4 4 e f . . 
            . . 4 d d e 1 1 1 f . . 
            . . e d d e 1 1 1 f . . 
            . . f e e f 6 6 6 f . . 
            . . . f f f f f f . . . 
            . . . . f f f . . . . . 
            `],
        200,
        false
        )
    }
})
function BGM113 () {
    music.playTone(196, music.beat(BeatFraction.Triplet))
    music.playTone(165, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(131, music.beat(BeatFraction.Quarter))
    music.playTone(131, music.beat(BeatFraction.Eighth))
    music.playTone(175, music.beat(BeatFraction.Quarter))
    music.playTone(196, music.beat(BeatFraction.Quarter))
    music.playTone(185, music.beat(BeatFraction.Eighth))
    music.playTone(175, music.beat(BeatFraction.Quarter))
    music.playTone(165, music.beat(BeatFraction.Sixteenth))
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    music.playTone(330, music.beat(BeatFraction.Sixteenth))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(220, music.beat(BeatFraction.Eighth))
    music.playTone(247, music.beat(BeatFraction.Eighth))
    music.playTone(185, music.beat(BeatFraction.Triplet))
}
let fire1: Sprite = null
let Enemy2: Sprite = null
let Enemy1: Sprite = null
let coin: Sprite = null
let block4: Sprite = null
let block3: Sprite = null
let block2: Sprite = null
let block1: Sprite = null
let mySprite: Sprite = null
let stage = 0
info.setScore(0)
info.setLife(3)
stage = 0
StageSet()
forever(function () {
    if (stage == 0 || stage == 2) {
        music.setTempo(50)
        BGM11()
    } else {
        music.setTempo(25)
        BGM21()
    }
})
forever(function () {
    if (stage == 0 || stage == 2) {
        music.setTempo(50)
        BGM12()
    } else {
        BGM22()
    }
})
forever(function () {
    if (stage == 0 || stage == 2) {
        music.setTempo(50)
        BGM13()
    } else {
        BGM22()
    }
})
