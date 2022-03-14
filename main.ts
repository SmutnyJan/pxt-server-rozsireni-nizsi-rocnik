input.onButtonPressed(Button.A, function () {
    Server.zobrazVysledky()
})
radio.onReceivedString(function (receivedString) {
    Server.zaznamenatHlas(receivedString, radio.receivedPacket(RadioPacketProperty.SerialNumber))
})
input.onButtonPressed(Button.B, function () {
    Server.noveHlasovani()
})
radio.setGroup(1)
Server.vychoziNastaveni(
"ANO",
"NE",
"NEVIM",
"?"
)
