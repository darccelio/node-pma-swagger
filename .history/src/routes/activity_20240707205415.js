const status = require('http-status')
const { Router } = require('express')
const router = Router()

const activityController = require('../controller/activity')

router.get('/', () => {
    // #swagger.tags = ['Activity']
    // #swagger.summary = 'Retorna todos as atividades'
    // #swagger.description = 'Endpoint que busca todas as atividades'
  return activityController.getAll
})

router.post('/', () => {
  // #swagger.tags = ['Activity']
  // #swagger.description = 'Endpoint que cria uma nova atividade'
  return activityController.create
})

router.put('/:id', () => {
  // #swagger.tags = ['Activity']
  // #swagger.description = 'Endpoint que retorna uma atividade pelo seu identificador'
  return activityController.update
})

router.delete('/:id', () => {
  // #swagger.tags = ['Activity']
  // #swagger.description = 'Endpoint que remove uma atividade'
  return activityController.delete
})

module.exports = router
