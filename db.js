const Sequelize = require('sequelize');


const sequelize = new Sequelize('group-project', 'postgres', 'password', { //change password back to reggie44 before pushing to github
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function () {
        console.log('Connected to group-project postgres database');
    },
    function (err) {
        console.log(err);
    }
);

module.exports = sequelize;