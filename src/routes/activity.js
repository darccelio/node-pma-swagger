const status = require('http-status')
const { Router } = require('express')
const router = Router()

const activityController = require('../controller/activity')

router.get(
  '/',
  // #swagger.tags = ['Activity']
  // #swagger.summary = 'Retorna todos as atividades'
  // #swagger.description = 'Endpoint que busca todas as atividades'
  activityController.getAll
)

router.post(
  '/',
  /*
    #swagger.tags = ['Activity']
    #swagger.summary = 'Cria uma nova atividade'
    #swagger.description = 'Endpoint que cria uma nova atividade'
  */
  activityController.create
)

router.get(
  '/:id',
  /*
    #swagger.tags = ['Activity']
    #swagger.summary = 'Retorna uma atividade com base no seu id'
    #swagger.description = 'Endpoint que busca uma atividade com base no seu id'
  */
  activityController.getPorId
)


router.put(
  '/:id',
  /*
    #swagger.tags = ['Activity']
    #swagger.summary = 'Atualiza uma atividade'
    #swagger.description = 'Endpoint que altera dados de uma atividade cadastrada'
  */
  activityController.update
)

router.delete(
  '/:id',
  /*
    #swagger.tags = ['Activity']
    #swagger.summary = 'Remove uma atividade'
    #swagger.description = 'Endpoint que remove uma atividade cadastrada'
  */
  activityController.deleteEntity
)

module.exports = router
