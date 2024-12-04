const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const { User } = require('../models'); // Certifique-se de que o modelo User está correto e existe

// Listar todos os usuários
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Criar um novo usuário
router.post('/', async (req, res) => {
    try {
        const { email, data_nasc, password } = req.body;
        const newUser = await User.create({ email, data_nasc, password });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Atualizar um usuário existente
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { email, data_nasc, password } = req.body;
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        user.email = email;
        user.data_nasc = data_nasc;
        user.password = password;
        await user.save();

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Deletar um usuário
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        await user.destroy();
        res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
;
