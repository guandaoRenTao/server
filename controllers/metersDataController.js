const {MetersData} = require('../models/models')

class metersDataController {
    async registration(req, res, next) {
        try {
            const {hot_water, cold_water, electricity, userId} = req.body    
            const metersData = await MetersData.create({hot_water, cold_water, electricity, userId})
            return res.status(200).json(metersData);
        } catch (error) {
            return res.status(500).send(error.message);
        }   
      }

    async delete(req, res) {
        try {
            const {id} = req.body    
            const count = await MetersData.destroy({where:{id: id}})
            return res.status(200).json({deleted: count});
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async getAll(req, res) {
        try {
            const metersData = await MetersData.findAll();
            return res.status(200).json(metersData);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async getOne(req, res) {
        try {
            const metersData = await MetersData.findOne({where: {id:req.params.id}})
            return res.status(200).json(metersData)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }
}

module.exports = new metersDataController();