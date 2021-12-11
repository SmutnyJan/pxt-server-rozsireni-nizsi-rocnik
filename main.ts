input.onButtonPressed(Button.A, function () {
    for (let item of answers) {
        basic.showString("" + (item))
    }
})
input.onButtonPressed(Button.B, function () {
    answers = []
    serialNumbers = []
})
radio.onReceivedValue(function (name, value) {
    contains = false
    for (let number of serialNumbers) {
        if (number == value) {
            contains = true
        }
    }
    if (contains == false) {
        answers.push(name)
        serialNumbers.push(value)
    } else {
        answers[serialNumbers.indexOf(value)] = name
    }
})
let contains = false
let serialNumbers: number[] = []
let answers: string[] = []
radio.setGroup(1)
basic.forever(function () {
	
})
