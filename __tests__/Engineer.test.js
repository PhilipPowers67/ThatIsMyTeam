const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');

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
    const engineer = new Engineer ('Philip', 569, 'phil.powers67@gmail.com', 'PhilPowers67');

    expect(engineer.getRole()).toBe("Engineer");
})

test('get github', () => {
    const engineer = new Engineer ('Philip', 569, 'phil.powers67@gmail.com', 'PhilPowers67');

    expect(engineer.getGithub()).toEqual(expect.any(String));
})