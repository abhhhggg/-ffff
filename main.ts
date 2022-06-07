input.onButtonPressed(Button.A, function () {
    basic.showNumber(7)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 10))
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 9; index++) {
        music.playMelody("F - D - D - E D ", 497)
    }
})
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.SmallSquare)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showString("King Abdo")
radio.sendNumber(1)
basic.forever(function () {
	
})
