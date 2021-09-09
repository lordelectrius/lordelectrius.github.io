function hit() {
    let score3 = parseInt(document.body.querySelector("#cardContainer div:nth-child(5) .number").textContent)
    let score4 = parseInt(document.body.querySelector("#cardContainer div:nth-child(7) .number").textContent)
    let score5 = parseInt(document.body.querySelector("#cardContainer div:nth-child(9) .number").textContent)
    let score6 = parseInt(document.body.querySelector("#cardContainer div:nth-child(11) .number").textContent)
    if (score3 == 0) {
        score3 = generateRand();
        document.body.querySelector("#cardContainer div:nth-child(5) .number").textContent = score3
        document.body.querySelector("#cardContainer div:nth-child(5) .numberBottom").textContent = score3
        document.body.querySelector("#cardContainer div:nth-child(5) .flip-card-inner").style.transform = "rotateY(0deg)"
        console.log("Successfully Hit")
    } else if (score4 == 0) {
        score4 = generateRand();
        document.body.querySelector("#cardContainer div:nth-child(7) .number").textContent = score4
        document.body.querySelector("#cardContainer div:nth-child(7) .numberBottom").textContent = score4
        document.body.querySelector("#cardContainer div:nth-child(7) .flip-card-inner").style.transform = "rotateY(0deg)"
        console.log("Successfully Hit")
    } else if (score5 == 0) {
        score5 = generateRand();
        document.body.querySelector("#cardContainer div:nth-child(9) .number").textContent = score5
        document.body.querySelector("#cardContainer div:nth-child(9) .numberBottom").textContent = score5
        document.body.querySelector("#cardContainer div:nth-child(9) .flip-card-inner").style.transform = "rotateY(0deg)"
        console.log("Successfully Hit")
    }
    else if (score6 == 0) {
        score5 = generateRand();
        document.body.querySelector("#cardContainer div:nth-child(11) .number").textContent = score5
        document.body.querySelector("#cardContainer div:nth-child(11) .numberBottom").textContent = score5
        document.body.querySelector("#cardContainer div:nth-child(11) .flip-card-inner").style.transform = "rotateY(0deg)"
        console.log("Successfully Hit")
    }
    calculateScore()
}

async function stand() {
    let playerScore = document.body.querySelector("#yourScore").textContent
    let houseScore = generateRandHouse()
    document.getElementById("houseScore").textContent = houseScore;
    await new Promise(r => setTimeout(r, 200));
    if (playerScore > houseScore) {
        win()
    }
    else {
        loss()
    }
}

function generateRand() {
    let numberThing = Math.floor(Math.random() * 10 + 2)
    if (numberThing == 11) {
        numberThing = "A"
    }
    return numberThing
}

function generateRandHouse() {
    let numberThing = Math.floor(Math.random() * 11 + 10)
    return numberThing
}

function assignFirstCards() {
    let CO1 = document.body.querySelector(".card1 .number")
    let CO2 = document.body.querySelector(".card1 .numberBottom")
    let CT1 = document.body.querySelector(".card2 .number")
    let CT2 = document.body.querySelector(".card2 .numberBottom")
    CO1.textContent = generateRand()
    CO2.textContent = CO1.textContent
    CT1.textContent = generateRand()
    CT2.textContent = CT1.textContent
    console.log("First Two Cards Dealt")
}

function calculateScore() {
    let score1 = document.body.querySelector("#cardContainer div:nth-child(1) .number").textContent
    let score2 = document.body.querySelector("#cardContainer div:nth-child(3) .number").textContent
    let score3 = document.body.querySelector("#cardContainer div:nth-child(5) .number").textContent
    let score4 = document.body.querySelector("#cardContainer div:nth-child(7) .number").textContent
    let score5 = document.body.querySelector("#cardContainer div:nth-child(9) .number").textContent
    let score6 = document.body.querySelector("#cardContainer div:nth-child(11) .number").textContent
    let runningScore = 0;

    if (score1 != "A") {
        runningScore += parseInt(score1);
    }
    if (score2 != "A") {
        runningScore += parseInt(score2);
    }
    if (score3 != "A") {
        runningScore += parseInt(score3);
    }
    if (score4 != "A") {
        runningScore += parseInt(score4);
    }
    if (score5 != "A") {
        runningScore += parseInt(score5);
    }
    if (score6 != "A") {
        runningScore += parseInt(score6);
    }

    if (score1 == "A") {
        if (runningScore + 11 <= 21) {
            score1 = 11;
        } else {
            score1 = 1
        }
    } else {
        score1 = parseInt(score1)
    }
    if (score2 == "A") {
        if (runningScore + 11 <= 21) {
            score2 = 11;
        } else {
            score2 = 1
        }
    } else {
        score2 = parseInt(score2)
    }
    if (score3 == "A") {
        if (runningScore + 11 <= 21) {
            score3 = 11;
        } else {
            score3 = 1
        }
    } else {
        score3 = parseInt(score3)
    }
    if (score4 == "A") {
        if (runningScore + 11 <= 21) {
            score4 = 11;
        } else {
            score4 = 1
        }
    } else {
        score4 = parseInt(score4)
    }
    if (score5 == "A") {
        if (runningScore + 11 <= 21) {
            score5 = 11;
        } else {
            score5 = 1
        }
    } else {
        score5 = parseInt(score5)
    }
    if (score6 == "A") {
        if (runningScore + 11 <= 21) {
            score6 = 11;
        } else {
            score6 = 1
        }
    } else {
        score6 = parseInt(score6)
    }

    let totalScore = score1 + score2 + score3 + score4 + score5 + score6;
    console.log("Score = " + totalScore)
    document.body.querySelector("#yourScore").textContent = totalScore;
    console.log("Score Updated")
    if (totalScore > 21) {
        loss()
    }
}

function resetGame() {
    document.body.querySelector("#cardContainer div:nth-child(1) .number").textContent = 0
    document.body.querySelector("#cardContainer div:nth-child(1) .numberBottom").textContent = 0
    // document.body.querySelector("#cardContainer div:nth-child(1) .flip-card-inner").style.transform = "rotateY(180deg)"
    
    document.body.querySelector("#cardContainer div:nth-child(3) .number").textContent = 0
    document.body.querySelector("#cardContainer div:nth-child(3) .numberBottom").textContent = 0
    // // document.body.querySelector("#cardContainer div:nth-child(3) .flip-card-inner").style.transform = "rotateY(180deg)"
    
    document.body.querySelector("#cardContainer div:nth-child(5) .number").textContent = 0
    document.body.querySelector("#cardContainer div:nth-child(5) .numberBottom").textContent = 0
    document.body.querySelector("#cardContainer div:nth-child(5) .flip-card-inner").style.transform = "rotateY(180deg)"
    
    document.body.querySelector("#cardContainer div:nth-child(7) .number").textContent = 0
    document.body.querySelector("#cardContainer div:nth-child(7) .numberBottom").textContent = 0
    document.body.querySelector("#cardContainer div:nth-child(7) .flip-card-inner").style.transform = "rotateY(180deg)"
    
    document.body.querySelector("#cardContainer div:nth-child(9) .number").textContent = 0
    document.body.querySelector("#cardContainer div:nth-child(9) .numberBottom").textContent = 0
    document.body.querySelector("#cardContainer div:nth-child(9) .flip-card-inner").style.transform = "rotateY(180deg)"
    
    document.body.querySelector("#cardContainer div:nth-child(11) .number").textContent = 0
    document.body.querySelector("#cardContainer div:nth-child(11) .numberBottom").textContent = 0
    document.body.querySelector("#cardContainer div:nth-child(11) .flip-card-inner").style.transform = "rotateY(180deg)"
    
    document.getElementById("houseScore").textContent = "???";

    console.log("Game Reset")
    assignFirstCards()
    calculateScore()
}

async function loss() {
    console.log("Skill Issue")
    document.getElementById("loseScreen").style.visibility = "visible"
    document.getElementById("loseScreen").style.backgroundColor = "rgba(0.5,0.5,0.5,0.75)"
    document.getElementById("lossText").style.color = "rgba(153, 255, 0, 1)"
    await new Promise(r => setTimeout(r, 2000));
    resetGame()
    document.getElementById("loseScreen").style.backgroundColor = "rgba(0.5,0.5,0.5,0)"
    document.getElementById("lossText").style.color = "rgba(153, 255, 0, 0)"
    await new Promise(r => setTimeout(r, 2000));
    document.getElementById("loseScreen").style.visibility = "hidden"
}

async function win() {
    console.log("Gamer")
    document.getElementById("loseScreen").style.visibility = "visible"
    document.getElementById("loseScreen").style.backgroundColor = "rgba(0.5,0.5,0.5,0.75)"
    document.getElementById("winText").style.color = "rgba(153, 255, 0, 1)"
    await new Promise(r => setTimeout(r, 2000));
    resetGame()
    document.getElementById("loseScreen").style.backgroundColor = "rgba(0.5,0.5,0.5,0)"
    document.getElementById("winText").style.color = "rgba(153, 255, 0, 0)"
    await new Promise(r => setTimeout(r, 2000));
    document.getElementById("loseScreen").style.visibility = "hidden"
}

console.log("Script Successfully Started")
assignFirstCards()
calculateScore()