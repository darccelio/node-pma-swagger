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
    #swagger.responses[200] = {
      description: 'Lista de usuários',
      schema: {
        type: 'array',
        items: {
          $ref: '#/definitions/User'
        }
      },
      examples: [
        {
          "id": 2,
          "firstName": "José",
          "lastName": "Teste",
          "password": "123456",
          "createdAt": "2024-07-07T20:53:14.047Z",
          "updatedAt": "2024-07-07T20:53:14.047Z"
        }
      ]
    }
    #swagger.responses[422] = {
      description: 'Erro na requisição',
      schema: {
        type: 'string'
      }
    }
  */
  controller.getAll
)

router.post(
  '/',
  /*
    #swagger.tags = ['User']
    #swagger.summary = 'Cria um novo usuário'
    #swagger.description = 'Endpoint que cria um novo usuário'
    #swagger.parameters['CreateUser'] = {
      in: 'body',
      description: 'Dados para criar um novo usuário',
      required: true,
      schema: {
        $ref: '#/definitions/CreateUserInput'
      }
    }
    #swagger.responses[201] = {
      description: 'Usuário criado com sucesso',
      schema: {
        $ref: '#/definitions/User'
      },
      examples: {
        "application/json": {
          "id": 1,
          "firstName": "João",
          "lastName": "Silva",
          "password": "password123",
          "createdAt": "2024-07-07T20:53:14.047Z",
          "updatedAt": "2024-07-07T20:53:14.047Z"
        }
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
