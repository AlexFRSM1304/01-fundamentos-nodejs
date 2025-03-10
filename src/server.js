import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method === 'GET' && url === '/users') {
	    return res
			    .setHeader('Content-type', 'application-json')
			    .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {
	    users.push({
		    id: 1,
		    name: 'Alex Fernando',
		    email: 'alex@gmail.com'
	    })
	    
	    return res.writeHead(201).end()
    }

    return res.writeHead(404).end('Not Found')
})

const port = 3333

server.listen(port, () => console.log(`Servidor executando na porta ${port}`))