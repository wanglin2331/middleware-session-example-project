module.exports = {
  login: function(req, res, next) {
    req.session.user.name = 'zach';
    res.status(200).send(req.session);
  }
}
