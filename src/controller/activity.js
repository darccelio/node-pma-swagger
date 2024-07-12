

const { PrismaClient } = require('@prisma/client')
const httpStatus = require('http-status')

const prisma = new PrismaClient()

async function getAll(req, res) {


  try {
    const activities = await prisma.activity.findMany()

    const resp = {
      status: httpStatus.OK,
      activities,
    }

    return res.status(httpStatus.OK).json(resp)
  } catch (err) {
    console.log(err)
    res.status(httpStatus.UNPROCESSABLE_ENTITY).send('Erro na requisição')
  } finally {
    await prisma.$disconnect()
  }
}

async function getPorId(req, res) {

  console.log(`req.params.id: ${req.params.id}`);
  try {
    const activity = await prisma.activity.findUnique({
      where: { id: parseInt(req.params.id),
      },
    })

    const resp = {
      status: httpStatus.OK,
      activities: activity,
    }

    return res.status(httpStatus.OK).json(resp)
  } catch (err) {
    console.log(err)
    res.status(httpStatus.UNPROCESSABLE_ENTITY).send('Erro na requisição')
  } finally {
    await prisma.$disconnect()
  }
}

async function create(req, res) {  

  try {
    const activity = await prisma.activity.create({
      data: {
        description: req.body.description,
        userId: req.body.userId,
        categoryId: req.body.categoryId,
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

 
  try {
    const paramsId = req.params.id

    console.log(`id ${paramsId}`)


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

module.exports = { getAll, getPorId, create, update, deleteEntity }
