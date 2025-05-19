import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())


app.post('/users', async (req, res) => {
    const sql = await prisma.$queryRaw`SELECT * FROM user WHERE email = ${req.body.email} OR cpf = ${req.body.cpf}`;
    if (sql.length > 0) {
        return res.json("Falha")
    } else {
        await prisma.user.create({
            data: {
                email: req.body.email,
                senha: req.body.senha,
                cpf: req.body.cpf,
                ender: req.body.ender,
                num: req.body.num,
                comp: req.body.comp
            }
        })
        return res.status(201).json("Sucesso")
    }
})





app.post('/login', async (req, res) => {
    const sql = await prisma.$queryRaw`SELECT * FROM user WHERE email = ${req.body.email} AND senha = ${req.body.senha}`;
    if (sql.length > 0) {
        return res.json("Sucesso")
    } else {
        return res.json("Falha")
    }

})


app.get('/users', async (req, res) => {
    let users = []
    if (req.query) {
        users = await prisma.user.findMany({
            where: {
                email: req.query.email,
                senha: req.query.senha,
                cpf: req.query.cpf,
                ender: req.query.ender,
                num: req.query.num,
                comp: req.query.comp
            }
        })
    } else {
        const users = await prisma.user.findMany()
    }
    res.status(200).json(users)
})



app.put('/users/:id', async (req, res) => {

    await prisma.user.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: {
            email: req.body.email,
            senha: req.body.senha,
            cpf: req.body.cpf,
            ender: req.body.ender,
            num: req.body.num,
            comp: req.body.comp
        }
    })
    res.status(201).json(req.body)
})

app.delete('/users/:id', async (req, res) => {

    await prisma.user.delete({
        where: {
            id: parseInt(req.params.id),
        },
    })

    res.status(200).json({ message: "Usuário deletado com sucesso!" })
})

app.post('/carros', async (req, res) => {

    await prisma.carro.create({
        data: {
            marca: req.body.marca,
            modelo: req.body.modelo,
            categoria: req.body.categoria,
            ano: req.body.ano,
            cor: req.body.cor,
            diaria: req.body.diaria,
            motor: req.body.motor,
            img: req.body.img,
            status: req.body.status
        }
    })

    res.status(201).json(req.body)
})

app.get('/carros', async (req, res) => {
    const carros = await prisma.carro.findMany({
        where: {
            status: "disponível"
        }
    })

    res.status(200).json(carros)
})

app.get('/carroslogin', async (req, res) => {
    let carros = []
    if (req.query) {
        carros = await prisma.carro.findMany({
            where: {
                marca: req.query.marca,
                modelo: req.query.modelo,
                categoria: req.query.categoria,
                ano: req.query.ano,
                cor: req.query.cor,
                diaria: req.query.diaria,
                motor: req.query.motor,
                status: req.query.status
            }
        })
    } else {
        const carros = await prisma.carro.findMany()
    }
    res.status(200).json(carros)
})

app.put('/carros/:id', async (req, res) => {
    await prisma.carro.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: {
            marca: req.body.marca,
            modelo: req.body.modelo,
            categoria: req.body.categoria,
            ano: req.body.ano,
            cor: req.body.cor,
            diaria: req.body.diaria,
            motor: req.body.motor,
            img: req.body.img,
            status: req.body.status
        }
    })
    res.status(201).json(req.body)
})

app.put('/carroslogin/:id', async (req, res) => {
    const sql = await prisma.carro.findMany({
        where: {
            id: parseInt(req.params.id),
            status: "disponível"
        }
    })
    if(sql.length > 0){
        await prisma.carro.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                status: 'indisponível'
            }
        })
    } else {
        await prisma.carro.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                status: 'disponível'
            }
        })
    }

    
    res.status(201).json(req.body)
})

app.delete('/carros/:id', async (req, res) => {
    await prisma.carro.delete({
        where: {
            id: parseInt(req.params.id),
        },
    })

    res.status(200).json({ message: "Usuário deletado com sucesso!" })
})


app.listen(3000)