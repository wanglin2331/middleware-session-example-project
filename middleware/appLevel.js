module.exports = function(req, res, next) {
  console.log('hitting my app level middleware')
  next()
}
