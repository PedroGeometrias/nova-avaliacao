const { Wishlist, Product } = require('../models');

class WishlistService {
    // Adiciona um produto à Wishlist
    async addToWishlist(userId, productId) {
        const existingItem = await Wishlist.findOne({ where: { userId, productId } });
        if (existingItem) {
            throw new Error('Produto já está na lista de desejos');
        }

        const wishlistItem = await Wishlist.create({ userId, productId });
        return wishlistItem;
    }

    // Lista os produtos da Wishlist de um usuário
    async getWishlist(userId) {
        return await Wishlist.findAll({
            where: { userId },
            include: [{ model: Product, as: 'product' }],
        });
    }

    // Remove um produto da Wishlist
    async removeFromWishlist(userId, productId) {
        const result = await Wishlist.destroy({ where: { userId, productId } });
        if (!result) {
            throw new Error('Produto não encontrado na lista de desejos');
        }
        return { message: 'Produto removido com sucesso' };
    }
}

module.exports = new WishlistService();

