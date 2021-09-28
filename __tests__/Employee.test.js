const Employee = require('../lib/Employee');


test('creates an employee object', () => {
    const employee = new Employee('Philip', 569, 'phil.powers67@gmail.com');

    expect(employee.name).toEqual(expect.any(String));

})