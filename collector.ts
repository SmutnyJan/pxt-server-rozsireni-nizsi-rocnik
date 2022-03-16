//% weight=100 color=#3bccc0 icon="\uf233" block="Server"
namespace server {
    let a = "";
    let b = "";
    let c = "";
    let d = "";
    let aCount = 0
    let bCount = 0
    let cCount = 0
    let dCount = 0
    let serialNumbers: number[] = []
    let answers: string[] = []
    
    /**
    * Nastaví hodnoty pro různé hlasovací možnosti
    * @optionA Hlasovací možnost A
    * @optionB Hlasovací možnost B
    * @optionC Hlasovací možnost C
    * @optionD Hlasovací možnost D

    */
    //% block="Nastav hlasovací hodnoty A: %optionA B: %optionB C: %optionC D: %optionD"

    export function initialSetup(optionA: string, optionB: string, optionC: string, optionD: string): void {
        a = optionA;
        b = optionB;
        c = optionC;
        d = optionD;
    }


    /**
    * Zobrazí dosavadní výsledky hlasování
    */
    //% block="Zobraz výsledky"

    export function showResults(): void {
        aCount = 0
        bCount = 0
        cCount = 0
        dCount = 0

        for (let item of answers) {
            countOccurrences(item)
        }
        basic.showString("" + a + " " + aCount)
        basic.showString("" + b + " " + bCount)
        basic.showString("" + c + " " + cCount)
        basic.showString("" + d + " " + dCount)
    }

    /**
    * Spustí nové hlasování a smaže uložená data
    */
    //% block="Spusť nové hlasování"

    export function newVoting(): void {
        answers = []
        serialNumbers = []
        aCount = 0
        bCount = 0
        cCount = 0
        dCount = 0
    }

    /**
    * Zaznamená nový hlas
    * @vote Hlas k zaznamenání
    * @serialNumber Sériové číslo odesílatele
    */
    //% block="Zaznamenej hlas %vote se seriovým číslem %serialNumber"

    export function addVote(vote: string, serialNumber: number): void {
        if (serialNumber == 0) {
            return
        }
        
        let obsahuje = false
        for (let number of serialNumbers) {
            if (number == serialNumber) {
                obsahuje = true
            }
        }
        if (obsahuje == false) {
            answers.push(vote)
            serialNumbers.push(serialNumber)
        } else {
            answers[serialNumbers.indexOf(serialNumber)] = vote
        }
    }


    function countOccurrences(text: string) {
        switch (text.toLowerCase()) {
            case "a":
                aCount++
                break
            case "b":
                bCount++
                break
            case "c":
                cCount++
                break
            case "d":
                dCount++
                break
        }
    }


}
