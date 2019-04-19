const TokenSchemaController = require('../../controllers/database/TokenSchemaController');
const TokenSchemaValidator  = require('../../middlewares/validation/database/TokenSchemaValidator');
const SecretKeyValidator    = require('../../middlewares/validation/keys/SecretKeyValidator');
const ExpressValidator      = require('../../middlewares/validation/ExpressValidator');

module.exports = server => {
    server.route('/token')
    .post(
        [ SecretKeyValidator.database, TokenSchemaValidator.create, ExpressValidator.validate ],
        [ TokenSchemaController.create ]
    )
    .put(
        [ SecretKeyValidator.database, TokenSchemaValidator.update, ExpressValidator.validate ],
        [ TokenSchemaController.update ]
    )
    .get(
        [ SecretKeyValidator.database, TokenSchemaValidator.findById, ExpressValidator.validate ],
        [ TokenSchemaController.findById ]
    );
};