const Sequelize = require('sequelize');


const sequelize = new Sequelize('group-project', 'postgres', 'reggie44', { //change password back to reggie44 before pushing to github
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

const user = sequelize.import('./models/useradmin');
const huntlocations = sequelize.import('./models/huntlocations');
const psnllgnd = sequelize.import('./models/psnlstorieslegends');
//associations
user.hasMany(huntlocations);
huntlocations.belongsTo(user);

user.hasMany(psnllgnd);
psnllgnd.belongsTo(user);
module.exports = sequelize;