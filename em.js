// Manager class implementing Employee interface
var Manager = /** @class */ (function () {
    function Manager(name, id, role, department) {
        this.name = name;
        this.id = id;
        this.role = role;
        this.department = department;
    }
    Manager.prototype.getDetails = function () {
        return "Manager Name: ".concat(this.name, ", ID: ").concat(this.id, ", Role: ").concat(this.role, ", Department: ").concat(this.department);
    };
    return Manager;
}());
// Developer class implementing Employee interface
var Developer = /** @class */ (function () {
    function Developer(name, id, role, programmingLanguages) {
        this.name = name;
        this.id = id;
        this.role = role;
        this.programmingLanguages = programmingLanguages;
    }
    Developer.prototype.getDetails = function () {
        return "Developer Name: ".concat(this.name, ", ID: ").concat(this.id, ", Role: ").concat(this.role, ", Programming Languages: ").concat(this.programmingLanguages.join(", "));
    };
    return Developer;
}());
// Creating instances
var manager1 = new Manager("Alice", 101, "Manager", "HR");
var developer1 = new Developer("Sneha", 102, "Developer", ["TypeScript", "JavaScript", "Python"]);
// Displaying details
console.log(manager1.getDetails());
console.log(developer1.getDetails());
