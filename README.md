# WebbUtv2Projekt
 WebbUtv2 slutprojekt

## Projektplan
Jag planerade att göra ett clicker spel, där man kan sammla på tre resurser: *wood*, *stone* och *food*. 

## Utvärdering
Efter arbetet, så finns det mycket som kunde ha förbättrats. Såklart så skulle jag kunna skapa fler funktioner till spelet samt haft mer tid för CSS men också andra funktioner såsom en "main menu", så man inte hoppar in i spelet på en gång. En annan bit jag skulle viljat ha gjort var att göra en live display där varje gång man når en viss "threshold", dvs man när en viss mängd av byggnader, så kanske dyker en byggnad upp såsom en gruva eller hus.

Något existerande som jag skulle vilja förbättra var koden, det finns vissa funktioner som har samma funktionalitet men bara använder olika variabler. Jag har behövt göra detta för att **eventlisteners** ska kunna veta vilken knapp det är jag trycker på. Ett exempel är koden för spelarens "gathering" knappar.

```
custombutton[6].addEventListener("click", function playerClickForage(){
    foodAmount = foodAmount + foodClickPower;
    let foodString = food.innerHTML.split(" ")[1];
    food.innerHTML = `${foodAmount}` + ' ' + foodString;     
})

custombutton[7].addEventListener("click", function playerClickMine(){
    stoneAmount = stoneAmount + mineClickPower;
    let stoneString = stone.innerHTML.split(" ")[1];
    stone.innerHTML = `${stoneAmount}` + ' ' + stoneString;
})

custombutton[8].addEventListener("click", function playerClickWoodCut(){
    woodAmount = woodAmount + woodClickPower;
    let woodString = wood.innerHTML.split(" ")[1];
    wood.innerHTML = `${woodAmount}` + ' ' + woodString; 
})

```
Den enda stora skillnaden mellan dessa funktioner är variablerna. Det betyder att jag kunde ha implementerat en for loop som kollar på vilken knapp jag trycker på och sen kollar på just det elementet i custombutton arrayen. Då skulle jag inte behöva ha tre eventlisteners