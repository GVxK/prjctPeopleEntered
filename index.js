//let count = 5

//console.log(count)

//let myAge = 32

//console.log(myAge)

//let myAge = 32
//let humanDogRatio = 7
//let myDogAge = myAge * humanDogRatio

//console.log(myDogAge)

//let bonusPoints = 50

//console.log(bonusPoints)

//bonusPoints = bonusPoints -25
//console.log(bonusPoints)
//bonusPoints = bonusPoints + 75
//console.log(bonusPoints)



let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

let saveEl = document.getElementById("save-el")

console.log(saveEl)

function save() {
    saveEl.innerText += (" ") + count + (" - ")
    count = 0 
    countEl.innerText = count
}

function reset() {
    count = 0
    countEl.innerText = count
    saveEl.innerText = ("Previous entries:")
}



