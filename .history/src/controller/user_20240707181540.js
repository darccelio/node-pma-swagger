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

const { PrismaClient } = require("@prisma/client");
const httpStatus = require("http-status");

const prisma = new PrismaClient();

async function update(req, res) {
    try {
        const paramsId = req.params.id;

        console.log(`id ${paramsId}`);

        // Verifica se paramsId não é nulo, indefinido ou não é um número inteiro
        if (!paramsId || isNaN(parseInt(paramsId))) {
            return res.status(httpStatus.BAD_REQUEST).send(`Id enviado na requisição é inválido: ${paramsId}`);
        }

        const userId = parseInt(paramsId);

        const usuario = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });

        if (!usuario) {
            return res.status(httpStatus.NOT_FOUND).send('Usuário não encontrado');
        }

        const requisicao = req.body;

        console.log(`Requisição: ${JSON.stringify(requisicao)}`);
        
        const user = await prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                ...usuario,
                ...requisicao,
            },
        });

        res.status(httpStatus.CREATED).send(user);
    } catch (error) {
        console.error(error);
        res.status(httpStatus.UNPROCESSABLE_ENTITY).send(`Não atualizado! ${error.message}`);
    } finally {
        await prisma.$disconnect();
    }
}

module.exports = { update };


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
