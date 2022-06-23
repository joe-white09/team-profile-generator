const Manager = require('../lib/Manager');

test('creates a new manager object', () => {
    const manager = new Manager('Joe', '1234', 'joe@gmail.com', '888-555-1234');

    expect(manager.name).toBe('Joe');
    expect(manager.id).toBe('1234');
    expect(manager.email).toBe('joe@gmail.com');
    expect(manager.officeNumber).toBe('888-555-1234');
    expect(manager.role).toBe('Manager');
});