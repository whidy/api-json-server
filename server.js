const jsonServer = require('json-server')
const server = jsonServer.create()
const data = require('./index')()
const router = jsonServer.router(data)
const middlewares = jsonServer.defaults()

const port = 5555
server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
    req.method = 'GET'
    req.query = req.body
  }
  // Continue to JSON Server router
  next()
})
server.use('/api', router)
server.listen(port, () => {
  console.log(`JSON Server is running at: http://localhost:${port}`)
})
