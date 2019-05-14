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
<<<<<<< HEAD
const huntlocations = sequelize.import('./models/huntlocations');
const psnllgnd = sequelize.import('./models/psnlstorieslegends');
//associations
user.hasMany(huntlocations);
huntlocations.belongsTo(user);

user.hasMany(psnllgnd);
psnllgnd.belongsTo(user);
=======
const huntlocations = sequelize.import ('./models/huntlocations');
const psnllnd = sequelize.import('./models/psnlstorieslegends');

// Associations
user.hasMany(huntlocations);
huntlocations.belongsTo(user);

user.hasMany(psnllnd);
psnllnd.belongsTo(user);


>>>>>>> 5a014b8069a44cad4289b986527e90ab8e0443f4
module.exports = sequelize;