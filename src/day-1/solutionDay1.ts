const fs = require('fs')

fs.readFile('./day1Data.txt', (err, data) => {
    const caloriesOfElfs = String(data).replace(/(.*)(\r\n|\n|\r)/gm, '$1,').split(',,')
    const totalCaloriesPerElf = caloriesOfElfs.map(elf => {
        return elf.split(',').reduce((acc, curr) => acc + Number(curr), 0)
    })
    const solution = Math.max(...totalCaloriesPerElf)
    console.log(solution)

    const sortedTotalCaloriesPerElf = totalCaloriesPerElf.sort((a, b) => a < b ? 1 : a > b ? -1 : 0)
    const biggestCaloriesElfCarriers = sortedTotalCaloriesPerElf.slice(0, 3)
    const solutionPartTwo = biggestCaloriesElfCarriers.reduce((acc, curr) => acc+ Number(curr), 0)
    console.log(solutionPartTwo)

    })