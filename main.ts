radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (receivedNumber == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
let gyro_sensor = 0
let strip: neopixel.Strip = null
radio.setGroup(25)
strip = neopixel.create(DigitalPin.P11, 24, NeoPixelMode.RGB)
strip.setBrightness(20)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.pause(100)
basic.forever(function () {
    basic.showNumber(input.acceleration(Dimension.Z))
    gyro_sensor = input.acceleration(Dimension.Z)
    if (gyro_sensor < -50) {
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    } else if (gyro_sensor > 90) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
