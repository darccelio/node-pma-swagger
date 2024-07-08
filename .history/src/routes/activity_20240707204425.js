const status = require("http-status")
const { Router } = require("express")
const router = Router()

const activityController = require('../controller/activity')

// router.get('/', (req, res) => {
//     // #swagger.tags = ['Activity']
//     // #swagger.description = 'Endpoint que retorna todas as atividades'
//     res.send("Returning activities");
// })

// router.post('/', (req, res) => {
//     // #swagger.tags = ['Activity']
//     // #swagger.description = 'Endpoint que cria uma nova atividade'
//     res.status(status.CREATED).send("Creating activities");
// })

// router.put('/:id', (req, res) => {
//     // #swagger.tags = ['Activity']
//     // #swagger.description = 'Endpoint que retorna uma atividade pelo seu identificador'
//     res.send(`Updating activity: ${req.params.id}`)
// })

// router.delete('/:id', (req, res) => {
//     // #swagger.tags = ['Activity']
//     // #swagger.description = 'Endpoint que remove uma atividade'
//     res.send(`Delete activity: ${req.params.id}`)
// })

router.get('/', () => {
    // #swagger.tags = ['Activity']
    // #swagger.description = 'Endpoint que retorna todas as atividades'
    res.send("Returning activities");
})

router.post('/', (req, res) => {
    // #swagger.tags = ['Activity']
    // #swagger.description = 'Endpoint que cria uma nova atividade'
    res.status(status.CREATED).send("Creating activities");
})

router.put('/:id', (req, res) => {
    // #swagger.tags = ['Activity']
    // #swagger.description = 'Endpoint que retorna uma atividade pelo seu identificador'
    res.send(`Updating activity: ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    // #swagger.tags = ['Activity']
    // #swagger.description = 'Endpoint que remove uma atividade'
    res.send(`Delete activity: ${req.params.id}`)
})




module.exports = router