var gameCharacter = {
    name: "Tomas",
    health: 4,
    money: 12,
    strength: 3
};

var redDragon = {
    name: "Red Dragon",
    health: 6
};

var greenDragon = {
    name: "Green Dragon",
    health: 6
};

var blackDragon = {
    name: "Black Dragon",
    health: 7
}

window.onload = function characterProperties() {
    document.getElementById("firstName").innerHTML = "Name: " + gameCharacter.name;
    document.getElementById("health").innerHTML = "Health: " + gameCharacter.health;
    document.getElementById("money").innerHTML = "Money: " + gameCharacter.money;
    document.getElementById("strength").innerHTML = "Strength: " + gameCharacter.strength;
    document.getElementById("redDragonHealth").innerHTML = "Health: " + redDragon.health;
    document.getElementById("greenDragonHealth").innerHTML = "Health: " + greenDragon.health;
    document.getElementById("blackDragonHealth").innerHTML = "Health: " + blackDragon.health;
};

function start() {
    document.getElementById("adventure").style.visibility = 'visible';
    document.getElementById("character").style.display = 'block';
    document.getElementById("startButton").style.display = 'none';
};

/*At home*/
function firstStepLeft() {
    document.getElementById("home").style.display = "none";
    document.getElementById("store").style.display = "block";
};

function firstStepRight() {
    document.getElementById("home").style.display = "none";
    document.getElementById("advice").style.display = "block";
};
/*In front of the store*/
function storeLeft() {
    document.getElementById("store").style.display = "none";
    document.getElementById("redDragon").style.display = "block";
    document.getElementById("redMonster").style.display = "block";
}
function storeStraight() {
    document.getElementById("store").style.display = "none";
    document.getElementById("gate").style.display = "block"
}
function storeRight() {
    document.getElementById("store").style.display = "none";
    document.getElementById("advice").style.display = "block"
}
function storeInside() {
    document.getElementById("store").style.display = "none";
    document.getElementById("storeInside").style.display = "block";

    var doorSound = document.getElementById("doorSound");
    doorSound.play();

}
function storeBack() {
    document.getElementById("store").style.display = "none";
    document.getElementById("home").style.display = "block";
}
/*Inside the store*/
function storeOut() {
    document.getElementById("storeInside").style.display = "none";
    document.getElementById("store").style.display = "block";
    var doorSound = document.getElementById("doorSound");
    doorSound.play();
}
function buyHealth() {
    var coinSound = document.getElementById("coinSound");

    if (gameCharacter.money < 4 && gameCharacter.health < 10) {
        
        document.getElementById("modalStoreNoMoney").style.display = "block";
        var span = document.getElementById("closeStoreNoMoney");
        span.onclick = function () {
            document.getElementById("modalStoreNoMoney").style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == document.getElementById("modalStoreNoMoney")) {
                document.getElementById("modalStoreNoMoney").style.display = "none";
            }
        }

    } else if (gameCharacter.money < 4 && gameCharacter.health == 10) {
        
        document.getElementById("modalStoreNoMoneyHealthFull").style.display = "block";
        var span = document.getElementById("closeStoreNoMoneyHealthFull");
        span.onclick = function () {
            document.getElementById("modalStoreNoMoneyHealthFull").style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == document.getElementById("modalStoreNoMoneyHealthFull")) {
                document.getElementById("modalStoreNoMoneyHealthFull").style.display = "none";
            }
        }

    }

    else if (gameCharacter.health < 10 && gameCharacter.money >= 4) {
        coinSound.play();
        gameCharacter.health += 2;
        gameCharacter.money -= 4;
        document.getElementById("health").innerHTML = "Health: " + gameCharacter.health;
        /*document.getElementById("health").style.animation = "newItems 1s";
        document.getElementById("money").style.animation = "newItems 1s";*/
        document.getElementById("money").innerHTML = "Money: " + gameCharacter.money;
    } else if (gameCharacter.health = 10) {
        document.getElementById("health").innerHTML = "Health: " + gameCharacter.health;
        

        document.getElementById("modalStore").style.display = "block";
        var span = document.getElementById("closeStoreFull");
        span.onclick = function () {
            document.getElementById("modalStore").style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == document.getElementById("modalStore")) {
                document.getElementById("modalStore").style.display = "none";
            }
        }
    }

};
/*Wizard screen*/
function adviceLeft() {
    document.getElementById("advice").style.display = "none";
    document.getElementById("store").style.display = "block"
}
function adviceRight() {
    document.getElementById("advice").style.display = "none";
    document.getElementById("greenDragon").style.display = "block"
    document.getElementById("greenMonster").style.display = "block";
}
function adviceTalk() {
    document.getElementById("modalWizard").style.display = "block";
    var span = document.getElementById("closeWizard");
    span.onclick = function () {
        document.getElementById("modalWizard").style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == document.getElementById("modalWizard")) {
            document.getElementById("modalWizard").style.display = "none";
        }
    }
}

function adviceBack() {
    document.getElementById("advice").style.display = "none";
    document.getElementById("home").style.display = "block";
}

/*Red Dragon screen*/
function backRedDragon() {
    document.getElementById("redDragon").style.display = "none";
    document.getElementById("redMonster").style.display = "none";
    document.getElementById("store").style.display = "block";
}

function fightRedDragon() {
    redDragon.health -= gameCharacter.strength;
    gameCharacter.health -= 2;
    document.getElementById("redDragonHealth").innerHTML = "Health: " + redDragon.health;
    document.getElementById("health").innerHTML = "Health: " + gameCharacter.health;
   /* document.getElementById("health").style.animation = "newItems 1s";
    document.getElementById("redDragonHealth").style.animation = "newItems 1s"; */


    /*Red Dragon Fight result */
    if (gameCharacter.health <= 0 && redDragon.health >= 0) {
        
        document.getElementById("redDragon").style.display = "none";
        document.getElementById("redMonster").style.display = "none";
        document.getElementById("character").style.display = "none";
        document.getElementById("end").style.display = "block"
    }
    if (gameCharacter.health > 0 && redDragon.health <= 0) {
        var victorySound = document.getElementById("victorySound");
        victorySound.play();

        document.getElementById("modalRedDragonYouWon").style.display = "block";
        var span = document.getElementById("closeRedWon");
        span.onclick = function () {
            document.getElementById("modalRedDragonYouWon").style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == document.getElementById("modalRedDragonYouWon")) {
                document.getElementById("modalRedDragonYouWon").style.display = "none";
            }
        }

        document.getElementById("fightRedDragon").style.display = "none";
        document.getElementById("redMonster").style.display = "none";
        document.getElementById("redDragon-1").style.display = "none";
        document.getElementById("redDragon-image").style.display = "none";
        document.getElementById("redDragon-image-defeated").style.display = "flex";
        document.getElementById("swordDragon").style.display = "flex";
        document.getElementById("redDragon-2").style.display = "block";
        document.getElementById("straightRedDragon").style.display = "block";
        document.getElementById("backToRedDragon").style.display = "block";
    }
}

function takeSword() {
    document.getElementById("swordDragon").style.display = "none";
    document.getElementById("sword").style.display = "block";
    document.getElementById("fist").style.display = "none";
    gameCharacter.strength += 3;
    document.getElementById("strength").innerHTML = "Strength: " + gameCharacter.strength;
    /*document.getElementById("strength").style.animation = "newItems 1s";*/
    
}

function straightRedDragon() {
    document.getElementById("redDragon").style.display = "none";
    document.getElementById("redMonster").style.display = "none";
    document.getElementById("gate").style.display = "block"
}
/*Green Dragon screen*/
function backGreenDragon() {
    document.getElementById("greenDragon").style.display = "none";
    document.getElementById("greenMonster").style.display = "none";
    document.getElementById("advice").style.display = "block";
}

function fightGreenDragon() {
    greenDragon.health -= gameCharacter.strength;
    gameCharacter.health -= 2;
    document.getElementById("greenDragonHealth").innerHTML = "Health: " + greenDragon.health;
    document.getElementById("health").innerHTML = "Health: " + gameCharacter.health;
    /*document.getElementById("health").style.animation = "newItems 1s";
    document.getElementById("greenDragonHealth").style.animation = "newItems 1s";*/

    /* Green Dragon Fight result */
    if (gameCharacter.health <= 0 && greenDragon.health >= 0) {
        document.getElementById("greenDragon").style.display = "none";
        document.getElementById("greenMonster").style.display = "none";
        document.getElementById("character").style.display = "none";
        document.getElementById("end").style.display = "block"

        /*document.getElementById("modalGreenDragonYouLost").style.display = "block";
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function () {
            document.getElementById("modalGreenDragonYouLost").style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == document.getElementById("modalGreenDragonYouLost")) {
                document.getElementById("modalGreenDragonYouLost").style.display = "none";
            } */

        document.getElementById("greenDragon").style.display = "none";
        document.getElementById("greenMonster").style.display = "none";
        document.getElementById("end").style.display = "block"
    }
    if (gameCharacter.health > 0 && greenDragon.health <= 0) {
        var victorySound = document.getElementById("victorySound");
        victorySound.play();

        document.getElementById("modalGreenDragonYouWon").style.display = "block";
        var span = document.getElementById("closeGreenWon");
        span.onclick = function () {
            document.getElementById("modalGreenDragonYouWon").style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == document.getElementById("modalGreenDragonYouWon")) {
                document.getElementById("modalGreenDragonYouWon").style.display = "none";
            }
        }


        document.getElementById("fightGreenDragon").style.display = "none";
        document.getElementById("greenMonster").style.display = "none";
        document.getElementById("greenDragon-1").style.display = "none";
        document.getElementById("greenDragon-image").style.display = "none";
        document.getElementById("greenDragon-image-defeated").style.display = "block";
        document.getElementById("armorDragon").style.display = "flex";
        document.getElementById("greenDragon-2").style.display = "block";
        document.getElementById("straightGreenDragon").style.display = "block";
        document.getElementById("backToGreenDragon").style.display = "block";
    }
}

function takeArmor() {
    document.getElementById("armorDragon").style.display = "none";
    document.getElementById("vest").style.display = "block";
    document.getElementById("none").style.display = "none";
    gameCharacter.health += 9;
    document.getElementById("health").innerHTML = "Health: " + gameCharacter.health;
   /* document.getElementById("health").style.animation = "newItems 1s"; */
}

function straightGreenDragon() {
    document.getElementById("greenDragon").style.display = "none";
    document.getElementById("greenMonster").style.display = "none";
    document.getElementById("gate").style.display = "block"
}

/*Tower screen*/
function openGate() {
    document.getElementById("gate").style.display = "none";
    document.getElementById("blackDragon").style.display = "block";
    document.getElementById("blackMonster").style.display = "block";
}
function backGate() {
    document.getElementById("gate").style.display = "none";
    document.getElementById("store").style.display = "block";
}
function backToRedDragon() {
    document.getElementById("gate").style.display = "none";
    document.getElementById("redDragon").style.display = "block";
}
function backToGreenDragon() {
    document.getElementById("gate").style.display = "none";
    document.getElementById("greenDragon").style.display = "block";
}

/*Black Dragon screen*/
function fightDragonBoss() {
    blackDragon.health -= gameCharacter.strength;
    gameCharacter.health -= 6;

    document.getElementById("blackDragonHealth").innerHTML = "Health: " + blackDragon.health;
    document.getElementById("health").innerHTML = "Health: " + gameCharacter.health;
    /* document.getElementById("health").style.animation = "newItems 1s";
    document.getElementById("black DragonHealth").style.animation = "newItems 1s"; */

    /*Black Dragon fight result */
    if (gameCharacter.health <= 0) {
       
        document.getElementById("blackDragon").style.display = "none";
        document.getElementById("blackMonster").style.display = "none";
        document.getElementById("character").style.display = "none";
        document.getElementById("end").style.display = "block"
    }
    if (gameCharacter.health > 0 && blackDragon.health <= 0) {
        var finalVictory = document.getElementById("finalVictory");
        finalVictory.play();

        document.getElementById("modalBlackDragonYouWon").style.display = "block";
        var span = document.getElementById("closeBlackWon");
        span.onclick = function () {
            document.getElementById("modalBlackDragonYouWon").style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == document.getElementById("modalBlackDragonYouWon")) {
                document.getElementById("modalBlackDragonYouWon").style.display = "none";
            }
        }
     

       
        document.getElementById("blackDragon-1").style.display = "none";
        document.getElementById("blackMonster").style.display = "none";
        document.getElementById("character").style.display = "none";
        document.getElementById("blackDragon-image").style.display = "none";
        document.getElementById("blackDragon-image-defeated").style.display = "flex";
        document.getElementById("fightBlackDragon").style.display = "none";
        document.getElementById("backBlackDragon").style.display = "none";
        document.getElementById("blackDragon-2").style.display = "block";
        document.getElementById("goToThePrincess").style.display = "block";
    }
}

function backBlackDragon() {
    document.getElementById("blackDragon").style.display = "none";
    document.getElementById("blackMonster").style.display = "none";
    document.getElementById("gate").style.display = "block";
}

function goToThePrincess() {
    document.getElementById("blackDragon").style.display = "none";
    document.getElementById("princess").style.display = "block";
}
/* Princess screen */

function saveThePrincess() {
    var successSound = document.getElementById("successSound");
    successSound.play();
    document.getElementById("superheroPrincess").style.display = "inline";
    document.getElementById("heartPrincess").style.display = "inline";
    document.getElementById("princessImage").style.width = "20%";
    document.getElementById("saveThePrincess").style.display = "none";
    document.getElementById("princess").style.marginTop = "120px";
    document.getElementById("finalText").style.display = "none";
    document.getElementById("restart").style.display = "inline";
}

/* When you lose all your health or finished the game and want to play again*/
function restart() {
    location.reload();
};

