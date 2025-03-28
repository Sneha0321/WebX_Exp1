class Calculator {
    static add(a: number, b: number): number {
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b;
    }

    static multiply(a: number, b: number): number {
        return a * b;
    }

    static divide(a: number, b: number): number | string {
        if (b === 0) {
            return "Error: Division by zero is not allowed";
        }
        return a / b;
    }

    static calculate(operation: string, a: number, b: number): number | string {
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
    }
}

// Example usage
console.log(Calculator.calculate('add', 5, 3)); 
console.log(Calculator.calculate('subtract', 10, 4)); 
console.log(Calculator.calculate('multiply', 6, 7)); 
console.log(Calculator.calculate('divide', 8, 2)); 
console.log(Calculator.calculate('divide', 5, 0)); 
console.log(Calculator.calculate('modulus', 5, 2)); 
