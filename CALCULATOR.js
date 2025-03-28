var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.add = function (a, b) {
        return a + b;
    };
    Calculator.subtract = function (a, b) {
        return a - b;
    };
    Calculator.multiply = function (a, b) {
        return a * b;
    };
    Calculator.divide = function (a, b) {
        if (b === 0) {
            return "Error: Division by zero is not allowed";
        }
        return a / b;
    };
    Calculator.calculate = function (operation, a, b) {
        switch (operation) {
            case 'add':
                return this.add(a, b);
            case 'subtract':
                return this.subtract(a, b);
            case 'multiply':
                return this.multiply(a, b);
            case 'divide':
                return this.divide(a, b);
            default:
                return "Error: Invalid operation";
        }
    };
    return Calculator;
}());
// Example usage
console.log(Calculator.calculate('add', 5, 3)); // 8
console.log(Calculator.calculate('subtract', 10, 4)); // 6
console.log(Calculator.calculate('multiply', 6, 7)); // 42
console.log(Calculator.calculate('divide', 8, 2)); // 4
console.log(Calculator.calculate('divide', 5, 0)); // "Error: Division by zero is not allowed"
console.log(Calculator.calculate('modulus', 5, 2)); // "Error: Invalid operation"
