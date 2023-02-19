const {OrganizationReport} = require('../models/models')
const uuid = require('uuid')
const path = require('path')

class organizationReportController {
    async registration(req, res, next) {
        try {
            const {period} = req.body
            const {file} = req.file
            let filename = uuid.v4() + '.png'
            file.mv(path.resolve(__dirname,'..', 'static', filename))
            const object = await OrganizationReport.create({period, source:filename})
            return res.status(200).json(object);
        } catch (error) {
            return res.status(500).send(error.message);
        }   
      }

    async delete(req, res) {
        try {
            const {id} = req.body    
            const count = await OrganizationReport.destroy({where:{id: id}})
            return res.status(200).json({deleted: count});
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async getAll(req, res) {
        try {
            const organizationReports = await OrganizationReport.findAll();
            return res.status(200).json(organizationReports);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    async getOne(req, res) {
        try {
            const organizationReport = await OrganizationReport.findOne({where: {id:req.params.id}})
            return res.status(200).json(organizationReport)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }
}

module.exports = new organizationReportController();