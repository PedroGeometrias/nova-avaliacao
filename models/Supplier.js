module.exports = (sequelize, DataTypes) => {
  const Supplier = sequelize.define('Supplier', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contato: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Supplier;
};

