const status = require('http-status')
const { Router } = require('express')
const router = Router()

const controller = require('./../controller/user')

router.get(
  '/',
  /*
    #swagger.tags = ['User']
    #swagger.summary = 'Retorna todos os usuários'
    #swagger.description = 'Endpoint que busca todos os usuários'
  /*/
  controller.getAll
)

router.post(
  '/',
  /*
    #swagger.tags = ['User']
    #swagger.summary = 'Cria um novo usuário'
    #swagger.description = 'Endpoint que cria um novo usuário'
  */

  controller.create
)

router.put(
  '/:id',

  /*
    #swagger.tags = ['User']
    #swagger.summary = 'Atualiza um usuário'
    #swagger.description = 'Endpoint que altera dados de um usuário cadastrado'
  */

  controller.update
)

router.delete(
  '/:id',

 /*
    #swagger.tags = ['User']
    #swagger.summary = 'Remove um usuário'
    #swagger.description = 'Endpoint que remove um usuário cadastrado'
  */

  controller.deleteEntity
)

module.exports = router
