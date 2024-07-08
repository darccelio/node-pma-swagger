const status = require('http-status')
const { Router } = require('express')
const router = Router()

const controller = require('./../controller/category')

router.get(
  '/',
  () => {
    // #swagger.tags = ['Category']
    // #swagger.description = 'Endpoint que retorna todas as categorias'
    return controller.getAll
  }
)

router.post('/', () => {return 
  /*
    #swagger.tags = ['Category']
    #swagger.description = 'Endpoint que cria uma nova categoria'
    #swagger.body = {
      "description": "string" 
    }

  }
  */
  
  controller.create})

router.put('/:id', controller.update)

router.delete('/:id', controller.deleteEntity)

module.exports = router
