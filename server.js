const jsonServer = require('json-server')
const server = jsonServer.create()
const data = require('./index')()
const router = jsonServer.router(data)
const middlewares = jsonServer.defaults()

const port = 5555
server.use(middlewares)
server.use('/api', router)
server.listen(port, () => {
  console.log(`JSON Server is running at: http://localhost:${port}`)
})
