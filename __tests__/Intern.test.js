const Intern = require('../lib/Intern');

test('creates a new intern object', () => {
    const intern = new Intern('John', 1234, 'john@gmail.com', 'Vanderbilt University');

    expect(intern.name).toBe('John');
    expect(intern.id).toEqual(1234);
    expect(intern.email).toBe('john@gmail.com');
    expect(intern.school).toBe('Vanderbilt University');
    expect(intern.role).toBe('Intern');

});