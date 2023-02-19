const {Task} = require('../models/models')

class taskController {
    async registration(req, res, next) {
        try {
            const {text, projectId} = req.body    
            const task = await Task.create({text,projectId})
            return res.status(200).json(task);
        } catch (error) {
            return res.status(500).send(error.message);
        }   
      }

    async delete(req, res) {
        try {
            const {id} = req.body    
            const count = await Task.destroy({where:{id: id}})
            return res.status(200).json({deleted: count});
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async getAll(req, res) {
        try {
            const task = await Task.findAll();
            return res.status(200).json(task);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async getOne(req, res) {
        try {
            const task = await Task.findOne({where: {id:req.params.id}})
            return res.status(200).json(task)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }
}

module.exports = new taskController();