const whereCanIPark = function (spots, vehicle) {
        // We need to write a function called whereCanIPark() that returns the
        // coordinates of an available parking spot for the vehicle, or
        // returns false if there is no available spot. Our function receives an
        // array of arrays representing parking spots,
        // and a string with type of the vehicle that is looking for a parking spot.
        // Regular cars can park in R spots, Small cars can park in R or S spots, Motorcycles
        // can park in R, S, or M spots. Taken spots are lowercase and Available spots are uppercase.
        // Return an array with the coordinates of the spots as an [X, y] pair.
        // Return false if there are no available spots. Any spot if fine as long as it's available.
        let location = false;
        for (let i = 0; i < spots.length; i++) {
                for (let j = 0; j < spots[i].length; j++) {
                        if (vehicle === 'regular') {
                                if (spots[i][j] === 'R') {
                                        return location = `[${j},${i}]`;
                                }
                        } else if (vehicle === 'small') {
                                if (spots[i][j] === 'R' || spots[i][j] === 'S') {
                                        return location = `[${j},${i}]`;
                                }
                        } else if (vehicle === 'motorcycle') {
                                if (spots[i][j] === 'R' || spots[i][j] === 'S' || spots[i][j] === 'M') {
                                        return location = `[${j},${i}]`;
                                }
                        }
                }
        }
        return location;
};

console.log(whereCanIPark(
    [
        // COLUMNS ARE X
        // 0    1    2    3    4    5
        ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
        ['s', 'M', 's', 'S', 'r', 'M'], // 1
        ['s', 'M', 's', 'S', 'r', 'm'], // 2
        ['S', 'r', 's', 'm', 'r', 'M'], // 3
        ['S', 'r', 's', 'm', 'r', 'M'], // 4
        ['S', 'r', 'S', 'M', 'M', 'S']  // 5
    ],
    'regular'
));

console.log(whereCanIPark(
    [
        ['M', 'M', 'M', 'M'],
        ['M', 's', 'M', 'M'],
        ['M', 'M', 'M', 'M'],
        ['M', 'M', 'r', 'M']
    ],
    'small'
));

console.log(whereCanIPark(
    [
        ['s', 's', 's', 's', 's', 's'],
        ['s', 'm', 's', 'S', 'r', 's'],
        ['s', 'm', 's', 'S', 'r', 's'],
        ['S', 'r', 's', 'm', 'r', 's'],
        ['S', 'r', 's', 'm', 'R', 's'],
        ['S', 'r', 'S', 'M', 'm', 'S']
    ],
    'motorcycle'
))

/*
[4, 0]
false
[3, 1]
 */