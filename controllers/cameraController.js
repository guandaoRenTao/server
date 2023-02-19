const {Camera} = require('../models/models')

class cameraController {
    async registration(req, res, next) {
        try {
            const {ip} = req.body    
            const camera = await Camera.create({ip})
            return res.status(200).json(camera);
        } catch (error) {
            return res.status(500).send(error.message);
        }   
      }

    async delete(req, res) {
        try {
            const {id} = req.body    
            const count = await Camera.destroy({where:{id: id}})
            return res.status(200).json({deleted: count});
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async getAll(req, res) {
        try {
            const camera = await Camera.findAll();
            return res.status(200).json(camera);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async getOne(req, res) {
        try {
            const camera = await Camera.findOne({where: {id:req.params.id}})
            return res.status(200).json(camera)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }
}

module.exports = new cameraController();