const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');
const { authenticate } = require('../middlewares/auth');

router.use(authenticate); // Proteger rotas com autenticação

router.get('/', supplierController.getAll);
router.post('/', supplierController.create);

module.exports = router;

