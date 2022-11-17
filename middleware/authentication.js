var jwt = require('jsonwebtoken')

const authentication = (req, res, next) => {
  let token
  try {
    token = req.headers['authorization'].split(' ')[1];
  } catch (e) {
    token = ''
  }
  jwt.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized!' })
    } else {
      next()
    }
  })
}

module.exports = authentication