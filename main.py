def on_button_pressed_a():
    while True:
        pins.digital_write_pin(DigitalPin.P0, 1)
        basic.pause(1000)
        pins.digital_write_pin(DigitalPin.P0, 0)
        basic.pause(1000)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    if pins.digital_read_pin(DigitalPin.P0) == 0:
        basic.show_number(0)
    else:
        basic.show_number(1)
basic.forever(on_forever)
