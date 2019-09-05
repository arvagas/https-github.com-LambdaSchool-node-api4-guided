require('dotenv').config()

const server = require('./api/server.js')
const defaults = require('./config/defaults')

const port = defaults.port
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`)
})
