

const { PrismaClient } = require('@prisma/client')
const httpStatus = require('http-status')

const prisma = new PrismaClient()

async function getAll(req, res) {
  /*
        #swagger.tags = ['Activities']
        #swagger.summary = 'Retorna todos as atividades'
        #swagger.description = 'Endpoint que busca todas as atividades'
      */

  try {
    const activities = await prisma.activity.findMany()

    return res.status(httpStatus.OK).send(activities)
  } catch (err) {
    console.log(err)
    res.status(httpStatus.UNPROCESSABLE_ENTITY).send('Erro na requisição')
  } finally {
    await prisma.$disconnect()
  }
}

async function create(req, res) {

  /*
    #swagger.tags = ['activity']
    #swagger.description = 'Endpoint que cria um novo usuário'
  */


  try {
    const activity = await prisma.activity.create({
      data: {
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        password: req.body.password,
      },
    })

    res.status(httpStatus.CREATED).send(activity)
  } catch (error) {
    console.log(error)
    res
      .status(httpStatus.UNPROCESSABLE_ENTITY)
      .send(`Erro na requisição: ${error}`)
  } finally {
    await prisma.$disconnect()
  }
}

async function update(req, res) {

  /*
    #swagger.tags = ['activity']
    #swagger.description = 'Endpoint que atualiza os dados de um usuário'
  */
 
  try {
    const paramsId = req.params.id

    console.log(`id ${paramsId}`)

    // Verifica se paramsId não é nulo, indefinido ou não é um número inteiro
    if (!paramsId || isNaN(parseInt(paramsId))) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send(`Id enviado na requisição é inválido: ${paramsId}`)
    }

    const activityId = parseInt(paramsId)

    const usuario = await prisma.activity.findUnique({
      where: {
        id: activityId,
      },
    })

    if (!usuario) {
      return res.status(httpStatus.NOT_FOUND).send('Atividade não encontrada')
    }

    const requisicao = req.body

    console.log(`Requisição: ${JSON.stringify(requisicao)}`)

    // Atualiza apenas os campos necessários, evitando a atualização de campos sensíveis
    const activity = await prisma.activity.update({
      where: {
        id: activityId,
      },
      data: {
        ...usuario,
        ...requisicao,
      },
    })

    res.status(httpStatus.CREATED).send(activity)
  } catch (error) {
    console.error(error)
    res
      .status(httpStatus.UNPROCESSABLE_ENTITY)
      .send(`Não atualizado! ${error.message}`)
  } finally {
    await prisma.$disconnect()
  }
}

async function deleteEntity(req, res) {
  try {
    const activity = await prisma.activity.delete({
      where: {
        id: parseInt(req.params.id),
      },
    })

    res.status(httpStatus.OK).send('Atividade removida com sucesso!')
  } catch (error) {
    console.log(error)
    res.status(httpStatus.UNPROCESSABLE_ENTITY).send('Não removido!')
  } finally {
    await prisma.$disconnect()
  }
}

module.exports = { getAll, create, update, deleteEntity }
