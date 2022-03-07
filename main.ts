input.onButtonPressed(Button.A, function () {
    Server.zobrazVysledky()
})
input.onButtonPressed(Button.B, function () {
    Server.noveHlasovani()
})
radio.onReceivedValue(function (name, value) {
    Server.zaznamenatHlas(name, value)
})
radio.setGroup(1)
Server.vychoziNastaveni(
"ANO",
"NE",
"NEVIM",
"?"
)
