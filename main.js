let forage = document.getElementById("forage")
let custombutton = document.querySelectorAll(".custombutton")
let customUpgradebutton = document.querySelectorAll(".customUpgradebutton")

console.log(custombutton)

// Resources
let wood = document.getElementById("Allwood").firstElementChild
let stone = document.getElementById("Allstone").firstElementChild
let food = document.getElementById("Allfood").firstElementChild

let woodAmount = Number(document.getElementById("Allwood").firstElementChild.innerHTML.split(" ")[0])
let stoneAmount = Number(document.getElementById("Allstone").firstElementChild.innerHTML.split(" ")[0])
let foodAmount = Number(document.getElementById("Allfood").firstElementChild.innerHTML.split(" ")[0])

let wholeStonePerSecond = document.getElementById("Allstone").lastElementChild
let wholeFoodPerSecond = document.getElementById("Allfood").lastElementChild
let wholeWoodPerSecond = document.getElementById("Allwood").lastElementChild

let stonePerSecondString = document.getElementById("Allstone").lastElementChild.innerHTML.split(" ")[1]
let stonePerSecond = Number(document.getElementById("Allstone").lastElementChild.innerHTML.split(" ")[0])

let woodPerSecondString = document.getElementById("Allwood").lastElementChild.innerHTML.split(" ")[1]
let woodPerSecond = Number(document.getElementById("Allwood").lastElementChild.innerHTML.split(" ")[0])

let foodPerSecondString = document.getElementById("Allfood").lastElementChild.innerHTML.split(" ")[1]
let foodPerSecond = Number(document.getElementById("Allfood").lastElementChild.innerHTML.split(" ")[0])


//Player click
let woodClickPower = 100;
let foodClickPower = 100;
let mineClickPower = 100;

// Home
let wholeCostOfHome = document.getElementById("costOfHome")

let costOfHome = Number(document.getElementById("costOfHome").innerHTML.split(" ")[0])
let homeAmount = Number(document.getElementById("homeAmount").innerHTML)

//Farm
let wholeCostOfFarm = document.getElementById("costOfFarm")

let costOfFarmWood = Number(wholeCostOfFarm.lastElementChild.innerHTML.split(" ")[0]);
let costOfFarmStone = Number(wholeCostOfFarm.firstElementChild.innerHTML.split(" ")[0]);
let farmAmount = Number(document.getElementById("farmAmount").innerHTML.split(" ")[0]);

//Mine
let wholeCostOfMine = document.getElementById("costOfMine");

let costOfMineStone = Number(wholeCostOfMine.firstElementChild.innerHTML.split(" ")[0]);
let costOfMineFood = Number(wholeCostOfMine.lastElementChild.innerHTML.split(" ")[0]);
let mineAmount = Number(document.getElementById("mineAmount").innerHTML);
//Upgrades
let costOfFarmUpgrade = Number(document.getElementById("costOfFarmUpgrade").innerHTML.split(" ")[0])
let farmUpgradeAmount = 0;

let costOfHomeUpgrade = Number(document.getElementById("costOfHutUpgrade").innerHTML.split(" ")[0])
let homeUpgradeAmount = 0;

let costOfMineUpgrade = Number(document.getElementById("costOfMineUpgrade").innerHTML.split(" ")[0])
let mineUpgradeAmount = 0;


custombutton[3].addEventListener("click", function playerClickForage(){
    foodAmount = foodAmount + foodClickPower;
    let foodString = food.innerHTML.split(" ")[1];
    food.innerHTML = `${foodAmount}` + ' ' + foodString;     
})

custombutton[4].addEventListener("click", function playerClickMine(){
    stoneAmount = stoneAmount + mineClickPower;
    let stoneString = stone.innerHTML.split(" ")[1];
    stone.innerHTML = `${stoneAmount}` + ' ' + stoneString;
})

custombutton[5].addEventListener("click", function playerClickWoodCut(){
    woodAmount = woodAmount + woodClickPower;
    let woodString = wood.innerHTML.split(" ")[1];
    wood.innerHTML = `${woodAmount}` + ' ' + woodString; 
})


custombutton[0].addEventListener("click", function buyCave(){
    let stoneString = stone.innerHTML.split(" ")[1];
    let costOfHomeString = wholeCostOfHome.innerHTML.split(" ")[1];
    if (stoneAmount >= costOfHome) {
        stoneAmount = stoneAmount - costOfHome;
        homeAmount = homeAmount +  1;
        costOfHome = Math.round(costOfHome * 1.15);

        stone.innerHTML = `${stoneAmount}` + ' ' + stoneString;
        document.getElementById("homeAmount").innerHTML = homeAmount;
        wholeCostOfHome.innerHTML = `${costOfHome}` + ' ' + costOfHomeString;
        ScoreWoodPerSecond()
    }
})

custombutton[1].addEventListener("click", function buyFarm(){
    let stoneString = stone.innerHTML.split(" ")[1];
    let woodString = wood.innerHTML.split(" ")[1];
    if (woodAmount >= costOfFarmWood && stoneAmount >= costOfFarmStone){
        stoneAmount = stoneAmount - costOfFarmStone
        woodAmount = woodAmount - costOfFarmWood
        farmAmount = farmAmount + 1

        costOfFarmStone = Math.round(costOfFarmStone * 1.15);
        costOfFarmWood = Math.round(costOfFarmWood * 1.15);

        stone.innerHTML = `${stoneAmount}` + ' ' + stoneString;
        wood.innerHTML = `${woodAmount}` + ' ' + woodString;
        document.getElementById("farmAmount").innerHTML = farmAmount
        wholeCostOfFarm.lastElementChild.innerHTML = `${costOfFarmWood} ${woodString}`;
        wholeCostOfFarm.firstElementChild.innerHTML = `${costOfFarmStone} ${stoneString}`;
        ScoreFoodPerSecond()
    }

})

custombutton[2].addEventListener("click", function buyMine(){
    let stoneString = stone.innerHTML.split(" ")[1];
    let foodString = food.innerHTML.split(" ")[1];
    if (stoneAmount >= costOfMineStone && foodAmount >= costOfMineFood){
        stoneAmount = stoneAmount - costOfMineStone
        foodAmount = foodAmount - costOfMineFood
        mineAmount = mineAmount + 1

        costOfMineStone = Math.round(costOfMineStone * 1.15);
        costOfMineFood = Math.round(costOfMineFood * 1.15);

        stone.innerHTML = `${stoneAmount}` + ' ' + stoneString;
        food.innerHTML = `${foodAmount}` + ' ' + foodString;
        document.getElementById("mineAmount").innerHTML = mineAmount
        wholeCostOfMine.firstElementChild.innerHTML = `${costOfMineStone} ${stoneString}`
        wholeCostOfMine.lastElementChild.innerHTML = `${costOfMineFood} ${foodString}`
        ScoreStonePerSecond()
    }

})

function ScoreStonePerSecond(){
    stonePerSecond = (mineAmount * 0.5)
    
    wholeStonePerSecond.innerHTML = `${stonePerSecond} ${stonePerSecondString}`
}

function ScoreFoodPerSecond(){
    foodPerSecond = (farmAmount * 0.5)
        
    wholeFoodPerSecond.innerHTML = `${foodPerSecond} ${foodPerSecondString}`
    farmUpgrade()
}

function ScoreWoodPerSecond(){
    woodPerSecond = (homeAmount * 0.5)
    
    wholeWoodPerSecond.innerHTML = `${woodPerSecond} ${woodPerSecondString}`
    homeUpgrade()
}

console.log(customUpgradebutton);

customUpgradebutton[0].addEventListener("click", function farmUpgrade() {
    let foodString = food.innerHTML.split(" ")[1];
    if (farmAmount >= 10 && foodAmount >= costOfFarmUpgrade){
        foodAmount = foodAmount - costOfFarmUpgrade
        foodPerSecond = foodPerSecond + (farmAmount * 1.5)

        
        food.innerHTML = `${foodAmount}` + ' ' + foodString;
        wholeFoodPerSecond.innerHTML = `${foodPerSecond} ${foodPerSecondString}`
        farmUpgradeAmount += 1            
        document.getElementById("farm2").style.visibility = "hidden";
    }
})


customUpgradebutton[1].addEventListener("click", function homeUpgrade() {
    let woodString = wood.innerHTML.split(" ")[1];
    if (homeAmount >= 10 && woodAmount >= costOfHomeUpgrade){
        woodAmount = woodAmount - costOfHomeUpgrade
        woodPerSecond = woodPerSecond + (homeAmount * 1.5)

        
        wood.innerHTML = `${woodAmount}` + ' ' + woodString;
        wholeWoodPerSecond.innerHTML = `${woodPerSecond} ${woodPerSecondString}`
        homeUpgradeAmount += 1            
        document.getElementById("hut").style.visibility = "hidden";
    }
})

customUpgradebutton[2].addEventListener("click", function mineUpgrade() {
    let stoneString = stone.innerHTML.split(" ")[1];
    if (mineAmount >= 10 && stoneAmount >= costOfMineUpgrade){
        stoneAmount = stoneAmount - costOfMineUpgrade
        stonePerSecond = stonePerSecond + (mineAmount * 1.5)

        
        stone.innerHTML = `${stoneAmount}` + ' ' + stoneString;
        wholeStonePerSecond.innerHTML = `${stonePerSecond} ${stonePerSecondString}`
        mineUpgradeAmount += 1 
        document.getElementById("mine2").style.visibility = "hidden";           
        
    }
})


setInterval (() =>{
    let stoneString = stone.innerHTML.split(" ")[1];
    let foodString = food.innerHTML.split(" ")[1];
    let woodString = wood.innerHTML.split(" ")[1];

    stoneAmount = stoneAmount + stonePerSecond
    woodAmount = woodAmount + woodPerSecond
    foodAmount = foodAmount + foodPerSecond

    stone.innerHTML = `${stoneAmount}` + ' ' + stoneString;
    wood.innerHTML = `${woodAmount}` + ' ' + woodString;
    food.innerHTML = `${foodAmount}` + ' ' + foodString;

    if (mineAmount < 10 && stoneAmount < costOfMineUpgrade){
        document.getElementById("mine2").style.opacity = "0.5";
    }else if (mineAmount >= 10 && stoneAmount >= costOfMineUpgrade){
        document.getElementById("mine2").style.opacity = "1";

    }

    if (homeAmount < 10 && woodAmount < costOfHomeUpgrade){
        document.getElementById("hut").style.opacity = "0.5";

    }else if (homeAmount >= 10 && woodAmount >= costOfHomeUpgrade){
        document.getElementById("hut").style.opacity = "1";

    }

    if (farmAmount < 10 && foodAmount < costOfFarmUpgrade){
        document.getElementById("farm2").style.opacity = "0.5";
    }else if (homeAmount >= 10 && woodAmount >= costOfHomeUpgrade){
        document.getElementById("farm2").style.opacity = "1";

    }

    if (stoneAmount >= costOfHome){
        document.getElementById("cave").style.opacity = "1";
    }else if (stoneAmount < costOfHome){
        document.getElementById("cave").style.opacity = "0.5";
    }

    if (woodAmount >= costOfFarmWood && stoneAmount >= costOfFarmStone){
        document.getElementById("farm").style.opacity = "1";
    }else if (woodAmount < costOfFarmWood && stoneAmount < costOfFarmStone){
        document.getElementById("farm").style.opacity = "0.5";
    }

    if (stoneAmount >= costOfMineStone && foodAmount >= costOfMineFood){
        document.getElementById("mine").style.opacity = "1";
    }else if (stoneAmount < costOfMineStone && foodAmount < costOfMineFood){
        document.getElementById("mine").style.opacity = "0.5";

    }

}, 1000)


