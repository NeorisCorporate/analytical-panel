const AuthController   = require('../.././controllers/APIS/AuthController');
const AuthValidator    = require('../../middlewares/validation/APIS/AuthValidator');
const ExpressValidator = require('../../middlewares/validation/ExpressValidator');

module.exports = server => {
    server.route('/api/authentication').post(
        [ AuthValidator.create, ExpressValidator.validate],
        [ AuthController.create ]
    );
}