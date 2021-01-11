let gyro_sensor = 0
let strip = neopixel.create(DigitalPin.P11, 24, NeoPixelMode.RGB)
strip.setBrightness(20)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.pause(100)
basic.forever(function () {
    gyro_sensor = input.acceleration(Dimension.X) / 5
    if (gyro_sensor > 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        basic.pause(500)
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(500)
    }
})
