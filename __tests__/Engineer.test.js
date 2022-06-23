const Engineer = require('../lib/Engineer');

test('create a new engineer object', () => {
    const engineer = new Engineer('Dave', '1234', 'dave@gmail', 'githubdave',);

    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toBe('1234');
    expect(engineer.email).toBe('dave@gmail');
    expect(engineer.github).toBe('githubdave');
    expect(engineer.role).toBe('Engineer');


});