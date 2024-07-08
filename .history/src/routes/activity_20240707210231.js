const status = require('http-status')
const { Router } = require('express')
const router = Router()

const activityController = require('../controller/activity')

router.get('/', 
    // #swagger.tags = ['Activity']
    // #swagger.summary = 'Retorna todos as atividades'
    // #swagger.description = 'Endpoint que busca todas as atividades'
  activityController.getAll
)

router.post('/', 
  // #swagger.tags = ['Activity']
  // #swagger.description = 'Endpoint que cria uma nova atividade'
  activityController.create
)

router.put('/:id', 
  // #swagger.tags = ['Activity']
  // #swagger.description = 'Endpoint que retorna uma atividade pelo seu identificador'
  activityController.update
)

router.delete('/:id', 
  // #swagger.tags = ['Activity']
  // #swagger.description = 'Endpoint que remove uma atividade'
  activityController.deleteEntity
)

module.exports = router
