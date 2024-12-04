class PaymentController {
  constructor(paymentService) {
    this.paymentService = paymentService;
  }

  // Processar pagamento com cartão de crédito
  async processCreditCardPayment(req, res) {
    const { userId, valorTotal } = req.body;
    try {
      const transaction = await this.paymentService.processCreditCardPayment(userId, valorTotal); // Corrigido
      res.status(200).json(transaction);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Processar pagamento via Pix
  async processPixPayment(req, res) {
    const { userId, valorTotal } = req.body; 
    try {
      const transaction = await this.paymentService.processPixPayment(userId, valorTotal); // Corrigido
      res.status(200).json(transaction);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Obter status da transação
  async getTransactionStatus(req, res) {
    const { transactionId } = req.query; 
    try {
      const transaction = await this.paymentService.getTransactionStatus(transactionId); // Corrigido
      res.status(200).json(transaction);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = PaymentController;

