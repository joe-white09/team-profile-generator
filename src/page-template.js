

const generatePage = teamArr => {
    var manager = teamArr.filter(function(teamArr) {
        return teamArr.role === 'Manager';
    });
    var engineer = teamArr.filter(function(teamArr) {
        return teamArr.role === 'Engineer';
    });
    var intern = teamArr.filter(function(teamArr) {
        return teamArr.role === 'Intern';
    });
    console.log(manager);
    console.log(engineer);
    console.log(intern);
};

module.exports = generatePage;



