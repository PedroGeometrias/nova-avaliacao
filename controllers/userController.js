const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models');

class UserController {
  constructor(UserService) {
    this.userService = UserService;
  }

  // Create a new user (register)
  async createUser(req, res) {
    const { email, data_nasc, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await this.userService.create(email, data_nasc, hashedPassword);
      res.status(201).json(newUser); // Return the created user
    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro ao gravar o novo usuário.' });
    }
  }

  // Find all users
  async findAllUsers(req, res) {
    try {
      const allUsers = await this.userService.findAll(); // Fetch all users
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro ao localizar todos os usuários.' });
    }
  }

  // Find a user by ID
  async findUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await this.userService.findById(id);
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro ao localizar o usuário pelo id.' });
    }
  }

  // User login
  async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await this.userService.findByEmail(email); // Find user by email
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ error: 'Senha incorreta.' });
      }
      const token = jwt.sign({ id: user.id }, 'seu_segredo_jwt', { expiresIn: '1h' });
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao logar o usuário.' });
    }
  }
}

module.exports = UserController;

