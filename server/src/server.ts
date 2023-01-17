//Back-end vai ser uma API Restfull
//Em vez de Express, vai ser usado Fastify

import Fastify from "fastify";
import cors from '@fastify/cors' /* Com o cors, da pra decidir quais aplicações vão consumir os dados do meu Back-End */
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient() /* Aqui é feita a conexão com o banco de dados  */

app.register(cors) /* Fazendo assim, qualquer aplicação pode consultar os dados do meu back end, mas se só eu pudesse acessar, ficaria igual ao cód comentado */

/* 
app.register(cors, {
    origin: [http://localhost:3333]
})
*/

/**
 * Métodos HTTP: Get, Post, Put, Patch, Delete
 */

/* Prisma ->  */

app.get('/hello', async () => {
    const habits = await prisma.habit.findMany()

    return habits
})

app.listen ({
    port: 3333
}).then(() => {
    console.log('Running')
})