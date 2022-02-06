basic.forever(function () {
    images.createBigImage(`
        # # . # # . # # # .
        # . . # . . # . # .
        # # . # # . # . # .
        # . . # . . # . # .
        # . . # # . # # # .
        `).scrollImage(1, 500)
    basic.pause(500)
    basic.showIcon(IconNames.Happy)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
})
