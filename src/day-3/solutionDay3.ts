const fs = require('fs')

fs.readFile('./day3Data.txt', (err, data) => {
    const rucksacks = String(data).replace(new RegExp("[\r\n]", "gm"), ",").replace(/\s/g, '').split(",")
    let duplicates = ''
    rucksacks.forEach( item => {
            const strLength = item.length
            const strHalfLength = strLength/2
            const firstHalf = item.substring(0, strHalfLength)
            const secondHalf = item.substring(strHalfLength)
            for (let i=0; i < strHalfLength; i++){
                if (secondHalf.includes(firstHalf[i])){
                    duplicates += firstHalf[i];
                    break;
                }
            }
        }
    )
    let numResult = 0
    const a_code = 'a'.charCodeAt(0);
    const A_code = 'A'.charCodeAt(0);
    for( let i=0; i < duplicates.length; i++) {
        if (/[a-z]/.test(duplicates[i])) {
            numResult += duplicates[i].charCodeAt(0) - a_code + 1;
        } else {
            numResult += duplicates[i].charCodeAt(0) - A_code + 27;
        }
    }
    console.log(numResult)
})