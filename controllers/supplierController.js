const { Supplier } = require('../models');

// Listar fornecedores
exports.getAll = async (req, res) => {
  const suppliers = await Supplier.findAll();
  res.json(suppliers);
};

// Criar fornecedor
exports.create = async (req, res) => {
  const { nome, contato } = req.body;
  const supplier = await Supplier.create({ nome, contato });
  res.status(201).json(supplier);
};


