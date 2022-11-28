// const { log } = require('console')

// const blueline = require('blueline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })


function gradeCalc(score) {
    if (score === "") {
        console.log("Please enter a number")
    }
    
    else if (score > 79 && score <= 100) {
        return 'A'
    }
    else if (score >= 60 && score <= 79) {
        return 'B'
    }
    else if (score >= 49 && score <= 59) {
        return 'C'
    }
    else if (score >= 40 && score <= 49) {
        return 'D'
    }else if(score < 40 && score < 0){
        return 'E'
    }
}

//get user input
// readline.question('Please enter student marks: ', score => {
//     grade(score)
//     readline.close()
// })





// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// function to calculate speed points
const points = (speed) => {
    if (speed === "") {
        console.log("Please enter a number")
    }

    else if (speed < 70) {
        console.log("Ok")
    }
    else {
        let balance = (speed*1) - 70
        let points = Math.floor(balance / 5)
        if (points > 12) {
            console.log("License suspended")
        }
        else {
            console.log(points)
        }
    }
}




const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


const taxRate = (gross) => {
    if (gross <= 24000) {
        return 10/100
    }
    else if (gross > 24000 && gross <= 32333) {
        return 25/100
    }
    else {
        return 30/100
    }
}


const nhifDeduction = (gross) => {
    if (gross <= 5999) {
        return 150
    }
    else if (gross <= 7999) {
        return 300
    }
    else if (gross <= 11999) {
        return 400
    }
    else if (gross <= 14999) {
        return 500
    }
    else if (gross <= 19999) {
        return 600
    }
    else if (gross <= 24999) {
        return 750
    }
    else if (gross <= 29999) {
        return 850
    }
    else if (gross <= 34999) {
        return 900
    }
    else if (gross <= 39999) {
        return 950
    }
    else if (gross <= 44999) {
        return 1000
    }
    else if (gross <= 49999) {
        return 1100
    }
    else if (gross <= 59999) {
        return 1200
    }
    else if (gross <= 69999) {
        return 1300
    }
    else if (gross <= 79999) {
        return 1400
    }
    else if (gross <= 89999) {
        return 1500
    }
    else if (gross <= 99999) {
        return 1600
    }
    else {
        return 1700
    }
}


const nssfDeduction = 400


const salary = (gross) => {
    console.log(gross - (gross*taxRate(gross)) - nssfDeduction - nhifDeduction(gross))
}

readline.question('Please enter your gross salary: ', gross => {
    salary(gross)
    readline.close()
})
