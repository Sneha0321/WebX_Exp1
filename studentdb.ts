class Student {
    name: string;
    marks: number[];

    constructor(name: string, marks: number[]) {
        this.name = name;
        this.marks = marks;
    }

    getTotalMarks(): number {
        return this.marks.reduce((sum, mark) => sum + mark, 0);
    }

    getAverageMarks(): number {
        return this.getTotalMarks() / this.marks.length;
    }

    getResult(): string {
        return this.getAverageMarks() >= 40 ? "Passed" : "Failed";
    }

    displayResult(): void {
        console.log(`Student Name: ${this.name}`);
        console.log(`Average Marks: ${this.getAverageMarks().toFixed(2)}`);
        console.log(`Result: ${this.getResult()}`);
    }
}

// Example usage
const student1 = new Student("Sneha Patra", [45, 38, 50]);
student1.displayResult();
