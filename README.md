
> Otevřít tuto stránku v aplikaci [https://smutnyjan.github.io/pxt-voting-collector/](https://smutnyjan.github.io/pxt-voting-collector/)

## Použít jako rozšíření

Toto úložiště lze přidat jako **rozšíření** v aplikaci MakeCode.

* otevřít [https://makecode.microbit.org/](https://makecode.microbit.org/)
* klikněte na možnost **Nový projekt**
* klikněte na možnost **Rozšíření** v nabídce s ozubeným kolem
* vyhledat **https://github.com/smutnyjan/pxt-voting-collector** a importovat

## Upravit tento projekt ![Odznak stavu sestavení](https://github.com/smutnyjan/pxt-voting-collector/workflows/MakeCode/badge.svg)

Slouží k úpravě tohoto úložiště v aplikaci MakeCode.

* otevřít [https://makecode.microbit.org/](https://makecode.microbit.org/)
* klikněte na možnost **Import** a poté na **Import adresy URL**
* vložte **https://github.com/smutnyjan/pxt-voting-collector** a klikněte na možnost import

## Náhled bloků

Tento obrázek znázorňuje kód z Bloků od posledního potvrzení v hlavní verzi.
Tento obrázek se může aktualizovat až za několik minut.

![Vykreslený náhled bloků](https://github.com/smutnyjan/pxt-voting-collector/raw/master/.github/makecode/blocks.png)

#### Metadata (slouží k vyhledávání, vykreslování)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

## Popis projektu

Tento projekt slouží jako „collector“ v úloze Hlasování. Projekt je určen k nahrání na jeden microbit, na který poté budou odesílat data a seriová číslá všechny „hlasovače“ (projekt voter: https://github.com/SmutnyJan/pxt-voting-voter). Shromažďování dat funguje následujícím způsobem: když collector dostane nějakou hodnotu se seriovým číslem, podívá se, jestli dané seriové číslo již nemá ve svém seznamu seriových čísel microbitů, které již hlasovaly. Pokud ne, přídá přijatou hodnotu do pole s hodnotami a serivoé číslo přidá do seznamu se seriovými čísly. Pokud ale již toto seriové číslo hlasovalo, aktualizuje pouze hodnotu => hlasující může změnit svůj názor a znovu hlasovat, ale počet hlasů se nezmění. Nové hlasování se provádí stisknutím tlačítka B (viz ovládání), po kterém se vymaže obsah obou listů (uložená data a seriová čísla). Data jsou přijímána ve formátu A/B/C/D. Samotný převod těchto písmen na nějaké smysluplné hodnoty (vždy 4: pondělí/úterý/středa/čvrtek atd.) probíhá až ve výpisu. V metode spocitejVyskyty se počítají jednotlivé výskyty daných hodnot. Ke změně interpretovaných hodnot stačí pouze změnit proměnné A, B, C, D.

## Ovládání

* tlačítko A: zobrazí data ve formátu "interpretovaná hodnota" "počet hlasů pro tuto hodnotu"
* tlačítko B: vymaže uložená data i list všech hlasujících => úplně nové hlasování
