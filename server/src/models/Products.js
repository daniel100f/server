const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Products",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoria: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true,
        },
      },
     
     image: {
        type: DataTypes.STRING,
        allowNull: true,
       
      },
      medidas: {
        type: DataTypes.JSON, 
        allowNull: false,
      },
     
       
    
    
    },
    { timestamps: false }
  );
};