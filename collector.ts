/**
 * Použijte tento soubor k definování personalizovaných funkcí a bloků.
 * Přečtěte si více na https://makecode.microbit.org/blocks/custom
 */


/**
 * Custom blocks
 */
//% weight=100 color=#3bccc0 icon="\uf233"
namespace Server {
    let A = "";
    let B = "";
    let C = "";
    let D = "";
    let Dcount = 0
    let Ccount = 0
    let Bcount = 0
    let Acount = 0
    let serialNumbers: number[] = []
    let answers: string[] = []
    
    /**
    * Nastaví hodnoty pro různé hlasovací možnosti
    */
    //% block="Nastav hlasovací hodnoty A: %a B: %b C: %c D: %d"

    export function VychoziNastaveni(Aoption: string, Boption: string, Coption: string, Doption: string): void {
        A = Aoption;
        B = Boption;
        C = Coption;
        D = Doption;
    }


    /**
    * Zobrazí dosavadní výsledky hlasování
    */
    //% block="Zobraz výsledky"

    export function ZobrazVysledky(): void {
        for (let item of answers) {
            spocitejVyskyty(item)
        }
        basic.showString("" + A + " " + Acount)
        basic.showString("" + B + " " + Bcount)
        basic.showString("" + C + " " + Ccount)
        basic.showString("" + D + " " + Dcount)
    }

    /**
    * Spustí nové hlasování a smaže uložená data
    */
    //% block="Spusť nové hlasování"

    export function NoveHlasovani(): void {
        answers = []
        serialNumbers = []
        Acount = 0
        Bcount = 0
        Ccount = 0
        Dcount = 0
    }

    /**
    * Zaznamená nový hlas
    */
    //% block="Zaznamenej hlas %hlas se seriovým číslem %serioveCislo"

    export function PrijmoutHlas(hlas: string, serioveCislo: number): void {
        let contains = false
        for (let number of serialNumbers) {
            if (number == serioveCislo) {
                contains = true
            }
        }
        if (contains == false) {
            answers.push(hlas)
            serialNumbers.push(serioveCislo)
        } else {
            answers[serialNumbers.indexOf(serioveCislo)] = hlas
        }
    }


    function spocitejVyskyty(text: string) {
        Dcount = 0
        Ccount = 0
        Bcount = 0
        Acount = 0
        switch (text.toLowerCase()) {
            case "a":
                Acount++
                break
            case "b":
                Bcount++
                break
            case "c":
                Ccount++
                break
            case "d":
                Dcount++
                break
        }
    }


}
