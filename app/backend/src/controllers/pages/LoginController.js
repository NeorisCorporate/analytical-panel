class LoginController {
    renderPage(req, res){
        return res.render('login', {
            head: { 
                titlePage:   'TÍTULO DA PÁGINA || LOGIN',
                author:      'THIAGO DE BONIS CARVALHO SAAD SAUD',
                description: 'O Painel Analítico é uma inteligência de negócios, ou inteligência empresarial. Desenvolvido para a empresa Aliansce!'
            }
        });
    }
}

module.exports = new LoginController();