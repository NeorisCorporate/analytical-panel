class HomeController {
    renderPage(req, res){
        return res.render('home', {
            head: { 
                titlePage: 'TÍTULO DA PÁGINA || HOME',
                author:    'THIAGO DE BONIS CARVALHO SAAD SAUD',
            }
        });
    }
}

module.exports = new HomeController();