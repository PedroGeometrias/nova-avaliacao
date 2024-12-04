const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ error: 'Token não fornecido.' });
  }
  try {
    const decoded = jwt.verify(token, 'seu_segredo_jwt'); // Substitua 'seu_segredo_jwt' pela chave secreta real
    req.userId = decoded.id; // Adiciona o ID do usuário ao objeto `req` para uso nas rotas
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token inválido.' });
  }
};

