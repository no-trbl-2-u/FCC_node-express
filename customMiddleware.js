const consoleLogger = ({method, path, ip}, res, next) => {
  console.log(`${method} ${path} - ${ip}`)
  next()
}

const persistData = (req, res, next) => {
  req.data = "data"
  next()
}

const alterData = (req, res, next) => {
  req.data = "Your new Data!"
  next()
}

const getTime = (req, res, next) => {
  const now = new Date().toString()
  req.time = { time: now }
  next()
}

module.exports = { consoleLogger, persistData, alterData, getTime }