module.exports = (sequelize,DataTypes) => {
    const Psnlstorieslegends = sequelize.define('psnlstorieslegends', {
        title: {
            type: DataTypes.STRING,
        },

        time: {
            type:DataTypes.STRING,
        },

        date: {
            type: DataTypes.STRING
        },

        img:{
            type: DataTypes.STRING,
        },

        description:{
            type: DataTypes.TEXT,
        },

    });
    return Psnlstorieslegends;
}