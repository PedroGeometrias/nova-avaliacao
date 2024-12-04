const { Order } = require('../models'); 
const { sendEmail } = require('./notifications'); 
class OrderService {
    // Cria um novo pedido
    async createOrder(orderDetails) {
        try {
            const order = await Order.create(orderDetails); 
            // Envia e-mail de confirmação
            await sendEmail(
                order.userEmail,
                'Confirmação de Pedido',
                `Seu pedido ${order.id} foi confirmado!`
            );

            return order;
        } catch (error) {
            console.error('Erro ao criar pedido:', error.message);
            throw error;
        }
    }

    // Lista pedidos de um usuário específico
    async listOrders(userId) {
        return await Order.findAll({ where: { userId } });
    }
}

module.exports = new OrderService();

