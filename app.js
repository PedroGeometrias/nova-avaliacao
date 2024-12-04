const serverFramework = require('express');
const filePath = require('path');
const parseCookies = require('cookie-parser');
const loggerMiddleware = require('morgan');
const corsMiddleware = require('cors');
const databaseConnection = require('./models').sequelize;

// Importing routes
const mainRoutes = require('./routes/index');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/carts');
const paymentRoutes = require('./routes/payment');
const orderRoutes = require('./routes/orders');
const wishlistRoutes = require('./routes/wishlist');

const app = serverFramework();

// Middleware configuration
app.use(loggerMiddleware('dev'));
app.use(serverFramework.json());
app.use(serverFramework.urlencoded({ extended: false }));
app.use(parseCookies());
app.use(serverFramework.static(filePath.join(__dirname, 'public')));
app.use(
    corsMiddleware({
        origin: 'http://localhost:3000',
    })
);

// Route configuration
app.use('/', mainRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/payment', paymentRoutes);
app.use('/orders', orderRoutes);
app.use('/wishlist', wishlistRoutes);

// Database synchronization and connection test
if (process.env.NODE_ENV !== 'production') {
    databaseConnection
        .sync({ alter: true })
        .then(async () => {
            console.log('Banco de dados sincronizado');
            await databaseConnection.authenticate();
            console.log('Connection to the database has been established successfully.');
        })
        .catch((err) => {
            console.error('Erro ao sincronizar o banco de dados ou conectar:', err.message);
        });
}

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Internal Server Error',
        },
    });
});

// Server configuration
const applicationPort = 8000;
app.listen(applicationPort, () => {
    console.log(`Aplicação rodando na porta ${applicationPort}`);
});

module.exports = app;

