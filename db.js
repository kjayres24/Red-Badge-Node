const Sequelize = require('sequelize');


const sequelize = new Sequelize(process.env.DATABASE_URL, {
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
const psnllnd = sequelize.import('./models/psnlstorieslegends');

user.hasMany(huntlocations);
huntlocations.belongsTo(user);

user.hasMany(psnllnd);
psnllnd.belongsTo(user);


module.exports = sequelize;