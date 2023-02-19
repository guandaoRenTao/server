const {Project} = require('../models/models')

class projectController {
    async registration(req, res, next) {
        try {
            const {name} = req.body    
            const project = await Project.create({name})
            return res.status(200).json(project);
        } catch (error) {
            return res.status(500).send(error.message);
        }   
      }

    async delete(req, res) {
        try {
            const {id} = req.body    
            const count = await Project.destroy({where:{id: id}})
            return res.status(200).json({deleted: count});
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async getAll(req, res) {
        try {
            const project = await Project.findAll();
            return res.status(200).json(project);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async getOne(req, res) {
        try {
            const project = await Project.findOne({where: {id:req.params.id}})
            return res.status(200).json(project)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }
}

module.exports = new projectController();