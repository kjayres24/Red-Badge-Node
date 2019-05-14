const router = require('express').Router()
const Psnlstorieslegends = require('../db').import('../models/psnlstorieslegends')
const validateSession = require('../middleware/validate-session')

router.post('/post', validateSession, (req, res) => {
    Psnlstorieslegends.create({
        title:req.body.title,
        time:req.body.time,
        date:req.body.date,
        img:req.body.img,
        description:req.body.description,
        userId:req.user.id,
        tag: req.body.tag,
        name: req.user.name
       
    })
        .then(
            createSuccess = psnlstorieslegends => {
                res.status(200).json({ message: 'story logged', psnlstorieslegends: psnlstorieslegends })
            },
            createError = err => {
                res.send(500, err.message)

            })
})


     router.get('/getall', validateSession, (req,res)=>{
        Psnlstorieslegends.findAll({

        })
        .then(Psnlstorieslegends => res.status(200).json(Psnlstorieslegends))
        .catch(err=> res.status(500).json({error: err}))
    });

    router.get('/personalstories', validateSession, (req,res)=>{
        Psnlstorieslegends.findAll({ where: {tag: 'Personal Stories'}
        })
        .then(Psnlstorieslegends => res.status(200).json(Psnlstorieslegends))
        .catch(err=> res.status(500).json({error: err}))
    });
    
    router.get('/urbanlegends', validateSession, (req,res)=>{
        Psnlstorieslegends.findAll({where: {tag: 'Urban Legends' }
        })
        .then(Psnlstorieslegends => res.status(200).json(Psnlstorieslegends))
        .catch(err=> res.status(500).json({error: err}))
    });


    router.get('/personalstories', (req, res) => {
        Psnlstorieslegends.findAll({ where: { tag: 'Personal Stories' } })
            .then(stories => res.status(200).json(stories))
            .catch(err => res.status(500).json({ error: err }))
    });

    router.get('/urbanlegends', (req, res) => {
        Psnlstorieslegends.findAll({ where: { tag: 'Urban Legends' } })
            .then(legends => res.status(200).json(legends))
            .catch(err => res.status(500).json({ error: err }))
    });

    router.get('/userspersonalstories', validateSession, (req, res) => {
        Psnlstorieslegends.findAll({ where: { userId:req.user.id, tag: 'Personal Stories' } })
            .then(stories => res.status(200).json(stories))
            .catch(err => res.status(500).json({ error: err }))
    });

    router.get('/usersurbanlegends', validateSession, (req, res) => {
        Psnlstorieslegends.findAll({ where: { userId:req.user.id, tag: 'Urban Legends' } })
            .then(legends => res.status(200).json(legends))
            .catch(err => res.status(500).json({ error: err }))
    });



    router.put('/update/:id', validateSession ,(req, res) => {
        Psnlstorieslegends.update(req.body, { where: { id: req.params.id, userId: req.user.id }}) //add sequelize association here?
            .then(Psnlstorieslegends => res.status(200).json(Psnlstorieslegends))
            .catch(err => res.status(500).json({error: err}))
        });
    
   
        router.delete('/delete/:id', validateSession, (req,res)=>{
        Psnlstorieslegends.destroy({where: {id: req.params.id, userId: req.user.id }}) //add sequelize association here?
        .then(recChanged => res.status(200).json(recChanged))
        .catch(err => res.status(500).json({ error: err }))
})





module.exports = router;