const status = require("http-status")
const { Router } = require("express")
const router = Router()

const controller = require("./../controller/user")


// router.get('/', (req, res) => {
//     // #swagger.tags = ['User']
//     // #swagger.description = 'Endpoint que retorna todos os usuários'
//     res.send("Returning users");
// })

// router.post('/', (req, res) => {
//     // #swagger.tags = ['User']
//     // #swagger.description = 'Endpoint que cria um novo usuário'
//     res.status(201).send("Creating User")
// })

// router.put('/:id', (req, res) => {
//     // #swagger.tags = ['User']
//     // #swagger.description = 'Endpoint que atualiza os dados de um usuário'
//     res.send(`Updating user: ${req.params.id}`)
// })

// router.delete('/:id', (req, res) => {
//     // #swagger.tags = ['User']
//     // #swagger.description = 'Endpoint que exclui um usuário'
//     res.send(`Delete user: ${req.params.id}`)
// })

router.get('/', () => {
  return controller.getAll
})

router.post('/', controller.create)

router.put('/:id', controller.update)

router.delete('/:id', controller.deleteEntity)


module.exports = router