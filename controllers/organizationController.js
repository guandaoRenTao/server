const {Organization} = require('../models/models')

class organizationController {
    async registration(req, res, next) {
        try {
            const {inn, ogrn, objectId} = req.body    
            const object = await Organization.create({inn:inn, ogrn:ogrn, objectId:objectId})
            return res.status(200).json(object);
        } catch (error) {
            return res.status(500).send(error.message);
        }   
      }

    async delete(req, res) {
        try {
            const {id} = req.body    
            const count = await Organization.destroy({where:{id: id}})
            return res.status(200).json({deleted: count});
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async getAll(req, res) {
        try {
            const organizations = await Organization.findAll();
            return res.status(200).json(organizations);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async getOne(req, res) {
        try {
            const organization = await Organization.findOne({where: {id:req.params.id}})
            return res.status(200).json(organization)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }
}

module.exports = new organizationController();