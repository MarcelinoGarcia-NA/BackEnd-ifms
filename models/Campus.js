const connection = require('../config/connection');

const Campus = connection.sequelize.define('ifms', {
    id: {
        type: connection.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_campus: {
        type: connection.Sequelize.STRING,
        allowNull: false
    },
    image_url: {
        type: connection.Sequelize.STRING,
        allowNull: false,
        unique: true
    },
},
    {
        timestamps: false
    }
);
Campus.sync();
module.exports = Campus;