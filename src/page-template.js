const generateManager = managerArr => {
    if(managerArr.length === 0) {
        return '';
    }
    return `      
        ${managerArr.map(({ name, id, email, officeNumber, role }) => {
              return `
            <div class="card m-2 p-2 shadow row col-md-4 col-lg-3">
              <div class="card-title bg-primary text-white">
                  <h3 class="m-2">${name}</h3>
                  <h4><i class="fa-solid fa-mug-hot p-2"></i>${role}</h4>
              </div>
                  <p class="card-text border p-2">ID: ${id}</p>
                  <p class="card-text border p-2">Email: <a href="mailto:${email}">${email}</a></p>
                  <p class="card-text border p-2">Office Number: ${officeNumber}</p>
            </div>          
            `;
            })
            }`
};

const generateEngineer = engineerArr => {
    if(engineerArr.length === 0) {
        return '';
    }
    return `     
    ${engineerArr.map(({ name, id, email, github, role }) => {
          return `
        <div class="card m-2 p-2 shadow row col-md-4 col-lg-3">
          <div class="card-title bg-primary text-white">
              <h3 class="m-2">${name}</h3>
              <h4><i class="fa-solid fa-glasses p-2"></i>${role}</h4>
          </div>
              <p class="card-text border p-2">ID: ${id}</p>
              <p class="card-text border p-2">Email: <a href="mailto:${email}">${email}</a></p>
              <p class="card-text border p-2">GitHub: ${github}</p>
        </div>      
        `;
        })
        .join('')}
        `
};

const generateIntern = internArr => {
    if(internArr.length === 0) {
        return '';
    }
    return `          
    ${internArr.map(({ name, id, email, school, role }) => {
          return `
        <div class="card m-2 p-2 shadow row col-md-4 col-lg-3">
            <div class="card-title bg-primary text-white">
                <h3 class="m-2">${name}</h3>
                <h4><i class="fa-solid fa-user-graduate p-2"></i>${role}</h4>
            </div>
                <p class="card-text border p-2">ID: ${id}</p>
                <p class="card-text border p-2">Email: <a href="mailto:${email}">${email}</a></p>
                <p class="card-text border p-2">School: ${school}</p>
        </div>
        `;
        })
        .join('')}
        `
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
    return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://kit.fontawesome.com/04d8a877e6.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
    <title>Team Profile</title>
  </head>

  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <main>
        <div class= " d-flex flex-wrap justify-content-center">
          ${generateManager(managerArr)}
          ${generateEngineer(engineerArr)}
          ${generateIntern(internArr)}
        </div>

    </main>
  </body>
  </html>
  `;
}; 


module.exports = generatePage;



