const checkForSequence = (option1, option2, option3) => {
    return option1 === option2  && option2 === option3
}

export const checkForWinner = (board) => {
    //  0 1 2
    //  3 4 5
    //  6 7 8

    // rows
    for(let i=0; i<9; i+=3) {
        if(checkForSequence(board[1], board[i+1], board[i+2]))
        console.log("Row winner");
    return true

    }

    // column
    for(let i=0; i<3; i+=1) {
        if(checkForSequence(board[1], board[i+3], board[i+6]))
        console.log("Column winner");
    return true

    }



    // diagnol1
    if(board[0] === board[4] && board[4] === board[8]) {
        console.log("Diagnol winner")
        return true
    }

    // diagnol2
     if(board[2] === board[4] && board[4] === board[6]) {
        console.log("Diagnol winner")
        return true
    }
}