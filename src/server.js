import http from 'node:http'

const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method === 'GET' && url === '/users') return res.end('Listagem de Usuários!')

    if (method === 'POST' && url === '/users') return res.end('Criação de usuário!')

    return res.end('Hello World!')
})

const port = 3333

server.listen(port, () => console.log(`Servidor executando na porta ${port}`))