const db = require('../models')
const router = require('express').Router()

//GET /haikyuus
router.get('/', (req,res) => {
    db.Haikyuu.find()
    .then(foundPlayers => {
        res.send(foundPlayers)
    })
    .catch(err => {
        res.status(503).send({message: `slacking off?`})
    })
})

//GET /haikyuus/:id
router.get('/:id', (req, res) => {
    db.Haikyuu.findById(req.params.id)
    .then(foundPlayer => {
        if(foundPlayer) {
            res.send(foundPlayer)
        } else {
            res.status(404).send({message: `Player not located`})
        }
    }).catch(err => {
        console.log(err)
        res.status(503).send({message: `Service Unavailable`})
    })
    // res.send(`haikyuus id route`)
})

//POST /haikyuus
router.post('/', (req, res) => {
    db.Haikyuu.create(req.body)
    .then(createdHaikyuu => {
        console.log(createdHaikyuu)
        res.status(201).send(createdHaikyuu)
    })
    .catch(err => {
        if(err.name === 'ValidationError') {
            res.status(406).send({message:'Validation Error'})
        } else {
            res.status(503).send({message: 'Database or server error!'})
        }
    })
})

//PUT /haikyuus/:id
router.put('/:id', (req, res) => {
    db.Haikyuu.findByIdAndUpdate({
        _id: req.params.id
    },
    req.body,
    {
        new:true
    })
    .then(updatedHaikyuu => {
        res.send(updatedHaikyuu)
    })
    .catch(err => {
        console.log(err)
        res.status(503).send({message: 'Server Error'})
    })
})

router.delete('/:id', (req, res) => {
    db.Haikyuu.findByIdAndDelete(req.params.id)
    .then(()=> {
        res.status(204).send()
    })
    .catch(err => {
        console.log(err)
        res.status(503).send({message: 'Server Error'})
    })
})



module.exports = router