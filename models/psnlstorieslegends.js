module.exports = (sequelize,DataTypes) => {
    const Psnlstorieslegends = sequelize.define('psnlstorieslegends', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        time: {
            type:DataTypes.STRING,
            allowNull: false
        },

        date: {
            type: DataTypes.STRING,
            allowNull: false
        },

        img:{
            type: DataTypes.TEXT,
            allowNull: false
        },

        description:{
            type: DataTypes.TEXT,
            allowNull: false
        },

    });
    return Psnlstorieslegends;
}