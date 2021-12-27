function spocitejVyskyty (text: string) {
	switch (text) {
        case "A":
            Acount++
            break
        case "B":
            Bcount++
            break
        case "C":
            Ccount++
            break
        case "D":
            Dcount++
            break
    }
}
input.onButtonPressed(Button.A, function () {
    for (let item of answers) {
        spocitejVyskyty(item)
    }

    basic.showString("" + A + " " + Acount)
    basic.showString("" + B + " " + Bcount)
    basic.showString("" + C + " " + Ccount)
    basic.showString("" + D + " " + Dcount)

})
input.onButtonPressed(Button.B, function () {
    answers = []
    serialNumbers = []
    Acount = 0
    Bcount = 0
    Ccount = 0
    Dcount = 0
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
let A = "ANO"
let B = "NE"
let C = "MOZNA"
let D = "NEVIM"
let Acount = 0
let Bcount = 0
let Ccount = 0
let Dcount = 0
radio.setGroup(1)
basic.forever(function () {
	
})
