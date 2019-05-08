var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var huntlocations = sequelize.import('../models/huntlocations');
validateSession = require('../middleware/validate-session');


router.get('/getall', (req, res) => {
    huntlocations.findAll()
        .then(huntlocations => res.status(200).json(huntlocations))
        .catch(err => res.status(500).json({ error: err }))
});

router.post('/create', validateSession, (req, res) => {
    huntlocations.create({
        location: req.body.huntlocations.location,
        description: req.body.huntlocations.description,
        time: req.body.huntlocations.time,
        date: req.body.huntlocations.date,
        img: req.body.huntlocations.img
    })
        .then(huntlocations => res.status(200).json(huntlocations))
        .catch(err => res.status(500).json({ error: err }))
})

router.put('/update', validateSession, (req, res) => {
    huntlocations.update(req.body, { where: { userId: SETNULL } }) //add sequelize associations here?
        .then(huntlocations => res.status(200).json(huntlocations))
        .catch(err => res.status(500).json({ error: err }))
})

router.delete('/delete', validateSession, (req, res) => {
    huntlocations.destroy({ where: { userId: CASCADE } })
        .then(recChanged => res.status(200).json(recChanged))
        .catch(err => res.status(500).json({ error: err }))
})

module.exports = router;