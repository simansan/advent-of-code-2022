const fs = require('fs')

fs.readFile('./day2Data.txt', (err, data) => {
    enum possiblePoints {
        AX = 4,
        AY = 8,
        AZ = 3,
        BX = 1,
        BY = 5,
        BZ = 9,
        CX = 7,
        CY = 2,
        CZ = 6,
    }
    const matches = String(data).replace(new RegExp("[\r\n]", "gm"), ",").replace(/\s/g, '').split(",")
    // const shouldPlay = matches.map(match => match.charAt(0)).map(play => {
    //     if (play === 'A') return play += 'Y'
    //     else if (play === 'B') return play += 'X'
    //     else if (play === 'C') return play += 'Z'
    // } )

    const scores = matches.map(play => possiblePoints[play])
    const totalScore = scores.reduce((acc, curr) => acc + curr, 0)
    console.log("totalScoreAsIs: ", totalScore)

    const shouldPlayP2 = matches.map(play => {
        // lose
        if (play === 'AX') return 'AZ'
        if (play === 'BX') return 'BX'
        if (play === 'CX') return 'CY'
        // draw
        if (play === 'AY') return 'AX'
        if (play === 'BY') return 'BY'
        if (play === 'CY') return 'CZ'
        // win
        if (play === 'AZ') return 'AY'
        if (play === 'BZ') return 'BZ'
        if (play === 'CZ') return 'CX'
    } )
    const scoresP2 = shouldPlayP2.map(play => possiblePoints[play])
    const totalScoresP2 = scoresP2.reduce((acc, curr) => acc + curr, 0)
    console.log('totalScoresP2: ', totalScoresP2 )
})