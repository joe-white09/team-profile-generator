const generateManager = managerArr => {
    if(managerArr.length === 0) {
        return '';
    }
    return `
        <div>      
        ${managerArr.map(({ name, id, email, officeNumber, role }) => {
              return `
            <div>
                <h3>${name}</h3>
                <h4>${role}</h4>
                    <p>ID: ${id}</p>
                    <p>Email: <a href="mailto:${email}">${email}</a></p>
                    <p>Office Number: ${officeNumber}</p>
            
            `;
            })
            }</div>`
};

const generateEngineer = engineerArr => {
    if(engineerArr.length === 0) {
        return '';
    }
    return `
    <div>      
    ${engineerArr.map(({ name, id, email, github, role }) => {
          return `
          <div>
            <div>
            <h3>${name}</h3>
            <h4>${role}</h4>
                <p>ID: ${id}</p>
                <p>Email: <a href="mailto:${email}">${email}</a></p>
                <p>Github: <a href="https://github.com/${github}/" target="_blank">${github}</a></p>
            </div>
        `;
        })
        .join('')}
        </div>`
};

const generatePage = teamArr => {
    var managerArr = teamArr.filter(function(teamArr) {
        return teamArr.role === 'Manager';
    });
    var engineerArr = teamArr.filter(function(teamArr) {
        return teamArr.role === 'Engineer';
    });
    var internArr = teamArr.filter(function(teamArr) {
        return teamArr.role === 'Intern';
    });
    console.log(managerArr);
    console.log(engineerArr);
    console.log(internArr);
    return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <main>
          ${generateManager(managerArr)}
          ${generateEngineer(engineerArr)}

    </main>
    <footer >
      
    </footer>
  </body>
  </html>
  `;
}; 


module.exports = generatePage;



