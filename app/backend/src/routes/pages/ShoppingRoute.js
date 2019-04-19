const ShoppingController = require('../../controllers/pages/ShoppingController');
const JWTMiddleware      = require('../../middlewares/authentication/JWT');

module.exports = server => {
    server.route('/v1/shopping').get(JWTMiddleware.verifyToken, ShoppingController.renderPage);
};