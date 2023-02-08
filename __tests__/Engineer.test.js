const Engineer = require('../lib/Engineer');

test('creating an engineer object', () => {
    const engineer = new Engineer('Erin', 3381, 'erinsawyer504@gmail.com', 'erinsawyer504');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.gitHub).toEqual(expect.any(String));
});
// gets name
test('gets Engineer name', () => {
    const engineer = new Engineer('Erin', 3381, 'erinsawyer504@gmail.com', 'erinsawyer504');

    expect(engineer.getName()).toEqual(expect.any(String));
});

// gets id 
test('gets Engineer ID', () => {
    const engineer = new Engineer('Erin', 3381, 'erinsawyer504@gmail.com', 'erinsawyer504');

    expect(engineer.getId()).toEqual(expect.any(Number));
});

// gets email address
test('gets Engineer email', () => {
    const engineer = new Engineer('Erin', 3381, 'erinsawyer504@gmail.com', 'erinsawyer504');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
});

//gets engineer's github username
test('gets Engineer github username', () => {
    const engineer = new Engineer('Erin', 3381, 'erinsawyer504@gmail.com', 'erinsawyer504');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.gitHub.toString()));
})

// gets role 
test('gets role of employee', () => {
    const engineer = new Engineer('Erin', 3381, 'erinsawyer504@gmail.com', 'erinsawyer504');

    expect(engineer.getRole()).toEqual("Engineer");
}); 