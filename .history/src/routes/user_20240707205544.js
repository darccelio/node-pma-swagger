const status = require("http-status")
const { Router } = require("express")
const router = Router()

const controller = require("./../controller/user")

router.get('/', () => {
  /*
    #swagger.tags = ['Usuarios']
    #swagger.summary = 'Retorna todos os usuários'
    #swagger.description = 'Endpoint que busca todos os usuários'
  /*/
  return controller.getAll
})

router.post('/', 
  /*
    #swagger.tags = ['User']
    #swagger.description = 'Endpoint que cria um novo usuário'
  */
  
  controller.create)

router.put('/:id', controller.update)

router.delete('/:id', controller.deleteEntity)


module.exports = router