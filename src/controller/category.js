const { PrismaClient } = require('@prisma/client')
const httpStatus = require('http-status')

const prisma = new PrismaClient()
const URL = `http://localhost:3000/category`
async function getAll(req, res) {
  try {
    const categories = await prisma.category.findMany()
    const resp = {
      status: httpStatus.OK,
      categories,
    }
    return res.status(httpStatus.OK).json(resp)
    // Remove this commented out code
  } catch (err) {
    console.log(err)
    res
      .status(httpStatus.UNPROCESSABLE_ENTITY)
      .json({
        status: httpStatus.UNPROCESSABLE_ENTITY,
        message: `Erro na requisição: ${err}`,
      })
  }
}

async function getById(req, res) {
  try {
    const category = await prisma.category.findUnique({
      where: { id: parseInt(req.params.id),
      },
    })

    res.status(httpStatus.OK).send(category)
  } catch (error) {
    console.log(error)
    res.status(httpStatus.UNPROCESSABLE_ENTITY).send('Não atualizado!')
  }
}

async function create(req, res) {
  try {
    const category = await prisma.category.create({
      data: {
        description: req.body.description,
      },
    })

    const resp = {
      status: httpStatus.CREATED,
      category,
      url: `${URL}/${category.id}`,
    }

    res.status(httpStatus.CREATED).json(resp)
  } catch (error) {
    console.log(error)
    res.status(httpStatus.UNPROCESSABLE_ENTITY).send('Erro na requisição')
  }
}

async function update(req, res) {
  try {
    const category = await prisma.category.update({
      data: req.body,
      where: {
        id: parseInt(req.params.id),
      },
    })

    res.status(httpStatus.CREATED).send(category)
  } catch (error) {
    console.log(error)
    res.status(httpStatus.UNPROCESSABLE_ENTITY).send('Não atualizado!')
  }
}

async function deleteEntity(req, res) {
  try {
    const cat = await prisma.category.delete({
      where: {
        id: parseInt(req.params.id),
      },
    })

    res.status(httpStatus.OK).send('Categoria removida com sucesso!')
  } catch (error) {
    console.log(error)
    res.status(httpStatus.UNPROCESSABLE_ENTITY).send('Não removido!')
  }
}

module.exports = { getAll, getById, create, update, deleteEntity }
