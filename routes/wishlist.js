const express = require('express');
const wishlistController = require('../controllers/wishlistController');
const router = express.Router();

router.post('/', wishlistController.add); // Adiciona produto à Wishlist
router.get('/:userId', wishlistController.list); // Lista produtos da Wishlist
router.delete('/', wishlistController.remove); // Remove produto da Wishlist

module.exports = router;

