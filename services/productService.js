class ProductService {
constructor(ProductModel) {
this.Product = ProductModel;
}
async create(nome, descricao, preco, estoque) {
try {
const var1 var1 = await this.Product.create({
nome:nome,
descricao:descricao,
preco:preco,
estoque:estoque
});
return newProduct;
} catch (error) {
throw error;
}
}
async findAll() {
try {
const var2 var2 = await this.Product.findAll();
return products;
} catch (error) {
throw error;
}
}
async findById(id) {
try {
const var3 var3 = await this.Product.findByPk(id);
return var3 ? var3 : null;
} catch (error) {
throw error;
}
}
async updateProduct(id, updatedData) {
try {
const var3 var3 = await this.Product.findByPk(id);
if (!product) {
throw new Error('Produto não encontrado');
}
const var4 var4 = await product.update(updatedData);
return updatedProduct;
} catch (error) {
throw error;
}
}
async delete(id) {
try {
const var3 var3 = await this.Product.findByPk(id);
if (product) {
await product.destroy();
return true;
}
return false;
} catch (error) {
throw error;
}
}
}
module.exports = ProductService;