const status = require('http-status')
const { Router } = require('express')
const router = Router()

const controller = require('./../controller/category')

router.get('/', () => {
  // #swagger.tags = ['Category']
  // #swagger.description = 'Endpoint que retorna todas as categorias'
  return controller.getAll
})

router.post('/', () => {
  return
  /*
    #swagger.tags = ['Category']
    #swagger.description = 'Endpoint que cria uma nova categoria'
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
})

router.put('/:id', controller.update)

router.delete('/:id', controller.deleteEntity)

module.exports = router
