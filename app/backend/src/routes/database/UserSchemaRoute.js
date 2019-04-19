const UserSchemaController = require('../../controllers/database/UserSchemaController');
const UserSchemaValidator  = require('../../middlewares/validation/database/UserSchemaValidator');
const SecretKeyValidator   = require('../../middlewares/validation/keys/SecretKeyValidator');
const ExpressValidator     = require('../../middlewares/validation/ExpressValidator');

module.exports = server => {
    server.route('/user').post(
        [ SecretKeyValidator.database, UserSchemaValidator.create, ExpressValidator.validate ],
        [ UserSchemaController.create ]
    );

    server.route('/user/id/:id').get(
        [ SecretKeyValidator.database, UserSchemaValidator.findById, ExpressValidator.validate ],
        [ UserSchemaController.findById ]
    );

    server.route('/user/username/:username').get(
        [ SecretKeyValidator.database, UserSchemaValidator.findByUsername, ExpressValidator.validate ],
        [ UserSchemaController.findByUsername ]
    );
};