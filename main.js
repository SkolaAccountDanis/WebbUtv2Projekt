let forage = document.getElementById("forage")
let custombutton = document.querySelectorAll(".custombutton")

console.log(custombutton)


// Resources
let wood = document.getElementById("Allwood")
let stone = document.getElementById("Allstone")
let food = document.getElementById("Allfood")
let people = document.getElementById("Allpeople")

let woodAmount = Number(document.getElementById("Allwood").innerHTML.split(" ")[0])
let stoneAmount = Number(document.getElementById("Allstone").innerHTML.split(" ")[0])
let foodAmount = Number(document.getElementById("Allfood").innerHTML.split(" ")[0])
let peopleAmount = Number(document.getElementById("Allpeople").innerHTML.split(" ")[0])

// Home
let wholeCostOfHome = document.getElementById("costOfHome")

let costOfHome = Number(document.getElementById("costOfHome").innerHTML.split(" ")[0])
let homeAmount = Number(document.getElementById("homeAmount").innerHTML.split(" ")[0])

console.log(custombutton)


custombutton[3].addEventListener("click", function playerClick(){
    foodAmount += 1;
    let foodString = food.innerHTML.split(" ")[1];
    food.innerHTML = `${foodAmount}` + ' ' + foodString;     
})

custombutton[4].addEventListener("click", function playerClick(){
    stoneAmount += 1;
    let stoneString = stone.innerHTML.split(" ")[1];
    stone.innerHTML = `${stoneAmount}` + ' ' + stoneString;
})

custombutton[5].addEventListener("click", function playerClick(){
    woodAmount += 1;
    let woodString = wood.innerHTML.split(" ")[1];
    wood.innerHTML = `${woodAmount}` + ' ' + woodString; 
})


custombutton[0].addEventListener("click", function buyCave(){
    let stoneString = stone.innerHTML.split(" ")[1];
    let costOfHomeString = wholeCostOfHome.innerHTML.split(" ")[1];
    console.log(stoneAmount)
    if (stoneAmount >= costOfHome) {
        stoneAmount = stoneAmount - costOfHome;
        homeAmount = homeAmount +  1;
        costOfHome = Math.round(costOfHome * 1.15);

        stone.innerHTML = `${stoneAmount}` + ' ' + stoneString;
        document.getElementById("homeAmount").innerHTML = homeAmount;
        wholeCostOfHome.innerHTML = `${costOfHome}` + ' ' + costOfHomeString;
    }
})