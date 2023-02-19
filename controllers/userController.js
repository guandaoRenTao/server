const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')


const generateJwt = (id, login, role) => {
  return jwt.sign(
    {id, login, role}, 
    '123',
    {expiresIn: '24h'}
  )
}

class userController {

  async registration(req, res, next) {
    try {
      const {login, password, role} = req.body
      if (!login || !password) {
        return next(ApiError.badRequest('Некорректный логин или пароль'))
      }
      const candidate = await User.findOne({
        where: {login}
      })
      if (candidate) {
        return next(ApiError.badRequest('Пользователь с таким логином уже существует'))
      }

      const hashPassword = await bcrypt.hash(password, 5)
      const user = await User.create({login, password: hashPassword, role})
      const token = generateJwt(user.id, login, role)
      return res.json({token})
    } catch (error){
      return res.send(error.message)
    }
  }

  async login(req, res, next) {
    try{
      const {login, password} = req.body

      const user = await User.findOne({where: {login}})

      if (!user) {
        return next(ApiError.badRequest('Пользователь не найден'))
      }
      let comparePassword = await bcrypt.compareSync(password, user.password)
      if (!comparePassword) {
        return next(ApiError.internal('Неверный пароль'))
      }

      const token = generateJwt(user.id, login, user.role)
      return res.json({token, role: user.role})
    } catch(error){
      return res.status(500).send(error.message);
    }
  }

  async delete(req, res) {
    try {
      const {id} = req.body    
      const count = await User.destroy({where:{id: id}})
      return res.status(200).json({deleted: count});
    } catch (error) {
        return res.status(500).send(error.message);
    }
  }

  async auth(req, res) {
    const token = generateJwt(req.user.id, req.user.login, req.user.role)
    return res.json({token, role: req.user.role})
  }

  async getAll(req, res) {
    const user = await User.findAll();
    return res.json(user)
  }

}

module.exports = new userController();