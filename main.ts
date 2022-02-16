input.onButtonPressed(Button.A, function () {
    Server.ZobrazVysledky()
})
input.onButtonPressed(Button.B, function () {
    Server.NoveHlasovani()
})
radio.onReceivedValue(function (name, value) {
    Server.ZaznamenatHlas(name, value)
})
radio.setGroup(1)
Server.VychoziNastaveni(
"ANO",
"NE",
"NEVIM",
"MOZNA"
)
