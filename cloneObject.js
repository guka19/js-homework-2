const copyObj = (original, clone) => {
    for (let key in original) {
        if (original.hasOwnProperty(key)) {
            clone[key] = original[key];
        }
    }
}

const originalObj = {
    firstName: 'Guka',
    lastName: 'Mamadashvili',
    age: 20,
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const newObj = {};

copyObj(originalObj, newObj);

console.log(newObj.firstName);
console.log(newObj.lastName);
console.log(newObj.fullName());