const {Facility} = require('../models/models')

class facilityController {
    async registration(req, res, next) {
        try {
            const {name} = req.body    
            const facility = await Facility.create({name})
            return res.status(200).json(facility);
        } catch (error) {
            return res.status(500).send(error.message);
        }   
      }

    async delete(req, res) {
        try {
            const {id} = req.body    
            const count = await Facility.destroy({where:{id: id}})
            return res.status(200).json({deleted: count});
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async getAll(req, res) {
        try {
            const facility = await Facility.findAll();
            return res.status(200).json(facility);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async getOne(req, res) {
        try {
            const facility = await Facility.findOne({where: {id:req.params.id}})
            return res.status(200).json(facility)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }
}

module.exports = new facilityController();