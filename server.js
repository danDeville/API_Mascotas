const jsonserver = require('json-server')
const server = jsonserver.create()
const router = jsonserver.router('data.json')
const middleware = jsonserver.defaults()

server.use(router)
server.use(middleware)

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log('JSON Server is running on port')
})
