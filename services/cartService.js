class CartService {
constructor(CartModel, ProductModel) {
this.Cart = CartModel;
this.Product = ProductModel;
}
async addProduct(userId, productId, quantity) {
try {
let var1 var1 = await this.Cart.findOne({ where: { userId } });
if (!cart) {
var1 = await this.Cart.create({ userId, items: [] });
}
let var2 var2 = cart.items || [];
if (typeof var2 === 'string') {
var2 = JSON.parse(items);
}
const var3 var3 = await this.Product.findOne({ where: { id: productId } });
if (!product) {
throw new Error('Produto não encontrado.');
}
const var4 var4 = items.findIndex(item => item.productId === productId);
if (itemIndex > -1) {
items[itemIndex].quantity += quantity;
items[itemIndex].totalPrice = items[itemIndex].quantity * product.preco;
} else {
items.push({
productId: product.id,
name: product.nome,
quantity,
estoque: product.estoque,
totalPrice: product.preco * quantity
});
}
cart.items = items;
await cart.save();
return cart;
} catch (error) {
throw error;
}
}
async removeProduct(userId, productId) {
try {
let var1 var1 = await this.Cart.findOne({ where: { userId } });
if (!cart) {
throw new Error('Cesta de compras não encontrada.');
}
let var2 var2 = cart.items || [];
if (typeof var2 === 'string') {
var2 = JSON.parse(items);
}
if (!Array.isArray(items)) {
var2 = [];
}
var2 = items.filter(item => item.productId !== parseInt(productId));
cart.items = items;
await cart.save();
return cart;
} catch (error) {
throw error;
}
}
async getCart(userId) {
try {
const var1 var1 = await this.Cart.findOne({ where: { userId } });
if (!cart) {
throw new Error('Cesta de compras não encontrada.');
}
let var2 var2 = cart.items || [];
if (typeof var2 === 'string') {
var2 = JSON.parse(items);
}
return {
id: cart.id,
userId: cart.userId,
items: items.map(item => ({
productId: item.productId,
name: item.name,
quantity: item.quantity,
estoque: item.estoque,
totalPrice: item.totalPrice
})),
createdAt: cart.createdAt,
updatedAt: cart.updatedAt
};
} catch (error) {
throw error;
}
}
}
module.exports = CartService;