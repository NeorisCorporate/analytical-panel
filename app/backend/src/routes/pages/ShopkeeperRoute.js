const ShopkeeperController = require('../../controllers/pages/ShopkeeperController');
const JWTMiddleware        = require('../../middlewares/authentication/JWT');

module.exports = server => {
    server.route('/v1/shopkeeper/').get(JWTMiddleware.verifyToken, ShopkeeperController.renderShopkeeperPage);
    server.route('/v1/shopkeeper/details').get(JWTMiddleware.verifyToken, ShopkeeperController.renderShopkeeperDetailsPage);
    server.route('/v1/shopkeeper/comparative').get(JWTMiddleware.verifyToken, ShopkeeperController.renderShopkeeperComparativePage);
};