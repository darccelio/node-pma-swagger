const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

const create = async (req, res) => {
    try {
        const category = await prisma.category.create({
            data: {
                description: req.body.description,

            }
        })

        res.send(category)
    } catch (e) {
        console.log(e)
    }

    console.log(req.params.description);

}

module.exports = { create }