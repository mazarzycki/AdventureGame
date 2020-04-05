var gameCharacter = {
    name: "Tomas",
    health: 4,
    money: 4
};

var redDragon = {
    name: "Red Dragon",
    health: 4
};

var greenDragon = {
    name: "Green Dragon",
    health: 4
};

var blackDragon = {
    name: "Black Dragon",
    health: 8
}

window.onload = function characterProperties() {
    document.getElementById("firstName").innerHTML = "Name: " + gameCharacter.name;
    document.getElementById("health").innerHTML = "Health: " + gameCharacter.health;
    document.getElementById("money").innerHTML = "Money: " + gameCharacter.money;
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
    coinSound.play();
    if (gameCharacter.health != 10) {
        gameCharacter.health += 2;
        gameCharacter.money -= 4;
        document.getElementById("health").innerHTML = "Health: " + gameCharacter.health;
        document.getElementById("money").innerHTML = "Money: " + gameCharacter.money;
    } else {
        alert("Your health is full!");
    }
    if (gameCharacter.money <= 0) {
        alert("You are out of money!")
        document.getElementById("storeInside").style.display = "none";
        document.getElementById("end2").style.display = "block"
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
    var span = document.getElementsByClassName("close")[0];
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
    document.getElementById("wizardWords").style.display = "none";
    document.getElementById("home").style.display = "block";
}

/*Red Dragon screen*/
function backRedDragon() {
    document.getElementById("redDragon").style.display = "none";
    document.getElementById("redMonster").style.display = "none";
    document.getElementById("store").style.display = "block";
}

function fightRedDragon() {
    redDragon.health -= 4;
    gameCharacter.health -= 1;
    document.getElementById("redDragonHealth").innerHTML = "Health: " + redDragon.health;
    document.getElementById("health").innerHTML = "Health: " + gameCharacter.health;

    if (gameCharacter.health <= 0 && redDragon.health >= 0) {
        alert("You've lost!");
        document.getElementById("redDragon").style.display = "none";
        document.getElementById("redMonster").style.display = "none";
        document.getElementById("end").style.display = "block"
    }
    if (gameCharacter.health > 0 && redDragon.health <= 0) {
        alert("You've defeated the Red Dragon!");
        document.getElementById("fightRedDragon").style.display = "none";
        document.getElementById("redMonster").style.display = "none";
        document.getElementById("redDragon-1").style.display = "none";
        document.getElementById("redDragon-2").style.display = "block";
        document.getElementById("straightRedDragon").style.display = "block";
        document.getElementById("backToRedDragon").style.display = "block";
    }
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
    greenDragon.health -= 4;
    gameCharacter.health -= 1;
    document.getElementById("greenDragonHealth").innerHTML = "Health: " + greenDragon.health;
    document.getElementById("health").innerHTML = "Health: " + gameCharacter.health;

    if (gameCharacter.health <= 0 && greenDragon.health > 0) {
        alert("You've lost!");
        document.getElementById("greenDragon").style.display = "none";
        document.getElementById("greenMonster").style.display = "none";
        document.getElementById("end").style.display = "block"
    }
    if (gameCharacter.health > 0 && greenDragon.health <= 0) {
        alert("You've defeated the Green Dragon!");
        document.getElementById("fightGreenDragon").style.display = "none";
        document.getElementById("greenMonster").style.display = "none";
        document.getElementById("greenDragon-1").style.display = "none";
        document.getElementById("greenDragon-2").style.display = "block";
        document.getElementById("straightGreenDragon").style.display = "block";
        document.getElementById("backToGreenDragon").style.display = "block";
    }
}
function straightGreenDragon() {
    document.getElementById("greenDragon").style.display = "none";
    document.getElementById("greenMonster").style.display = "none";
    document.getElementById("gate").style.display = "block"
}

/*Gate screen*/
function openGate() {
    document.getElementById("gate").style.display = "none";
    document.getElementById("blackDragon").style.display = "block";
    document.getElementById("blackMonster").style.display = "block";
}
function backGate() {
    document.getElementById("gate").style.display = "none";
    document.getElementById("store").style.display = "block";
}

/*Black Dragon screen*/
function fightDragonBoss() {
    blackDragon.health -= 4;
    gameCharacter.health -= 1;

    document.getElementById("blackDragonHealth").innerHTML = "Health: " + blackDragon.health;
    document.getElementById("health").innerHTML = "Health: " + gameCharacter.health;
    if (gameCharacter.health <= 0 && blackDragon.health > 0) {
        alert("You've lost!");
        document.getElementById("blackDragon").style.display = "none";
        document.getElementById("blackMonster").style.display = "none";
        document.getElementById("end").style.display = "block"
    }
    if (gameCharacter.health > 0 && blackDragon.health <= 0) {
        alert("You've defeated the Black Dragon!");
        document.getElementById("blackDragon").style.display = "none";
        document.getElementById("blackMonster").style.display = "none";
        document.getElementById("character").style.display = "none";
        document.getElementById("princess").style.display = "block";
    }
}

function backBlackDragon() {
    document.getElementById("blackDragon").style.display = "none";
    document.getElementById("blackMonster").style.display = "none";
    document.getElementById("gate").style.display = "block";
}

/* Princess screen */

function saveThePrincess() {
    var successSound = document.getElementById("successSound");
    successSound.play();
    document.getElementById("superheroPrincess").style.display = "inline";
    document.getElementById("heartPrincess").style.display = "inline";
    document.getElementById("princessImage").style.width = "200px";
    document.getElementById("saveThePrincess").style.display = "none";
    document.getElementById("princess").style.marginTop = "120px";
    document.getElementById("finalText").style.display = "none";
}

/* When you lose all your health */
function restart() {
    document.getElementById("home").style.display = 'block';
    document.getElementById("end").style.display = 'none';
};

function restart2() {
    document.getElementById("home").style.display = 'block';
    document.getElementById("end2").style.display = 'none';
};