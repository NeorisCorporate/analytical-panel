const HomeController = require('../../controllers/pages/HomeController');
const JWTMiddleware  = require('../../middlewares/authentication/JWT');

module.exports = server => {
    server.route('/v1/home/').get(JWTMiddleware.verifyToken, HomeController.renderPage);
};