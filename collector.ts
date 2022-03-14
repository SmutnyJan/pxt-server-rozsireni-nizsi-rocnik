//% weight=100 color=#3bccc0 icon="\uf233" block="Server"
namespace Server {
    let a = "";
    let b = "";
    let c = "";
    let d = "";
    let pocetD = 0
    let pocetC = 0
    let pocetB = 0
    let pocetA = 0
    let seriovaCisla: number[] = []
    let odpovedi: string[] = []
    
    /**
    * Nastaví hodnoty pro různé hlasovací možnosti
    * @moznostA Hlasovací možnost A
    * @moznostB Hlasovací možnost B
    * @moznostC Hlasovací možnost C
    * @moznostD Hlasovací možnost D

    */
    //% block="Nastav hlasovací hodnoty A: %moznostA B: %moznostB C: %moznostC D: %moznostD"

    export function vychoziNastaveni(moznostA: string, moznostB: string, moznostC: string, moznostD: string): void {
        a = moznostA;
        b = moznostB;
        c = moznostC;
        d = moznostD;
    }


    /**
    * Zobrazí dosavadní výsledky hlasování
    */
    //% block="Zobraz výsledky"

    export function zobrazVysledky(): void {
        pocetD = 0
        pocetC = 0
        pocetB = 0
        pocetA = 0
        for (let item of odpovedi) {
            spocitejVyskyty(item)
        }
        basic.showString("" + a + " " + pocetA)
        basic.showString("" + b + " " + pocetB)
        basic.showString("" + c + " " + pocetC)
        basic.showString("" + d + " " + pocetD)
    }

    /**
    * Spustí nové hlasování a smaže uložená data
    */
    //% block="Spusť nové hlasování"

    export function noveHlasovani(): void {
        odpovedi = []
        seriovaCisla = []
        pocetA = 0
        pocetB = 0
        pocetC = 0
        pocetD = 0
    }

    /**
    * Zaznamená nový hlas
    */
    //% block="Zaznamenej hlas %hlas se seriovým číslem %serioveCislo"

    export function zaznamenatHlas(hlas: string, serioveCislo: number): void {
        if(serioveCislo == 0) {
            return
        }
        
        let obsahuje = false
        for (let number of seriovaCisla) {
            if (number == serioveCislo) {
                obsahuje = true
            }
        }
        if (obsahuje == false) {
            odpovedi.push(hlas)
            seriovaCisla.push(serioveCislo)
        } else {
            odpovedi[seriovaCisla.indexOf(serioveCislo)] = hlas
        }
    }


    function spocitejVyskyty(text: string) {
        switch (text.toLowerCase()) {
            case "a":
                pocetA++
                break
            case "b":
                pocetB++
                break
            case "c":
                pocetC++
                break
            case "d":
                pocetD++
                break
        }
    }


}
