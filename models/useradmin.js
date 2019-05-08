module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        isAdmin: DataTypes.BOOLEAN,
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        location: DataTypes.STRING
    });
}