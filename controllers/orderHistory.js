module.exports = {
  getAllOrders: function(req, res, next) {
    if(!req.session.cart) {
      req.session.cart = []
    }
    req.session.cart.push('Some product');
    res.status(200).send(req.session.cart);
  },
  getSpecificOrder: function(req, res, next) {
    res.status(200).send('This is your specific order')
  }
}
