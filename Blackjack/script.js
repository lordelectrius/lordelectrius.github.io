function hit() {
    let score3 = parseInt(document.body.querySelector("#cardContainer div:nth-child(5) .number").textContent)
    let score4 = parseInt(document.body.querySelector("#cardContainer div:nth-child(7) .number").textContent)
    let score5 = parseInt(document.body.querySelector("#cardContainer div:nth-child(9) .number").textContent)
    let score6 = parseInt(document.body.querySelector("#cardContainer div:nth-child(11) .number").textContent)
    let score7 = parseInt(document.body.querySelector("#cardContainer div:nth-child(13) .number").textContent)
    if (score3 == 0) {
        score3 = generateRand();
        document.body.querySelector("#cardContainer div:nth-child(5) .number").textContent = score3
        document.body.querySelector("#cardContainer div:nth-child(5) .numberBottom").textContent = score3
        document.body.querySelector("#cardContainer div:nth-child(5) .flip-card-inner").style.transform = "rotateY(0deg)"
        updateCardSymbols(3, score3)
        console.log("Successfully Hit")
    } else if (score4 == 0) {
        score4 = generateRand();
        document.body.querySelector("#cardContainer div:nth-child(7) .number").textContent = score4
        document.body.querySelector("#cardContainer div:nth-child(7) .numberBottom").textContent = score4
        document.body.querySelector("#cardContainer div:nth-child(7) .flip-card-inner").style.transform = "rotateY(0deg)"
        updateCardSymbols(4, score4)
        console.log("Successfully Hit")
    } else if (score5 == 0) {
        score5 = generateRand();
        document.body.querySelector("#cardContainer div:nth-child(9) .number").textContent = score5
        document.body.querySelector("#cardContainer div:nth-child(9) .numberBottom").textContent = score5
        document.body.querySelector("#cardContainer div:nth-child(9) .flip-card-inner").style.transform = "rotateY(0deg)"
        updateCardSymbols(5, score5)
        console.log("Successfully Hit")
    } else if (score6 == 0) {
        score6 = generateRand();
        document.body.querySelector("#cardContainer div:nth-child(11) .number").textContent = score6
        document.body.querySelector("#cardContainer div:nth-child(11) .numberBottom").textContent = score6
        document.body.querySelector("#cardContainer div:nth-child(11) .flip-card-inner").style.transform = "rotateY(0deg)"
        updateCardSymbols(6, score6)
        console.log("Successfully Hit")
    } else if (score7 == 0) {
        score7 = generateRand();
        document.body.querySelector("#cardContainer div:nth-child(13) .number").textContent = score7
        document.body.querySelector("#cardContainer div:nth-child(13) .numberBottom").textContent = score7
        document.body.querySelector("#cardContainer div:nth-child(13) .flip-card-inner").style.transform = "rotateY(0deg)"
        updateCardSymbols(7, score7)
        console.log("Successfully Hit")
    } 
    calculateScore()
}

function updateCardSymbols(cardNumber, value) {
    let cardInQuestion;
    if (cardNumber == 1) {
        cardInQuestion = document.body.querySelector(".card1")
    } else if (cardNumber == 2) {
        cardInQuestion = document.body.querySelector(".card2")
    } else if (cardNumber == 3) {
        cardInQuestion = document.body.querySelector("#cardContainer div:nth-child(5) .flip-card-inner")
    } else if (cardNumber == 4) {
        cardInQuestion = document.body.querySelector("#cardContainer div:nth-child(7) .flip-card-inner")
    } else if (cardNumber == 5) {
        cardInQuestion = document.body.querySelector("#cardContainer div:nth-child(9) .flip-card-inner")
    } else if (cardNumber == 6) {
        cardInQuestion = document.body.querySelector("#cardContainer div:nth-child(11) .flip-card-inner")
    } else if (cardNumber == 7) {
        cardInQuestion = document.body.querySelector("#cardContainer div:nth-child(13) .flip-card-inner")
    }

    let suit = Math.floor(Math.random() * 4)
    let threeContainer = cardInQuestion.querySelector(".cardContainerThingCenter:nth-child(2)")
    let fourContainer = cardInQuestion.querySelector(".cardContainerThingCenter:nth-child(3)")

    let symbol1t = threeContainer.querySelector("img:nth-child(2)")
    let symbol2t = threeContainer.querySelector("img:nth-child(3)")
    let symbol3t = threeContainer.querySelector("img:nth-child(4)")
    let symbol4t = threeContainer.querySelector("img:nth-child(8)")
    let symbol5t = threeContainer.querySelector("img:nth-child(9)")
    let symbol6t = threeContainer.querySelector("img:nth-child(10)")
    let symbol7t = threeContainer.querySelector("img:nth-child(14)")
    let symbol8t = threeContainer.querySelector("img:nth-child(15)")
    let symbol9t = threeContainer.querySelector("img:nth-child(16)")

    let symbol1f = fourContainer.querySelector("img:nth-child(2)")
    let symbol2f = fourContainer.querySelector("img:nth-child(3)")
    let symbol3f = fourContainer.querySelector("img:nth-child(4)")
    let symbol4f = fourContainer.querySelector("img:nth-child(5)")
    let symbol5f = fourContainer.querySelector("img:nth-child(9)")
    let symbol6f = fourContainer.querySelector("img:nth-child(11)")
    let symbol7f = fourContainer.querySelector("img:nth-child(15)")
    let symbol8f = fourContainer.querySelector("img:nth-child(16)")
    let symbol9f = fourContainer.querySelector("img:nth-child(17)")
    let symbol10f = fourContainer.querySelector("img:nth-child(18)")

    if (value == 1 || value == 11 || value == "A") {
        symbol5t.style.visibility = "visible"
        if (suit == 0) {
            symbol5t.src = "Images/Card_club.png"
        } else if (suit == 1) {
            symbol5t.src = "Images/Card_diamond.png"
        } else if (suit == 2) {
            symbol5t.src = "Images/Card_heart.png"
        } else if (suit == 3) {
            symbol5t.src = "Images/Card_spade.png"
        }

    } else if (value == 2) {
        symbol4t.style.visibility = "visible"
        symbol6t.style.visibility = "visible"
        symbol6t.style.transform = "rotate(180deg)"
        if (suit == 0) {
            symbol4t.src = "Images/Card_club.png"
            symbol6t.src = "Images/Card_club.png"
        } else if (suit == 1) {
            symbol4t.src = "Images/Card_diamond.png"
            symbol6t.src = "Images/Card_diamond.png"
        } else if (suit == 2) {
            symbol4t.src = "Images/Card_heart.png"
            symbol6t.src = "Images/Card_heart.png"
        } else if (suit == 3) {
            symbol4t.src = "Images/Card_spade.png"
            symbol6t.src = "Images/Card_spade.png"
        }

    } else if (value == 3) {
        symbol4t.style.visibility = "visible"
        symbol5t.style.visibility = "visible"
        symbol6t.style.visibility = "visible"
        symbol6t.style.transform = "rotate(180deg)"
        if (suit == 0) {
            symbol4t.src = "Images/Card_club.png"
            symbol5t.src = "Images/Card_club.png"
            symbol6t.src = "Images/Card_club.png"
        } else if (suit == 1) {
            symbol4t.src = "Images/Card_diamond.png"
            symbol5t.src = "Images/Card_diamond.png"
            symbol6t.src = "Images/Card_diamond.png"
        } else if (suit == 2) {
            symbol4t.src = "Images/Card_heart.png"
            symbol5t.src = "Images/Card_heart.png"
            symbol6t.src = "Images/Card_heart.png"
        } else if (suit == 3) {
            symbol4t.src = "Images/Card_spade.png"
            symbol5t.src = "Images/Card_spade.png"
            symbol6t.src = "Images/Card_spade.png"
        }

    } else if (value == 4) {
        symbol1t.style.visibility = "visible"
        symbol3t.style.visibility = "visible"
        symbol7t.style.visibility = "visible"
        symbol9t.style.visibility = "visible"
        symbol3t.style.transform = "rotate(180deg)"
        symbol9t.style.transform = "rotate(180deg)"
        if (suit == 0) {
            symbol1t.src = "Images/Card_club.png"
            symbol3t.src = "Images/Card_club.png"
            symbol7t.src = "Images/Card_club.png"
            symbol9t.src = "Images/Card_club.png"
        } else if (suit == 1) {
            symbol1t.src = "Images/Card_diamond.png"
            symbol3t.src = "Images/Card_diamond.png"
            symbol7t.src = "Images/Card_diamond.png"
            symbol9t.src = "Images/Card_diamond.png"
        } else if (suit == 2) {
            symbol1t.src = "Images/Card_heart.png"
            symbol3t.src = "Images/Card_heart.png"
            symbol7t.src = "Images/Card_heart.png"
            symbol9t.src = "Images/Card_heart.png"
        } else if (suit == 3) {
            symbol1t.src = "Images/Card_spade.png"
            symbol3t.src = "Images/Card_spade.png"
            symbol7t.src = "Images/Card_spade.png"
            symbol9t.src = "Images/Card_spade.png"
        }

    } else if (value == 5) {
        symbol1t.style.visibility = "visible"
        symbol3t.style.visibility = "visible"
        symbol5t.style.visibility = "visible"
        symbol7t.style.visibility = "visible"
        symbol9t.style.visibility = "visible"
        symbol3t.style.transform = "rotate(180deg)"
        symbol9t.style.transform = "rotate(180deg)"
        if (suit == 0) {
            symbol1t.src = "Images/Card_club.png"
            symbol3t.src = "Images/Card_club.png"
            symbol5t.src = "Images/Card_club.png"
            symbol7t.src = "Images/Card_club.png"
            symbol9t.src = "Images/Card_club.png"
        } else if (suit == 1) {
            symbol1t.src = "Images/Card_diamond.png"
            symbol3t.src = "Images/Card_diamond.png"
            symbol5t.src = "Images/Card_diamond.png"
            symbol7t.src = "Images/Card_diamond.png"
            symbol9t.src = "Images/Card_diamond.png"
        } else if (suit == 2) {
            symbol1t.src = "Images/Card_heart.png"
            symbol3t.src = "Images/Card_heart.png"
            symbol5t.src = "Images/Card_heart.png"
            symbol7t.src = "Images/Card_heart.png"
            symbol9t.src = "Images/Card_heart.png"
        } else if (suit == 3) {
            symbol1t.src = "Images/Card_spade.png"
            symbol3t.src = "Images/Card_spade.png"
            symbol5t.src = "Images/Card_spade.png"
            symbol7t.src = "Images/Card_spade.png"
            symbol9t.src = "Images/Card_spade.png"
        }

    } else if (value == 6) {
        symbol1t.style.visibility = "visible"
        symbol2t.style.visibility = "visible"
        symbol3t.style.visibility = "visible"
        symbol7t.style.visibility = "visible"
        symbol8t.style.visibility = "visible"
        symbol9t.style.visibility = "visible"
        symbol3t.style.transform = "rotate(180deg)"
        symbol9t.style.transform = "rotate(180deg)"
        if (suit == 0) {
            symbol1t.src = "Images/Card_club.png"
            symbol2t.src = "Images/Card_club.png"
            symbol3t.src = "Images/Card_club.png"
            symbol7t.src = "Images/Card_club.png"
            symbol8t.src = "Images/Card_club.png"
            symbol9t.src = "Images/Card_club.png"
        } else if (suit == 1) {
            symbol1t.src = "Images/Card_diamond.png"
            symbol2t.src = "Images/Card_diamond.png"
            symbol3t.src = "Images/Card_diamond.png"
            symbol7t.src = "Images/Card_diamond.png"
            symbol8t.src = "Images/Card_diamond.png"
            symbol9t.src = "Images/Card_diamond.png"
        } else if (suit == 2) {
            symbol1t.src = "Images/Card_heart.png"
            symbol2t.src = "Images/Card_heart.png"
            symbol3t.src = "Images/Card_heart.png"
            symbol7t.src = "Images/Card_heart.png"
            symbol8t.src = "Images/Card_heart.png"
            symbol9t.src = "Images/Card_heart.png"
        } else if (suit == 3) {
            symbol1t.src = "Images/Card_spade.png"
            symbol2t.src = "Images/Card_spade.png"
            symbol3t.src = "Images/Card_spade.png"
            symbol7t.src = "Images/Card_spade.png"
            symbol8t.src = "Images/Card_spade.png"
            symbol9t.src = "Images/Card_spade.png"
        }

    } else if (value == 7) {
        symbol1t.style.visibility = "visible"
        symbol2t.style.visibility = "visible"
        symbol3t.style.visibility = "visible"
        symbol7t.style.visibility = "visible"
        symbol8t.style.visibility = "visible"
        symbol9t.style.visibility = "visible"
        symbol5f.style.visibility = "visible"
        symbol3t.style.transform = "rotate(180deg)"
        symbol9t.style.transform = "rotate(180deg)"
        if (suit == 0) {
            symbol1t.src = "Images/Card_club.png"
            symbol2t.src = "Images/Card_club.png"
            symbol3t.src = "Images/Card_club.png"
            symbol5f.src = "Images/Card_club.png"
            symbol7t.src = "Images/Card_club.png"
            symbol8t.src = "Images/Card_club.png"
            symbol9t.src = "Images/Card_club.png"
        } else if (suit == 1) {
            symbol1t.src = "Images/Card_diamond.png"
            symbol2t.src = "Images/Card_diamond.png"
            symbol3t.src = "Images/Card_diamond.png"
            symbol5f.src = "Images/Card_diamond.png"
            symbol7t.src = "Images/Card_diamond.png"
            symbol8t.src = "Images/Card_diamond.png"
            symbol9t.src = "Images/Card_diamond.png"
        } else if (suit == 2) {
            symbol1t.src = "Images/Card_heart.png"
            symbol2t.src = "Images/Card_heart.png"
            symbol3t.src = "Images/Card_heart.png"
            symbol5f.src = "Images/Card_heart.png"
            symbol7t.src = "Images/Card_heart.png"
            symbol8t.src = "Images/Card_heart.png"
            symbol9t.src = "Images/Card_heart.png"
        } else if (suit == 3) {
            symbol1t.src = "Images/Card_spade.png"
            symbol2t.src = "Images/Card_spade.png"
            symbol3t.src = "Images/Card_spade.png"
            symbol5f.src = "Images/Card_spade.png"
            symbol7t.src = "Images/Card_spade.png"
            symbol8t.src = "Images/Card_spade.png"
            symbol9t.src = "Images/Card_spade.png"
        }

    } else if (value == 8) {
        symbol1f.style.visibility = "visible"
        symbol2f.style.visibility = "visible"
        symbol3f.style.visibility = "visible"
        symbol4f.style.visibility = "visible"
        symbol7f.style.visibility = "visible"
        symbol8f.style.visibility = "visible"
        symbol9f.style.visibility = "visible"
        symbol10f.style.visibility = "visible"
        symbol3f.style.transform = "rotate(180deg)"
        symbol4f.style.transform = "rotate(180deg)"
        symbol9f.style.transform = "rotate(180deg)"
        symbol10f.style.transform = "rotate(180deg)"
        if (suit == 0) {
            symbol1f.src = "Images/Card_club.png"
            symbol2f.src = "Images/Card_club.png"
            symbol3f.src = "Images/Card_club.png"
            symbol4f.src = "Images/Card_club.png"
            symbol7f.src = "Images/Card_club.png"
            symbol8f.src = "Images/Card_club.png"
            symbol9f.src = "Images/Card_club.png"
            symbol10f.src = "Images/Card_club.png"
        } else if (suit == 1) {
            symbol1f.src = "Images/Card_diamond.png"
            symbol2f.src = "Images/Card_diamond.png"
            symbol3f.src = "Images/Card_diamond.png"
            symbol4f.src = "Images/Card_diamond.png"
            symbol7f.src = "Images/Card_diamond.png"
            symbol8f.src = "Images/Card_diamond.png"
            symbol9f.src = "Images/Card_diamond.png"
            symbol10f.src = "Images/Card_diamond.png"
        } else if (suit == 2) {
            symbol1f.src = "Images/Card_heart.png"
            symbol2f.src = "Images/Card_heart.png"
            symbol3f.src = "Images/Card_heart.png"
            symbol4f.src = "Images/Card_heart.png"
            symbol7f.src = "Images/Card_heart.png"
            symbol8f.src = "Images/Card_heart.png"
            symbol9f.src = "Images/Card_heart.png"
            symbol10f.src = "Images/Card_heart.png"
        } else if (suit == 3) {
            symbol1f.src = "Images/Card_spade.png"
            symbol2f.src = "Images/Card_spade.png"
            symbol3f.src = "Images/Card_spade.png"
            symbol4f.src = "Images/Card_spade.png"
            symbol7f.src = "Images/Card_spade.png"
            symbol8f.src = "Images/Card_spade.png"
            symbol9f.src = "Images/Card_spade.png"
            symbol10f.src = "Images/Card_spade.png"
        }

    }

    else if (value == 9) {
        symbol1f.style.visibility = "visible"
        symbol2f.style.visibility = "visible"
        symbol3f.style.visibility = "visible"
        symbol4f.style.visibility = "visible"
        symbol5f.style.visibility = "visible"
        symbol7f.style.visibility = "visible"
        symbol8f.style.visibility = "visible"
        symbol9f.style.visibility = "visible"
        symbol10f.style.visibility = "visible"
        symbol3f.style.transform = "rotate(180deg)"
        symbol4f.style.transform = "rotate(180deg)"
        symbol9f.style.transform = "rotate(180deg)"
        symbol10f.style.transform = "rotate(180deg)"
        if (suit == 0) {
            symbol1f.src = "Images/Card_club.png"
            symbol2f.src = "Images/Card_club.png"
            symbol3f.src = "Images/Card_club.png"
            symbol4f.src = "Images/Card_club.png"
            symbol5f.src = "Images/Card_club.png"
            symbol7f.src = "Images/Card_club.png"
            symbol8f.src = "Images/Card_club.png"
            symbol9f.src = "Images/Card_club.png"
            symbol10f.src = "Images/Card_club.png"
        } else if (suit == 1) {
            symbol1f.src = "Images/Card_diamond.png"
            symbol2f.src = "Images/Card_diamond.png"
            symbol3f.src = "Images/Card_diamond.png"
            symbol4f.src = "Images/Card_diamond.png"
            symbol5f.src = "Images/Card_diamond.png"
            symbol7f.src = "Images/Card_diamond.png"
            symbol8f.src = "Images/Card_diamond.png"
            symbol9f.src = "Images/Card_diamond.png"
            symbol10f.src = "Images/Card_diamond.png"
        } else if (suit == 2) {
            symbol1f.src = "Images/Card_heart.png"
            symbol2f.src = "Images/Card_heart.png"
            symbol3f.src = "Images/Card_heart.png"
            symbol4f.src = "Images/Card_heart.png"
            symbol5f.src = "Images/Card_heart.png"
            symbol7f.src = "Images/Card_heart.png"
            symbol8f.src = "Images/Card_heart.png"
            symbol9f.src = "Images/Card_heart.png"
            symbol10f.src = "Images/Card_heart.png"
        } else if (suit == 3) {
            symbol1f.src = "Images/Card_spade.png"
            symbol2f.src = "Images/Card_spade.png"
            symbol3f.src = "Images/Card_spade.png"
            symbol4f.src = "Images/Card_spade.png"
            symbol5f.src = "Images/Card_spade.png"
            symbol7f.src = "Images/Card_spade.png"
            symbol8f.src = "Images/Card_spade.png"
            symbol9f.src = "Images/Card_spade.png"
            symbol10f.src = "Images/Card_spade.png"
        }

    }

    else if (value == 10) {
        symbol1f.style.visibility = "visible"
        symbol2f.style.visibility = "visible"
        symbol3f.style.visibility = "visible"
        symbol4f.style.visibility = "visible"
        symbol5f.style.visibility = "visible"
        symbol6f.style.visibility = "visible"
        symbol7f.style.visibility = "visible"
        symbol8f.style.visibility = "visible"
        symbol9f.style.visibility = "visible"
        symbol10f.style.visibility = "visible"
        symbol3f.style.transform = "rotate(180deg)"
        symbol4f.style.transform = "rotate(180deg)"
        symbol6f.style.transform = "rotate(180deg)"
        symbol9f.style.transform = "rotate(180deg)"
        symbol10f.style.transform = "rotate(180deg)"
        if (suit == 0) {
            symbol1f.src = "Images/Card_club.png"
            symbol2f.src = "Images/Card_club.png"
            symbol3f.src = "Images/Card_club.png"
            symbol4f.src = "Images/Card_club.png"
            symbol5f.src = "Images/Card_club.png"
            symbol6f.src = "Images/Card_club.png"
            symbol7f.src = "Images/Card_club.png"
            symbol8f.src = "Images/Card_club.png"
            symbol9f.src = "Images/Card_club.png"
            symbol10f.src = "Images/Card_club.png"
        } else if (suit == 1) {
            symbol1f.src = "Images/Card_diamond.png"
            symbol2f.src = "Images/Card_diamond.png"
            symbol3f.src = "Images/Card_diamond.png"
            symbol4f.src = "Images/Card_diamond.png"
            symbol5f.src = "Images/Card_diamond.png"
            symbol6f.src = "Images/Card_diamond.png"
            symbol7f.src = "Images/Card_diamond.png"
            symbol8f.src = "Images/Card_diamond.png"
            symbol9f.src = "Images/Card_diamond.png"
            symbol10f.src = "Images/Card_diamond.png"
        } else if (suit == 2) {
            symbol1f.src = "Images/Card_heart.png"
            symbol2f.src = "Images/Card_heart.png"
            symbol3f.src = "Images/Card_heart.png"
            symbol4f.src = "Images/Card_heart.png"
            symbol5f.src = "Images/Card_heart.png"
            symbol6f.src = "Images/Card_heart.png"
            symbol7f.src = "Images/Card_heart.png"
            symbol8f.src = "Images/Card_heart.png"
            symbol9f.src = "Images/Card_heart.png"
            symbol10f.src = "Images/Card_heart.png"
        } else if (suit == 3) {
            symbol1f.src = "Images/Card_spade.png"
            symbol2f.src = "Images/Card_spade.png"
            symbol3f.src = "Images/Card_spade.png"
            symbol4f.src = "Images/Card_spade.png"
            symbol5f.src = "Images/Card_spade.png"
            symbol6f.src = "Images/Card_spade.png"
            symbol7f.src = "Images/Card_spade.png"
            symbol8f.src = "Images/Card_spade.png"
            symbol9f.src = "Images/Card_spade.png"
            symbol10f.src = "Images/Card_spade.png"
        }

    }

    console.log("Updated card " + cardNumber + " to " + value + " with suit number " + suit)
}

async function stand() {
    let playerScore = document.body.querySelector("#yourScore").textContent
    let houseScore = generateRandHouse()
    document.getElementById("houseScore").textContent = houseScore;
    await new Promise(r => setTimeout(r, 200));
    if (playerScore > houseScore) {
        win()
    } else {
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
    let numberThing = Math.floor(Math.random() * 9 + 13)
    return numberThing
}

function assignFirstCards() {
    let CO1 = document.body.querySelector(".card1 .number")
    let CO2 = document.body.querySelector(".card1 .numberBottom")
    let CT1 = document.body.querySelector(".card2 .number")
    let CT2 = document.body.querySelector(".card2 .numberBottom")
    let score1 = generateRand()
    let score2 = generateRand()
    CO1.textContent = score1
    CO2.textContent = CO1.textContent
    updateCardSymbols(1, score1)
    CT1.textContent = score2
    CT2.textContent = CT1.textContent
    updateCardSymbols(2, score2)
    console.log("First Two Cards Dealt")
}

function calculateScore() {
    let score1 = document.body.querySelector("#cardContainer div:nth-child(1) .number").textContent
    let score2 = document.body.querySelector("#cardContainer div:nth-child(3) .number").textContent
    let score3 = document.body.querySelector("#cardContainer div:nth-child(5) .number").textContent
    let score4 = document.body.querySelector("#cardContainer div:nth-child(7) .number").textContent
    let score5 = document.body.querySelector("#cardContainer div:nth-child(9) .number").textContent
    let score6 = document.body.querySelector("#cardContainer div:nth-child(11) .number").textContent
    let score7 = document.body.querySelector("#cardContainer div:nth-child(13) .number").textContent
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
    if (score7 != "A") {
        runningScore += parseInt(score7);
    }

    if (score1 == "A") {
        if (runningScore + 11 <= 21) {
            score1 = 11;
            runningScore += score1
        } else {
            score1 = 1
            runningScore += score1
        }
    } else {
        score1 = parseInt(score1)
    }
    if (score2 == "A") {
        if (runningScore + 11 <= 21) {
            score2 = 11;
            runningScore += score2
        } else {
            score2 = 1
            runningScore += score2
        }
    } else {
        score2 = parseInt(score2)
    }
    if (score3 == "A") {
        if (runningScore + 11 <= 21) {
            score3 = 11;
            runningScore += score3
        } else {
            score3 = 1
            runningScore += score3
        }
    } else {
        score3 = parseInt(score3)
    }
    if (score4 == "A") {
        if (runningScore + 11 <= 21) {
            score4 = 11;
            runningScore += score4
        } else {
            score4 = 1
            runningScore += score4
        }
    } else {
        score4 = parseInt(score4)
    }
    if (score5 == "A") {
        if (runningScore + 11 <= 21) {
            score5 = 11;
            runningScore += score5
        } else {
            score5 = 1
            runningScore += score5
        }
    } else {
        score5 = parseInt(score5)
    }
    if (score6 == "A") {
        if (runningScore + 11 <= 21) {
            score6 = 11;
            runningScore += score6
        } else {
            score6 = 1
            runningScore += score6
        }
    } else {
        score6 = parseInt(score6)
    }
    if (score7 == "A") {
        if (runningScore + 11 <= 21) {
            score7 = 11;
            runningScore += score7
        } else {
            score7 = 1
            runningScore += score7
        }
    } else {
        score7 = parseInt(score7)
    }

    let totalScore = score1 + score2 + score3 + score4 + score5 + score6 + score7;
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

    document.body.querySelector("#cardContainer div:nth-child(13) .number").textContent = 0
    document.body.querySelector("#cardContainer div:nth-child(13) .numberBottom").textContent = 0
    document.body.querySelector("#cardContainer div:nth-child(13) .flip-card-inner").style.transform = "rotateY(180deg)"

    updateCardSymbols(1, 0)
    updateCardSymbols(2, 0)
    updateCardSymbols(3, 0)
    updateCardSymbols(4, 0)
    updateCardSymbols(5, 0)
    updateCardSymbols(6, 0)
    updateCardSymbols(7, 0)

    document.body.querySelector("#E3C1S1").style.visibility = "hidden"
    document.body.querySelector("#E3C1S2").style.visibility = "hidden"
    document.body.querySelector("#E3C1S3").style.visibility = "hidden"
    document.body.querySelector("#E3C1S4").style.visibility = "hidden"
    document.body.querySelector("#E3C1S5").style.visibility = "hidden"
    document.body.querySelector("#E3C1S6").style.visibility = "hidden"
    document.body.querySelector("#E3C1S7").style.visibility = "hidden"
    document.body.querySelector("#E3C1S8").style.visibility = "hidden"
    document.body.querySelector("#E3C1S9").style.visibility = "hidden"

    document.body.querySelector("#E4C1S1").style.visibility = "hidden"
    document.body.querySelector("#E4C1S2").style.visibility = "hidden"
    document.body.querySelector("#E4C1S3").style.visibility = "hidden"
    document.body.querySelector("#E4C1S4").style.visibility = "hidden"
    document.body.querySelector("#E4C1S5").style.visibility = "hidden"
    document.body.querySelector("#E4C1S6").style.visibility = "hidden"
    document.body.querySelector("#E4C1S7").style.visibility = "hidden"
    document.body.querySelector("#E4C1S8").style.visibility = "hidden"
    document.body.querySelector("#E4C1S9").style.visibility = "hidden"
    document.body.querySelector("#E4C1S10").style.visibility = "hidden"


    document.body.querySelector("#E3C2S1").style.visibility = "hidden"
    document.body.querySelector("#E3C2S2").style.visibility = "hidden"
    document.body.querySelector("#E3C2S3").style.visibility = "hidden"
    document.body.querySelector("#E3C2S4").style.visibility = "hidden"
    document.body.querySelector("#E3C2S5").style.visibility = "hidden"
    document.body.querySelector("#E3C2S6").style.visibility = "hidden"
    document.body.querySelector("#E3C2S7").style.visibility = "hidden"
    document.body.querySelector("#E3C2S8").style.visibility = "hidden"
    document.body.querySelector("#E3C2S9").style.visibility = "hidden"

    document.body.querySelector("#E4C2S1").style.visibility = "hidden"
    document.body.querySelector("#E4C2S2").style.visibility = "hidden"
    document.body.querySelector("#E4C2S3").style.visibility = "hidden"
    document.body.querySelector("#E4C2S4").style.visibility = "hidden"
    document.body.querySelector("#E4C2S5").style.visibility = "hidden"
    document.body.querySelector("#E4C2S6").style.visibility = "hidden"
    document.body.querySelector("#E4C2S7").style.visibility = "hidden"
    document.body.querySelector("#E4C2S8").style.visibility = "hidden"
    document.body.querySelector("#E4C2S9").style.visibility = "hidden"
    document.body.querySelector("#E4C2S10").style.visibility = "hidden"


    document.body.querySelector("#E3C3S1").style.visibility = "hidden"
    document.body.querySelector("#E3C3S2").style.visibility = "hidden"
    document.body.querySelector("#E3C3S3").style.visibility = "hidden"
    document.body.querySelector("#E3C3S4").style.visibility = "hidden"
    document.body.querySelector("#E3C3S5").style.visibility = "hidden"
    document.body.querySelector("#E3C3S6").style.visibility = "hidden"
    document.body.querySelector("#E3C3S7").style.visibility = "hidden"
    document.body.querySelector("#E3C3S8").style.visibility = "hidden"
    document.body.querySelector("#E3C3S9").style.visibility = "hidden"

    document.body.querySelector("#E4C3S1").style.visibility = "hidden"
    document.body.querySelector("#E4C3S2").style.visibility = "hidden"
    document.body.querySelector("#E4C3S3").style.visibility = "hidden"
    document.body.querySelector("#E4C3S4").style.visibility = "hidden"
    document.body.querySelector("#E4C3S5").style.visibility = "hidden"
    document.body.querySelector("#E4C3S6").style.visibility = "hidden"
    document.body.querySelector("#E4C3S7").style.visibility = "hidden"
    document.body.querySelector("#E4C3S8").style.visibility = "hidden"
    document.body.querySelector("#E4C3S9").style.visibility = "hidden"
    document.body.querySelector("#E4C3S10").style.visibility = "hidden"


    document.body.querySelector("#E3C4S1").style.visibility = "hidden"
    document.body.querySelector("#E3C4S2").style.visibility = "hidden"
    document.body.querySelector("#E3C4S3").style.visibility = "hidden"
    document.body.querySelector("#E3C4S4").style.visibility = "hidden"
    document.body.querySelector("#E3C4S5").style.visibility = "hidden"
    document.body.querySelector("#E3C4S6").style.visibility = "hidden"
    document.body.querySelector("#E3C4S7").style.visibility = "hidden"
    document.body.querySelector("#E3C4S8").style.visibility = "hidden"
    document.body.querySelector("#E3C4S9").style.visibility = "hidden"

    document.body.querySelector("#E4C4S1").style.visibility = "hidden"
    document.body.querySelector("#E4C4S2").style.visibility = "hidden"
    document.body.querySelector("#E4C4S3").style.visibility = "hidden"
    document.body.querySelector("#E4C4S4").style.visibility = "hidden"
    document.body.querySelector("#E4C4S5").style.visibility = "hidden"
    document.body.querySelector("#E4C4S6").style.visibility = "hidden"
    document.body.querySelector("#E4C4S7").style.visibility = "hidden"
    document.body.querySelector("#E4C4S8").style.visibility = "hidden"
    document.body.querySelector("#E4C4S9").style.visibility = "hidden"
    document.body.querySelector("#E4C4S10").style.visibility = "hidden"


    document.body.querySelector("#E3C5S1").style.visibility = "hidden"
    document.body.querySelector("#E3C5S2").style.visibility = "hidden"
    document.body.querySelector("#E3C5S3").style.visibility = "hidden"
    document.body.querySelector("#E3C5S4").style.visibility = "hidden"
    document.body.querySelector("#E3C5S5").style.visibility = "hidden"
    document.body.querySelector("#E3C5S6").style.visibility = "hidden"
    document.body.querySelector("#E3C5S7").style.visibility = "hidden"
    document.body.querySelector("#E3C5S8").style.visibility = "hidden"
    document.body.querySelector("#E3C5S9").style.visibility = "hidden"

    document.body.querySelector("#E4C5S1").style.visibility = "hidden"
    document.body.querySelector("#E4C5S2").style.visibility = "hidden"
    document.body.querySelector("#E4C5S3").style.visibility = "hidden"
    document.body.querySelector("#E4C5S4").style.visibility = "hidden"
    document.body.querySelector("#E4C5S5").style.visibility = "hidden"
    document.body.querySelector("#E4C5S6").style.visibility = "hidden"
    document.body.querySelector("#E4C5S7").style.visibility = "hidden"
    document.body.querySelector("#E4C5S8").style.visibility = "hidden"
    document.body.querySelector("#E4C5S9").style.visibility = "hidden"
    document.body.querySelector("#E4C5S10").style.visibility = "hidden"


    document.body.querySelector("#E3C6S1").style.visibility = "hidden"
    document.body.querySelector("#E3C6S2").style.visibility = "hidden"
    document.body.querySelector("#E3C6S3").style.visibility = "hidden"
    document.body.querySelector("#E3C6S4").style.visibility = "hidden"
    document.body.querySelector("#E3C6S5").style.visibility = "hidden"
    document.body.querySelector("#E3C6S6").style.visibility = "hidden"
    document.body.querySelector("#E3C6S7").style.visibility = "hidden"
    document.body.querySelector("#E3C6S8").style.visibility = "hidden"
    document.body.querySelector("#E3C6S9").style.visibility = "hidden"

    document.body.querySelector("#E4C6S1").style.visibility = "hidden"
    document.body.querySelector("#E4C6S2").style.visibility = "hidden"
    document.body.querySelector("#E4C6S3").style.visibility = "hidden"
    document.body.querySelector("#E4C6S4").style.visibility = "hidden"
    document.body.querySelector("#E4C6S5").style.visibility = "hidden"
    document.body.querySelector("#E4C6S6").style.visibility = "hidden"
    document.body.querySelector("#E4C6S7").style.visibility = "hidden"
    document.body.querySelector("#E4C6S8").style.visibility = "hidden"
    document.body.querySelector("#E4C6S9").style.visibility = "hidden"
    document.body.querySelector("#E4C6S10").style.visibility = "hidden"
    
    document.body.querySelector("#E3C7S1").style.visibility = "hidden"
    document.body.querySelector("#E3C7S2").style.visibility = "hidden"
    document.body.querySelector("#E3C7S3").style.visibility = "hidden"
    document.body.querySelector("#E3C7S4").style.visibility = "hidden"
    document.body.querySelector("#E3C7S5").style.visibility = "hidden"
    document.body.querySelector("#E3C7S6").style.visibility = "hidden"
    document.body.querySelector("#E3C7S7").style.visibility = "hidden"
    document.body.querySelector("#E3C7S8").style.visibility = "hidden"
    document.body.querySelector("#E3C7S9").style.visibility = "hidden"

    document.body.querySelector("#E4C7S1").style.visibility = "hidden"
    document.body.querySelector("#E4C7S2").style.visibility = "hidden"
    document.body.querySelector("#E4C7S3").style.visibility = "hidden"
    document.body.querySelector("#E4C7S4").style.visibility = "hidden"
    document.body.querySelector("#E4C7S5").style.visibility = "hidden"
    document.body.querySelector("#E4C7S6").style.visibility = "hidden"
    document.body.querySelector("#E4C7S7").style.visibility = "hidden"
    document.body.querySelector("#E4C7S8").style.visibility = "hidden"
    document.body.querySelector("#E4C7S9").style.visibility = "hidden"
    document.body.querySelector("#E4C7S10").style.visibility = "hidden"

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
    await new Promise(r => setTimeout(r, 1500));
    resetGame()
    document.getElementById("loseScreen").style.backgroundColor = "rgba(0.5,0.5,0.5,0)"
    document.getElementById("lossText").style.color = "rgba(153, 255, 0, 0)"
    await new Promise(r => setTimeout(r, 1500));
    document.getElementById("loseScreen").style.visibility = "hidden"
}

async function win() {
    console.log("Gamer")
    document.getElementById("loseScreen").style.visibility = "visible"
    document.getElementById("loseScreen").style.backgroundColor = "rgba(0.5,0.5,0.5,0.75)"
    document.getElementById("winText").style.color = "rgba(153, 255, 0, 1)"
    await new Promise(r => setTimeout(r, 1500));
    resetGame()
    document.getElementById("loseScreen").style.backgroundColor = "rgba(0.5,0.5,0.5,0)"
    document.getElementById("winText").style.color = "rgba(153, 255, 0, 0)"
    await new Promise(r => setTimeout(r, 1500));
    document.getElementById("loseScreen").style.visibility = "hidden"
}

console.log("Script Successfully Started")
resetGame()