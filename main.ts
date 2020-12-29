basic.showIcon(IconNames.Giraffe)
basic.showIcon(IconNames.Heart)
basic.clearScreen()
basic.forever(function () {
    if (NARIKA.operatorTemperature(NARIKA.NarikaOperator.GreaterThanOrEqual, 15)) {
        NARIKA.showTemperature()
        NARIKA.switchOn(NARIKA.NarikaSwitch.One)
        basic.pause(500)
    } else {
        NARIKA.switchOff(NARIKA.NarikaSwitch.One)
    }
})
