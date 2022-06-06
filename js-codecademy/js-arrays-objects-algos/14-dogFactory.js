/*
Write a function, dogFactory(). It should:

have 3 parameters: name, breed, and weight (in that order)
expect name and breed to be strings
expect weight to be a number
return an object
have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in
dogFactory('Joe', 'Pug', 27)
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }
*/

const dogFactory = (name, breed, weight) => {
    return  {
        _name: name,
        get name() {
            return this._name;
        },
        set name(newName) {
          if (typeof newName === 'string') {
            this._name = newName;
          } else {
            return ('You must assign a string to name');
          }
        },
        _breed: breed,
        get breed() {
            return this._breed;
        },
        set breed(newBreed) {
            if (typeof newBreed === 'string') {
              this._breed = newBreed;
            } else {
              return ('You must assign a string to breed');
            }
        },
        _weight: weight,
        get weight() {
            return this._weight;
        },
        set weight(newWeight) {
            if (typeof newWeight === 'number') {
              this._weight = newWeight;
            } else {
              return ('You must assign a number to weight');
            }
        },
        bark() {
          return ('ruff! ruff!');
        },
        eatTooManyTreats() {
          this._weight ++;
          return('Weight has gone up to ' + this._weight + ' !');
        }
    }
}

exampleObj = dogFactory('Joe', 'Pug', 27);
console.log(exampleObj);
console.log(exampleObj.name);
console.log(exampleObj.bark());
console.log(exampleObj.eatTooManyTreats());
console.log(exampleObj.eatTooManyTreats());
console.log(exampleObj);