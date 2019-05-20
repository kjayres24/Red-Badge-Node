var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var huntlocations = sequelize.import('../models/huntlocations');
validateSession = require('../middleware/validate-session');
router.get('/getall', validateSession, (req, res) => {
    huntlocations.findAll()
        .then(huntlocations => res.status(200).json(huntlocations))
        .catch(err => res.status(500).json({ error: err }))
});
router.get('/ghosthunts', validateSession, (req, res) => {
    huntlocations.findAll({ where: { tag: 'Ghost Hunts' } })
        .then(huntlocations => res.status(200).json(huntlocations))
        .catch(err => res.status(500).json({ error: err }))
})
router.get('/hauntedlocations', validateSession, (req, res) => {
    huntlocations.findAll({ where: { tag: 'Haunted Locations' } })
        .then(huntlocations => res.status(200).json(huntlocations))
        .catch(err => res.status(500).json({ error: err }))
})
router.get('/usershauntedlocations', validateSession, (req, res) => {
    huntlocations.findAll({ where: { userId: req.user.id, tag: 'Haunted Locations', } })
        .then(location => res.status(200).json(location))
        .catch(err => res.status(500).json({ error: err }))
});
router.get('/usersghosthunts', validateSession, (req, res) => {
    huntlocations.findAll({ where: { userId: req.user.id, tag: 'Ghost Hunts', } })
        .then(location => res.status(200).json(location))
        .catch(err => res.status(500).json({ error: err }))
});
router.post('/create', validateSession, (req, res) => {
    const newPost = {
        location: req.body.location,
        description: req.body.description,
        time: req.body.time,
        date: req.body.date,
        img: req.body.img,
        userId: req.user.id,
        tag: req.body.tag,
        name: req.user.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    };
    huntlocations.create(newPost)
        .then(huntlocations => res.status(200).json(huntlocations))
        .catch(err => res.status(500).json({ error: err }))
})
router.put('/update/:id', validateSession, (req, res) => {
    huntlocations.update(req.body, { where: { id: req.params.id, userId: req.user.id } }) //add sequelize associations here?
        .then(huntlocations => res.status(200).json(huntlocations))
        .catch(err => res.status(500).json({ error: err }))
})
router.delete('/delete/:id', validateSession, (req, res) => {
    huntlocations.destroy({ where: { id: req.params.id, userId: req.user.id } })
        .then(recChanged => res.status(200).json(recChanged))
        .catch(err => res.status(500).json({ error: err }))
})
router.delete('/admindelete/:id', validateSession, (req, res) => {
    huntlocations.destroy({ where: { id: req.params.id } })
        .then(recChanged => res.status(200).json(recChanged))
        .catch(err => res.status(500).json({ error: err }))
})
module.exports = router;