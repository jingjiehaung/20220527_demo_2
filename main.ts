input.onButtonPressed(Button.A, function on_button_pressed_a() {
    while (true) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(1000)
    }
})
basic.forever(function on_forever() {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        basic.showNumber(0)
    } else {
        basic.showNumber(1)
    }
    
})
