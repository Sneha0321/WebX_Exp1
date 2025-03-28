// Employee interface
interface Employee {
    name: string;
    id: number;
    role: string;
    getDetails(): string;
}

// Manager class implementing Employee interface
class Manager implements Employee {
    constructor(public name: string, public id: number, public role: string, public department: string) {}

    getDetails(): string {
        return `Manager Name: ${this.name}, ID: ${this.id}, Role: ${this.role}, Department: ${this.department}`;
    }
}

// Developer class implementing Employee interface
class Developer implements Employee {
    constructor(public name: string, public id: number, public role: string, public programmingLanguages: string[]) {}

    getDetails(): string {
        return `Developer Name: ${this.name}, ID: ${this.id}, Role: ${this.role}, Programming Languages: ${this.programmingLanguages.join(", ")}`;
    }
}

// Creating instances
const manager1 = new Manager("Alice", 101, "Manager", "HR");
const developer1 = new Developer("Sneha", 102, "Developer", ["TypeScript", "JavaScript", "Python"]);

// Displaying details
console.log(manager1.getDetails());
console.log(developer1.getDetails());
