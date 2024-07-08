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
    #swagger.description = 'Endpoint utilziado para criação de uma nova categoria'
    #swagger.parameters['CreateCategory'] = {
      in: 'body',
      description: 'Dados para criar uma categoria',
      required: true,
      schema: {
        $ref: '#/definitions/CreateCategoryInput'
      }
    }
    #swagger.responses[201] = {
      description: 'Categoria criada com sucesso',
      schema: {
        $ref: '#/definitions/Category'
      }
    }
    #swagger.responses[422] = {
      description: 'Erro na requisição',
      schema: {
        type: 'string'
      }
    }   
  */

  controller.create
)

router.put(
  '/:id',

  /*
    #swagger.tags = ['Category']
    #swagger.description = 'Endpoint que altera dados de uma categoria'
  */

  controller.update
)

router.delete(
  '/:id',

  /*
    #swagger.tags = ['Category']
    #swagger.description = 'Endpoint que remove uma categoria'
  */

  controller.deleteEntity
)

module.exports = router
