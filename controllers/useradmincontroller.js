var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var User = sequelize.import('../models/useradmin');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const validateSession = require('../middleware/validate-session');

router.post('/signup', (req, res) => {
    User.create({
        isAdmin: false,
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        location: req.body.location
    })
        .then(
            createSuccess = (user) => {
                let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });

                res.status(200).json({
                    user: user,
                    sessionToken: token,
                    message: 'User created'
                })
            },
            createError = (err) => {
                res.status(500).json({ error: err })
            }
        )
})

router.post('/signin', (req, res) => {
    User.findOne({ where: { email: req.body.email } })
        .then(user => {
            if (user) {
                bcrypt.compare(req.body.password, user.password, (err, matches) => {
                    if (matches) {
                        let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                            expiresIn: 60 * 60 * 24
                        });
                        res.status(200).json({
                            user: user,
                            sessionToken: token,
                            message: 'User signed in!'
                        });
                    } else {
                        res.status(502).json({ error: 'Username or password does not match' })
                    }
                })
            } else {
                res.status(502).json({ error: 'Username or password does not match' })
            }
        },
            err => res.status(501).json({ error: 'Username or password does not match' })
        )
})

router.get('/currentuser', validateSession, (req, res) => {
    User.findAll({ where: { id: req.user.id } })
        .then(user => res.status(200).json(user))
        .catch(err => res.status(500).json({ error: err }))
});

router.put('/update/:id', validateSession, (req, res) => {
    User.update(req.body, { where: { id: req.params.id } })
        .then(admin => res.status(200).json(admin))
        .catch(err => res.status(500).json({ error: err }))
})


module.exports = router;