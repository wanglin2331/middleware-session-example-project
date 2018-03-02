module.exports = function(req, res, next) {
  console.log('hitting my route level middleware')
  next()
}
