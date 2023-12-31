const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING
    },
    summary: {
      type: DataTypes.TEXT
    },
    healthScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    steps: {
      type: DataTypes.STRING
    }
  }, { timestamps: false });
};
