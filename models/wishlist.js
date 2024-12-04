module.exports = (sequelize, DataTypes) => {
    const Wishlist = sequelize.define('Wishlist', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    Wishlist.associate = (models) => {
        Wishlist.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
        Wishlist.belongsTo(models.Product, { foreignKey: 'productId', as: 'product' });
    };

    return Wishlist;
};

