module.exports = (sequelize, DataTypes) => {
    const Psnlstorieslegends = sequelize.define('psnlstorieslegends', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        time: {
            type: DataTypes.STRING,
            allowNull: true
        },

        date: {
            type: DataTypes.STRING,
            allowNull: false
        },

        img: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tag: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

    });
    return Psnlstorieslegends;
}