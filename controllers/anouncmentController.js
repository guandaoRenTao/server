const {Anouncment} = require('../models/models')

class anouncmentController {
    async registration(req, res, next) {
        try {
            const {title, text, date} = req.body    
            const anouncment = await Anouncment.create({title, text, date})
            return res.status(200).json(anouncment);
        } catch (error) {
            return res.status(500).send(error.message);
        }   
      }

    async delete(req, res) {
        try {
            const {id} = req.body    
            const count = await Anouncment.destroy({where:{id: id}})
            return res.status(200).json({deleted: count});
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async getAll(req, res) {
        try {
            const anouncment = await Anouncment.findAll();
            return res.status(200).json(anouncment);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async getOne(req, res) {
        try {
            const anouncment = await Anouncment.findOne({where: {id:req.params.id}})
            return res.status(200).json(anouncment)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }
}

module.exports = new anouncmentController();