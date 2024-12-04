const orderService = require('../services/orderService');

class OrderController {
    // Endpoint para criar pedidos
    async create(req, res) {
        try {
            const order = await orderService.createOrder(req.body);
            res.status(201).json(order);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Endpoint para listar pedidos de um usuário
    async list(req, res) {
        try {
            const orders = await orderService.listOrders(req.params.userId);
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new OrderController();

