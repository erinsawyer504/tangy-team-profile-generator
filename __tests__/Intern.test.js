const Intern = require('../lib/Intern');

test('creating an intern object', () => {
    const intern = new Intern('Erin', 3381, 'erinsawyer504@gmail.com', 'USC');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});
// gets name
test('gets intern name', () => {
    const intern = new Intern('Erin', 3381, 'erinsawyer504@gmail.com', 'USC');

    expect(intern.getName()).toEqual(expect.any(String));
});

// gets id 
test('gets intern ID', () => {
    const intern = new Intern('Erin', 3381, 'erinsawyer504@gmail.com', 'USC');

    expect(intern.getId()).toEqual(expect.any(Number));
});

// gets email address
test('gets intern email', () => {
    const intern = new Intern('Erin', 3381, 'erinsawyer504@gmail.com', 'USC');

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
});

//gets school
test('gets intern school', () => {
    const intern = new Intern('Erin', 3381, 'erinsawyer504@gmail.com', 'USC');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role 
test('gets role of intern', () => {
    const intern = new Intern('Erin', 3381, 'erinsawyer504@gmail.com', 'USC');

    expect(intern.getRole()).toEqual("Intern");
}); 