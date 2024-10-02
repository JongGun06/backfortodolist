let sequelize = require('../db')
let {DataTypes} = require('sequelize')

let Db = sequelize.define('db', {
    text: {type: DataTypes.STRING}
})

module.exports = {Db}