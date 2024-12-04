class CartController {
  constructor(cartService) {
    this.cartService = cartService;
  }

  // Adicionar produto ao carrinho
  async addProduct(req, res) {
    const { userId, productId, quantity } = req.body; 
    try {
      const cart = await this.cartService.addProduct(userId, productId, quantity); // Corrigido
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Remover produto do carrinho
  async removeProduct(req, res) {
    const { userId, productId } = req.query; 
    console.log("User ID recebido:", userId, "Product ID recebido:", productId);
    try {
      const cart = await this.cartService.removeProduct(userId, productId); // Corrigido
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Obter carrinho de um usuário
  async getCart(req, res) {
    const { userId } = req.query; 
    console.log("User ID recebido:", userId);
    try {
      const cart = await this.cartService.getCart(userId); 
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = CartController;

