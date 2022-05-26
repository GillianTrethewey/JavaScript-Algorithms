//sphereVolume()will calculate the volume of a sphere given a radius
//coneVolume() will calculate the volume of a cone given a radius and a height
//prismVolume() will calculate the volume of a prism given a height, a width, and a depth
//totalVolume(), will receive an array containing the different shapes that make up a single attraction.
// The totalVolume function should use the previous three functions
// to calculate the total volume of an attraction.

// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
    return 4/3 * PI * radius **3;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
    return PI * radius**2 * height/3;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
    return height * width * depth;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
    let total = 0;
    for (let item of solids) {
        switch (item.type) {
            case "sphere":
                total += sphereVolume(item.radius);
                break;
            case "cone":
                total += coneVolume(item.radius, item.height);
                break;
            case "prism":
                total += prismVolume(item.height, item.width, item.depth);
                break;
        }
    }
    return total;
}

const largeSphere = {
    type: 'sphere',
    radius: 40
}

const smallSphere = {
    type: 'sphere',
    radius: 10
}

const cone = {
    type: 'cone',
    radius: 3,
    height: 5
}

const duck = [
    largeSphere,
    smallSphere,
    cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);

/*
expected output:
true
true
true
true
 */