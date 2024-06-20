const handleError = (err, req, res, next) => {
  const status = res.statusCode || 500;
  res.status(status)
  res.json({
    message: err.message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  })
}

module.exports = handleError