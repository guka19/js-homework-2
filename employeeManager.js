class Employee {
    firstName;
    lastName;
    salary;
    position;

    constructor(fn, ln, salary, position) {
        this.firstName = fn;
        this.lastName = ln;
        this.salary = salary;
        this.position = position;
    }

    toString() {
        return `First Name: ${this.firstName}, Last Name: ${this.lastName}, Salary: ${this.salary}, Position: ${this.position}`;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Manager extends Employee {
    department;
    bonus;

    constructor(fn, ln, salary, position, department, bonus) {
        super(fn, ln, salary, position, department, bonus);
        this.department = department;
        this.bonus = bonus;
    }

    toString() {
        return `First Name: ${this.firstName}, Last Name: ${this.lastName}, Salary: ${this.salary}, Position: ${this.position}, Department: ${this.department}, Bonus: ${this.bonus}`;
    }

    getSalary() {
        return this.salary + this.bonus;
    }
    
}

const emp1 = new Employee('Guka', 'Mamadashvili', 4000, 'Backend Developer');
console.log(emp1.toString());
console.log(emp1.getFullName());

const mng1 = new Manager('Nini', 'Ruadze', 5000, 'Manager', 'Department of Reasearch & Development', 799);
console.log(mng1.toString());
console.log(mng1.getSalary());