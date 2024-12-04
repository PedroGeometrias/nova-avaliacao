const express = require('express');
const router = express.Router();

// Importing other routes
const userRoutes = require('./users');
const productRoutes = require('./products');
const cartRoutes = require('./carts');
const paymentRoutes = require('./payment');
const orderRoutes = require('./orders');
const wishlistRoutes = require('./wishlist');
const authRouter = require('./auth');
const suppliersRouter = require('./suppliers');

// Main route
router.get('/', (req, res) => {
    res.send('API funcionando!');
});

// Registering sub-routes
router.use('/auth', authRouter);
router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/carts', cartRoutes);
router.use('/payment', paymentRoutes);
router.use('/orders', orderRoutes);
router.use('/wishlist', wishlistRoutes);
router.use('/suppliers', suppliersRouter);

module.exports = router;

