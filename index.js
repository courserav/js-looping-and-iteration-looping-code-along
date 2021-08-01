// Code your solutions in this file
function countDown(number){
    while (number >= 0){
        console.log(number)
        number = --number    
    }
}


function writeCards(names){
    names.slice(',')
    let thanks = []
    for (let i = 0; i < names.length; i++){
        thanks[i] = "Thank you, " + names[i] + ", for the wonderful surprise gift!"
    }
    return thanks
}