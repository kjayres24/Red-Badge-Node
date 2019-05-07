const Sequelize = require('sequelize');


const sequelize = new Sequelize('group-project', 'postgres', 'reggie44', {
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