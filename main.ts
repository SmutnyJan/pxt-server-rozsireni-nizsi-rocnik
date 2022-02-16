input.onButtonPressed(Button.A, function () {
    Server.ZobrazVysledky()
})
input.onButtonPressed(Button.B, function () {
    Server.NoveHlasovani()
})
radio.onReceivedValue(function (name, value) {
    Server.PrijmoutHlas(name, value)
})
radio.setGroup(1)
Server.VychoziNastaveni(
"ANO",
"NE",
"NEVIM",
"MOZNA"
)
basic.forever(function () {
	
})
