const {Process} = require("../models/process.model")

module.exports.createProcess = (req, res) => {
    const { process, quarter , responsible, administrator, percentage, observations, history } = req.body;
    Process.create({
        process, 
        quarter, 
        responsible, 
        administrator, 
        percentage, 
        observations, 
        history
        
    })
    .then(Process =>res.json(Process))
    .catch(err => res.status(400).json(err))
}

module.exports.getAllProcesss = (req, res) => {
    Process.find({})
        .then(Processs => res.json(Processs))
        .catch(err => res.json(err))
}

module.exports.getProcess = (req, res) =>{
    Process.findOne({ _id: req.params.id })
        .then(Process => res.json(Process))
        .catch(err => res.json(err))
}

module.exports.updateProcess = (req,res) => {
    Process.findOneAndUpdate({_id: req.params.id}, req.body,{new:true})
        .then(updateProcess => res.json(updateProcess))
        .catch(err => res.json(err))
}

module.exports.deleteProcess = (req,res) =>{
    Process.deleteOne({_id: req.params.id})
        .then(deleteProcess => res.json(deleteProcess))
        .catch(eer => res.json(err))
}

