const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Dave', '1234', 'davesmith@gmail.com');
    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('davesmith@gmail.com');
});