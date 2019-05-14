

module.exports = (sequelize, DataTypes) => {
    const huntlocations = sequelize.define('huntlocations', {
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tag: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return huntlocations;

}