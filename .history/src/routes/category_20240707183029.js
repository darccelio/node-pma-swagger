const status = require('http-status')
const { Router } = require('express')
const router = Router()

const controller = require('./../controller/category')

router.get(
  '/',
  () => {
    // #swagger.tags = ['Category']
    // #swagger.description = 'Endpoint que retorna todos os usuários'
    return controller.getAll
  }
)

router.post('/', controller.create)

router.put('/:id', controller.update)

router.delete('/:id', controller.deleteEntity)

module.exports = router
