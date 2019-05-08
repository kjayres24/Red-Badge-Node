module.exports = function (sequelize, DataTypes) {
    return sequelize.define('huntlocations', {
        location: DataTypes.STRING,
        description: DataTypes.TEXT,
        time: DataTypes.STRING,
        date: DataTypes.STRING,
        img: DataTypes.STRING
    });
}