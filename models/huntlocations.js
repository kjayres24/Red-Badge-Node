

module.exports = (sequelize, DataTypes) => {
    const huntlocations = sequelize.define('huntlocations', {

        location: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        time: {
            type: DataTypes.STRING,
            allowNull: true
        },
        date: {
            type: DataTypes.STRING,
            allowNull: true
        },
        img: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        tag: {
            type: DataTypes.STRING,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return huntlocations;

}

// "img": "https://3320m92k42nq20mr5v2w53b6-wpengine.netdna-ssl.com/wp-content/uploads/2015/05/Launch_fishers_coworking_spaces.jpg",