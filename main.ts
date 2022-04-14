input.onButtonPressed(Button.A, function () {
    server.showResults()
})
radio.onReceivedString(function (receivedString) {
    server.addVote(receivedString, radio.receivedPacket(RadioPacketProperty.SerialNumber))
})
input.onButtonPressed(Button.B, function () {
    server.newVoting()
})
radio.setGroup(1)
