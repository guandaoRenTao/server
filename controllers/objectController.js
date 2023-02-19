const {Object} = require('../models/models')

class objectController {
    async registration(req, res, next) {
        try {
            const {address, type} = req.body    
            const object = await Object.create({address, type})
            return res.status(200).json(object);
        } catch (error) {
            return res.status(500).send(error.message);
        }   
      }

    async delete(req, res) {
        try {
            const {id} = req.body    
            const count = await Object.destroy({where:{id: id}})
            return res.status(200).json({deleted: count});
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async getAll(req, res) {
        try {
            const objects = await Object.findAll();
            return res.status(200).json(objects);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async getOne(req, res) {
        try {
            const object = await Object.findOne({where: {id:req.params.id}})
            return res.status(200).json(object)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }
}

module.exports = new objectController();