const { PrismaClient } = require('@prisma/client')
const httpStatus = require('http-status')

const prisma = new PrismaClient()

async function getAll(req, res) {
  /*
        #swagger.tags = ['Usuarios']
        #swagger.summary = 'Retorna todos os usuários'
        #swagger.description = 'Endpoint que busca todos os usuários'
      */

  try {
    const users = await prisma.user.findMany()

    return res.status(httpStatus.OK).send(users)
  } catch (err) {
    console.log(err)
    res.status(httpStatus.UNPROCESSABLE_ENTITY).send('Erro na requisição')
  }
}

async function create(req, res) {
  try {
    const user = await prisma.user.create({
      data: {
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        password: req.body.password,
      },
    })

    res.status(httpStatus.CREATED).send(user)
  } catch (error) {
    console.log(error)
    res
      .status(httpStatus.UNPROCESSABLE_ENTITY)
      .send(`Erro na requisição: ${error}`)
  }

}

async function update(req, res) {
  try {
    const requisicao = req.body;

    const usuario = await prisma.user.findUnique(
      {
        where: {
          id: requisicao.id
        }}
    )
    
    if(usuario == null)
      return res.status(httpStatus.NOT_FOUND).send('Usuário não encontrado')

    
    

    console.log(`Req: ${JSON.stringify(requisicao)}`);

    const user = await prisma.user.update({
      data: {...usuario, requisicao},
      where: {
        id: parseInt(req.params.id),
      },
    })

    res.status(httpStatus.CREATED).send(user)
  } catch (error) {
    console.log(error)
    res.status(httpStatus.UNPROCESSABLE_ENTITY).send('Não atualizado!')
  }
}

async function deleteEntity(req, res) {
  try {
    const user = await prisma.user.delete({
      where: {
        id: parseInt(req.params.id),
      },
    })

    res.status(httpStatus.OK).send('Usuário removido com sucesso!')
  } catch (error) {
    console.log(error)
    res.status(httpStatus.UNPROCESSABLE_ENTITY).send('Não removido!')
  }
}

module.exports = { getAll, create, update, deleteEntity }
