///// TASK 1
function minus(x = 0) {


    function secondParam(y = 0) {
        return x - y;
    };

    return secondParam;
}

minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0

///// TASK 2

function multiplyMaker(val1) {

    let val2 = val1;

    return function(val1) {
        return val2 *= val1
    };
}

const multiplyRes = multiplyMaker(2);
console.log(multiplyRes(2)); // 4 
console.log(multiplyRes(1)); // 4 
console.log(multiplyRes(3)); // 12 
console.log(multiplyRes(10)); // 120 


//// TASK 3


const string = (function() {
    let string = '';

    function setString(value) {
        string = '' + value || '';
    }

    function getString() {
        return string;
    }

    function getStringLength() {
        return string.length;
    }

    function getStringReversed() {
        return string.split("").reverse().join("")
    }

    return {
        setString,
        getStringLength,
        getString,
        getStringReversed
    }
}())


//// TASK 4

const calculator = (function() {

    let result = 0;

    function setValue(value) {
        if (typeof value !== 'number') {
            return console.error('Please, enter number')
        }
        result = value;
        return this

    }

    function getAdded(value) {
        if (typeof value !== 'number') {
            return console.error('Please, enter number')
        }
        result += value;
        return this

    }

    function getMultiplied(value) {
        if (typeof value !== 'number') {
            return console.error('Please, enter number')
        }
        result *= value;
        return this
    }

    function getSubstracted(value) {
        if (typeof value !== 'number') {
            return console.error('Please, enter number')
        }
        result -= value;
        return this
    }

    function getDivided(value) {
        if (typeof value !== 'number') {
            return console.error('Please, enter number')
        }
        result /= value;
        return this;
    }

    function getSquare(value) {
        if (typeof value !== 'number') {
            return console.error('Please, enter exponent')
        }
        return result = Math.pow(result, value);
    }

    function getValue() {
        return result = Math.round(result * 100) / 100
    }

    return {
        setValue,
        getAdded,
        getMultiplied,
        getSubstracted,
        getDivided,
        getSquare,
        getValue

    };
})();

calculator.setValue(10).getAdded(5).getMultiplied(2).getValue();