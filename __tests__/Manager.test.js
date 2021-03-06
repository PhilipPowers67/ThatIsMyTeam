const Manager = require('../lib/Manager.js');
const Employee = require('../lib/Employee')
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
    const manager = new Manager ('Philip', 569, 'phil.powers67@gmail.com');

    expect(manager.getRole()).toBe("Manager");
})

test('gets manager office number', () => {
    const manager = new Manager ('Philip', 569, 'phil.powers67@gmail.com', 5);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
})