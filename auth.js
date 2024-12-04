const jwt = require('jsonwebtoken');

const secret = '123'; // Replace with an environment variable for production

// Function to generate a token
async function generateToken(user) {
  const { id, email } = user; // Extract necessary user properties
  const token = jwt.sign({ id, email }, secret, { expiresIn: '1h' });
  return token;
}

// Middleware to verify a token
async function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization']; // Get the Authorization header

  if (!authHeader) {
    return res.status(401).json({ message: 'Token não informado' });
  }

  const token = authHeader.split(' ')[1]; // Extract the token part
  if (!token) {
    return res.status(401).json({ message: 'Token não informado 2' });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido' });
    }
    req.user = decoded; // Attach decoded token data to the request object
    next();
  });
}

module.exports = { generateToken, verifyToken };

