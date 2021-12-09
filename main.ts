input.onButtonPressed(Button.A, function () {
    for (let item of answers) {
        basic.showString("" + (item))
    }
})
radio.onReceivedString(function (receivedString) {
    answers.push(receivedString)
})
let answers: string[] = []
radio.setGroup(1)
basic.forever(function () {
	
})
