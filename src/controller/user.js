const { PrismaClient } = require('@prisma/client')
const httpStatus = require('http-status')


const prisma = new PrismaClient()

async function getAll(req, res) {

  try {
    const users = await prisma.user.findMany()
    
    const resp = {
      status: httpStatus.OK,
      users
    }

    return res.status(httpStatus.OK).json(resp)
  } catch (err) {
    console.log(err)
    res.status(httpStatus.UNPROCESSABLE_ENTITY).send('Erro na requisição')
  } finally {
    await prisma.$disconnect()
  }
}

async function getById(req, res) {

  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(req.params.id),
      },
    })

    const resp = {
      status: httpStatus.OK,
      user
    }

    res.status(httpStatus.OK).json(resp)
  } catch (error) {
    console.log(error)
    res.status(httpStatus.UNPROCESSABLE_ENTITY).send('Não atualizado!')
  }
}


async function create(req, res) {
  try {
    const user = await prisma.user.create({
      data: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
      },
    })

    res.status(httpStatus.CREATED).send(user)
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

    const userId = parseInt(paramsId)

    const usuario = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    if (usuario == null) {
      return res.status(httpStatus.NOT_FOUND).send('Usuário não encontrado')
    }


    if(req.body.firstName != null && req.body.firstName.trim().length > 0)
      usuario.firstName = req.body.firstName

    if(req.body.lastName != null && req.body.lastName.trim().length > 0)
      usuario.lastName = req.body.lastName

    if(req.body.password != null  && req.body.password.trim().length > 0) 
      usuario.password = req.body.password

    usuario.updatedAt = new Date()
    
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...usuario, 
      },
    })

    res.status(httpStatus.CREATED).send(user)
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

    const paramsId = req.params.id
    console.log(`ID: ${paramsId }`);

    if (!paramsId || isNaN(parseInt(paramsId))) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send(`Id enviado na requisição é inválido: ${paramsId}`)
    }


    const user = await prisma.user.delete({
      where: {
        id: parseInt(req.params.id),
      },
    })

    res.status(httpStatus.NO_CONTENT).send('Usuário removido com sucesso!')
  } catch (error) {

    console.log(error)
    if(error.code === 'P2003')
    {
      return res.status(httpStatus.PRECONDITION_FAILED).send('Usuário possui relacionamentos na tabela que impedem a sua remoção: Foreign key constraint failed on the field: `Activity_userId_fkey (index)`.')
    }
    res.status(httpStatus.UNPROCESSABLE_ENTITY).send('Não removido!')
  } finally {
    await prisma.$disconnect()
  }
}

module.exports = { getAll, getById, create, update, deleteEntity }
