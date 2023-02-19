const sequelize = require('../db')
const { DataTypes} = require('sequelize')

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  login: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: 'RESIDENT'},
})

const Organization = sequelize.define('organization', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  inn: {type: DataTypes.STRING},
  ogrn: {type: DataTypes.STRING},
})

const Contractor = sequelize.define('contractor', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  full_name: {type: DataTypes.STRING},
  phone: {type: DataTypes.DECIMAL, unique: true},
})

const Resident = sequelize.define('resident', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  full_name: {type: DataTypes.STRING},
  phone: {type: DataTypes.DECIMAL, unique: true},
  email: {type: DataTypes.STRING, unique: true},
})


const Object = sequelize.define('object', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  address: {type: DataTypes.STRING},
  type: {type: DataTypes.STRING},
})

const Apartament  = sequelize.define('apartament', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  num: {type: DataTypes.INTEGER},
})

Object.hasMany(Apartament)
Apartament.belongsTo(Object)

Object.hasMany(Organization)
Organization.belongsTo(Object)

Apartament.hasMany(Resident)
Resident.belongsTo(Apartament)


const Repairment  = sequelize.define('repairment', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  type: {type: DataTypes.STRING},
  description: {type: DataTypes.STRING},
  date: {type: DataTypes.DATE},
})

Object.hasMany(Repairment)
Repairment.belongsTo(Object)


const OrganizationReport  = sequelize.define('organization_report', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  period: {type: DataTypes.DATE},
  // source: {type: DataTypes.STRING},
})

Organization.hasMany(OrganizationReport)
OrganizationReport.belongsTo(Organization)


const Project  = sequelize.define('project', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING},
})

const ProjectContractor  = sequelize.define('projectContractor', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

Contractor.belongsToMany(Project, {through: ProjectContractor})
Project.belongsToMany(Contractor, {through: ProjectContractor})

const Task = sequelize.define('task', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  text: {type: DataTypes.STRING},
})

Project.hasMany(Task)
Task.belongsTo(Project)

const Facility  = sequelize.define('facility', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING},
})

const FacilityCheckout  = sequelize.define('facility_checkout', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  date: {type: DataTypes.DATE},
})

Facility.hasMany(FacilityCheckout);
FacilityCheckout.belongsTo(Facility);

const Anouncment  = sequelize.define('anouncment', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING},
  text: {type: DataTypes.STRING},
  date: {type: DataTypes.DATE},
})


module.exports = { 
  User,
  Organization,
  Contractor,
  Resident,
  Object,
  Apartament,
  Repairment,
  OrganizationReport,
  Project,
  ProjectContractor,
  Task,
  Facility,
  FacilityCheckout,
  Anouncment
}