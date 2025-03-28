// Base class Student
class Student {
    constructor(public name: string, public studentId: number, public grade: string) {}

    getDetails(): string {
        return `Student Name: ${this.name}, ID: ${this.studentId}, Grade: ${this.grade}`;
    }
}

// Subclass GraduateStudent extending Student
class GraduateStudent extends Student {
    constructor(name: string, studentId: number, grade: string, public thesisTopic: string) {
        super(name, studentId, grade);
    }

    getThesisTopic(): string {
        return `Thesis Topic: ${this.thesisTopic}`;
    }

    override getDetails(): string {
        return `${super.getDetails()}, Thesis Topic: ${this.thesisTopic}`;
    }
}

// Independent class LibraryAccount
class LibraryAccount {
    constructor(public accountId: number, public booksIssued: number) {}

    getLibraryInfo(): string {
        return `Library Account ID: ${this.accountId}, Books Issued: ${this.booksIssued}`;
    }
}

// Demonstrating Composition: Associating LibraryAccount with Student
class StudentWithLibrary {
    constructor(public student: Student, public libraryAccount: LibraryAccount) {}

    getFullInfo(): string {
        return `${this.student.getDetails()}\n${this.libraryAccount.getLibraryInfo()}`;
    }
}

// Creating instances
const student1 = new Student("Sneha", 101, "A");
const gradStudent1 = new GraduateStudent("Bob", 102, "A+", "AI Research");
const libraryAcc1 = new LibraryAccount(5001, 3);

// Associating Student with LibraryAccount
const studentWithLibrary = new StudentWithLibrary(student1, libraryAcc1);

// Calling methods and observing behavior
console.log(student1.getDetails()); // Student details
console.log(gradStudent1.getDetails()); // GraduateStudent details with thesis
console.log(gradStudent1.getThesisTopic()); // Specific thesis topic
console.log(libraryAcc1.getLibraryInfo()); // Library account details
console.log(studentWithLibrary.getFullInfo()); // Composition example
