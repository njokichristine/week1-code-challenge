const { log } = require('console')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


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


readline.question('Please enter the speed: ', speed => {
    points(speed)
    readline.close()
})
