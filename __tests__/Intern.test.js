const Employee = require('../lib/Employee.js');
const Intern = require('../lib/Intern.js');


test('creates an employee object', () => {
    const employee = new Employee('Philip', 569, 'phil.powers67@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

test('gets name', () => {
    const employee = new Employee ('Philip', 569, 'phil.powers67@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets id', () => {
    const employee = new Employee ('Philip', 569, 'phil.powers67@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
})

test('gets email', () => {
    const employee = new Employee ('Philip', 569, 'phil.powers67@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
})

test('gets role', () => {
    const intern = new Intern ('Philip', 569, 'phil.powers67@gmail.com', 'UCONN');

    expect(intern.getRole()).toBe("Intern");
})

test('gets school attending', () => {
    const intern = new Intern ('Philip', 569, 'phil.powers67@gmail.com', 'UCONN');

    expect(intern.getSchool()).toEqual(expect.any(String));
})