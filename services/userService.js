const auth = require('../auth');
const bcrypt = require('bcrypt');
const { User } = require('../models');

class UserService {
  constructor(UserModel) {
    this.User = UserModel || User;
  }

  // Create a new user
  async create(email, data_nasc, password) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10); // Use a defined salt rounds value
      const newUser = await this.User.create({
        email,
        data_nasc,
        password: hashedPassword,
      });
      return newUser || null;
    } catch (error) {
      throw error;
    }
  }

  // Find all users
  async findAll() {
    try {
      const allUsers = await this.User.findAll();
      return allUsers || null;
    } catch (error) {
      throw error;
    }
  }

  // Find a user by ID
  async findById(id) {
    try {
      const user = await this.User.findByPk(id);
      return user || null;
    } catch (error) {
      throw error;
    }
  }

  // User login
  async login(email, password) {
    try {
      const user = await this.User.findOne({ where: { email } });
      if (user) {
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
          const token = auth.generateToken(user); // Generate token
          user.dataValues.Token = token;
          user.dataValues.password = ''; // Do not return the password
          return user;
        } else {
          throw new Error('Senha inválida');
        }
      } else {
        throw new Error('Usuário não encontrado');
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserService();
