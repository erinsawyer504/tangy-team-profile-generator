const Manager = require('../lib/Manager');

test('creating an Manager object', () => {
    const manager = new Manager('Erin', 3381, 'erinsawyer504@gmail.com', '555-555-5555');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});
// gets name
test('gets manager name', () => {
    const manager = new Manager('Erin', 3381, 'erinsawyer504@gmail.com', '555-555-5555');

    expect(manager.getName()).toEqual(expect.any(String));
});

// gets id 
test('gets manager ID', () => {
    const manager = new Manager('Erin', 3381, 'erinsawyer504@gmail.com', '555-555-5555');

    expect(manager.getId()).toEqual(expect.any(Number));
});

// gets email address
test('gets manager email', () => {
    const manager = new Manager('Erin', 3381, 'erinsawyer504@gmail.com', '555-555-5555');

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
});

//gets office number
test('gets manager office number', () => {
    const manager = new Manager('Erin', 3381, 'erinsawyer504@gmail.com', '555-555-5555');
    
    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(manager.officeNumber.toString()));
})

// gets role 
test('gets role of manager', () => {
    const manager = new Manager('Erin', 3381, 'erinsawyer504@gmail.com', '555-555-5555');

    expect(manager.getRole()).toEqual("Manager");
}); 