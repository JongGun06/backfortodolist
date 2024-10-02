let {text} = require('express')
let {Db} = require('../models/models')

class dbController {
    async create(req,res){
        let {text} = req.body
        let type = await Db.create({text})
        return res.json(type)
    }
    async get(req,res) {
        let dbs = await Db.findAll()
        return res.json(dbs)
    }
    async del(req,res) {
        let {id} = req.params
        let deleteTodo = await Db.destroy({where: {id}})
    }
    async update(req,res) {
        let {id} = req.params
        let [updateTodo] = await Db.update({text}, {where: {id}})
        let updateRecord = await Db.findByPk(id)
        return res.json(updateRecord)
    }
}

module.exports = new dbController()