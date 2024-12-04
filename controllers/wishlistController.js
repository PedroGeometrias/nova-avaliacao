const wishlistService = require('../services/wishlistService');

class WishlistController {
    // Adiciona produto à Wishlist
    async add(req, res) {
        try {
            const { userId, productId } = req.body;
            const wishlistItem = await wishlistService.addToWishlist(userId, productId);
            res.status(201).json(wishlistItem);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Lista produtos da Wishlist
    async list(req, res) {
        try {
            const { userId } = req.params;
            const wishlist = await wishlistService.getWishlist(userId);
            res.status(200).json(wishlist);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Remove produto da Wishlist
    async remove(req, res) {
        try {
            const { userId, productId } = req.body;
            const result = await wishlistService.removeFromWishlist(userId, productId);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new WishlistController();

