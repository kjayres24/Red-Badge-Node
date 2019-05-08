const router = require ('express').Router()
const Psnlstorieslegends = require('../db').import('../models/psnlstorieslegends')
//const validateSession = require('../middleware/validate-session')

router.post('/post',  (req,res)=>{
    Psnlstorieslegends.create({
        title:req.body.title,
        time:req.body.time,
        date:req.body.date,
        img:req.body.img,
        description:req.body.description
    })
    .then(
        createSuccess = psnlstorieslegends =>{
            res.status(200).json({message: 'story logged', psnlstorieslegends: psnlstorieslegends})
        },
        createError= err => {
            res.send(500, err.message)
        
     })
     router.get('/', (req,res)=>{
        Psnlstorieslegends.findAll({
            where: {
                owner_id :req.user.id //add sequelize association here.
            }
        })
        .then(psnlstorieslegends => res.status(200).json(psnlstorieslegends))
        .catch(err=> res.status(500).json({error: err}))
    })

    router.put('/:id', (req, res) => {
        Psnlstorieslegends.update(req.body, { where: { id: req.params.id }}) //add sequelize association here.
            .then(psnlstorieslegends => res.status(200).json(psnlstorieslegends))
            .catch(err => res.status(500).json({error: err}))
        });
    
    router.delete('/:id',(req,res)=>{
        Psnlstorieslegends.destroy({where: {id: req.params.id}}) //add sequelize association here.
        .then(recChanged => res.status(200).json(recChanged))
        .catch(err=> res.status(500).json({error:err})) 
    })


});


module.exports =router;