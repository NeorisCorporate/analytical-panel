const LoginController = require('../../controllers/pages/LoginController');

module.exports = server => {
    server.route('/v1/login').get(LoginController.renderPage);
};