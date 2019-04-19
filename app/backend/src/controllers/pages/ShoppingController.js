class ShoppingController {
    renderPage(req, res){
        return res.render('shopping', {
            head: { 
                titlePage: 'TÍTULO DA PÁGINA || SHOPPING',
                author:    'THIAGO DE BONIS CARVALHO SAAD SAUD',
            },
            templates: {
                header: {
                    back: {
                        shopping: true,
                        title:    'VENDA',
                        buttons: {
                            backRoute: { routeUrl: '/v1/home' },
                            filter:    { isActived: false },
                            menuKpi:   { isActived: false }
                        }
                    }
                }
            }
        });
    }
}

module.exports = new ShoppingController();