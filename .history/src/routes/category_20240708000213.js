const status = require('http-status')
const { Router } = require('express')
const router = Router()

const controller = require('./../controller/category')

router.get(
  '/',
  /*
    #swagger.tags = ['Category']
    #swagger.summary = 'Retorna todas as categorias'
    #swagger.description = 'Endpoint que busca todas as categorias'
  */
  controller.getAll
)

router.post(
  '/',

  /*
    #swagger.tags = ['Category']
    #swagger.summary = 'Cria uma nova categoria'
    #swagger.description = 'Endpoint que cria uma nova categoria'
  */



  controller.create
)

router.put(
  '/:id',

   /*
    #swagger.tags = ['Category']
    #swagger.summary = 'Atualiza uma categoria'
    #swagger.description = 'Endpoint que altera dados de uma categoria cadastrada'
  */

  controller.update
)

router.delete(
  '/:id',

  /*
    #swagger.tags = ['Category']
    #swagger.summary = 'Remove uma categoria'
    #swagger.description = 'Endpoint que remove uma categoria cadastrada'
  */

  controller.deleteEntity
)

module.exports = router
