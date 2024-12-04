const express = require('express');
const orderController = require('../controllers/orderController');
const router = express.Router();

// Criação de um pedido
router.post('/', orderController.create);

// Listagem de pedidos por usuário
router.get('/:userId', orderController.list);

module.exports = router;

