const jwt = require("jsonwebtoken")

const protect = (req, res, next) => {
  let token
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    if (decoded !== process.env.SECRET_KEY) {
      res.status(401).json({
        message: "Unauthorized"
      })
    } else {
      next()
    }
  }
  if (!token) {
    res.status(401).json({
      message: "Unauthorized"
    })
  }
}

module.exports = protect