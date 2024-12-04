const express = require('express');
const router = express.Router();
const { Product } = require('../models'); // Modelos do Sequelize
const { authenticate } = require('../middlewares/auth'); // Middleware de autenticação
const productController = require('../controllers/productController');

router.use(authenticate); // Adiciona o middleware de autenticação

// Listar todos os produtos
router.get('/', async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Criar um novo produto
router.post('/', async (req, res) => {
    try {
        const { nome, descricao, preco, estoque } = req.body;
        const newProduct = await Product.create({ nome, descricao, preco, estoque });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Atualizar um produto
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, descricao, preco, estoque } = req.body;
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }

        product.nome = nome;
        product.descricao = descricao;
        product.preco = preco;
        product.estoque = estoque;
        await product.save();

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Deletar um produto
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }

        await product.destroy();
        res.status(200).json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

