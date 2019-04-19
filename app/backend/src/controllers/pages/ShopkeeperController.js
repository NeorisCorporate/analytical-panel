class ShopkeeperController {
    renderShopkeeperPage(req, res){
        return res.render('shopkeeper', {
            head: { 
                titlePage: 'TÍTULO DA PÁGINA || SHOPKEEPER',
                author:    'THIAGO DE BONIS CARVALHO SAAD SAUD',
            },
            templates: {
                header: {
                    back: {
                        title: 'VENDA - VIA PARQUE',
                        buttons: {
                            backRoute: { routeUrl: '/v1/shopping' },
                            filter:    { isActived: true  },
                            menuKpi:   { isActived: false }
                        }
                    }
                },
                cards: {
                    main: {
                        shopkeeper: true,
                        titles: {
                            date:        '04/2019',
                            titleOne:    'Total',
                            titleTwo:    '1.605,7 m²',
                            subtitleTwo: '23.478.789,6 abs'
                        } 
                    }
                }
            }
        });
    }

    renderShopkeeperDetailsPage(req, res){
        return res.render('shopkeeperDetails', {
            head: { 
                titlePage: 'TÍTULO DA PÁGINA || SHOPKEEPER DETAILS',
                author:    'THIAGO DE BONIS CARVALHO SAAD SAUD',
            },
            templates: {
                header: {
                    back: {
                        title: 'VIA PARQUE',
                        buttons: {
                            backRoute: { routeUrl: '/v1/shopkeeper' },
                            filter:    { isActived: true  },
                            menuKpi:   { isActived: false }
                        }
                    }
                },
                loadings: { shopkeeperDetails: true },
                cards: {
                    main: {
                        shopkeeperDetails: true,
                        titles: {
                            titleOne:    'Mc\'Donalds',
                            titleTwo:    '102,3',
                            subtitleOne: '04/2017 - Visão Mensal',
                            subtitleTwo: 'ABL'
                        } 
                    }
                }
            }
        });
    }

    renderShopkeeperComparativePage(req, res){
        return res.render('shopkeeperComparative', {
            head: { 
                titlePage: 'TÍTULO DA PÁGINA || SHOPKEEPER_COMPARATIVE',
                author:    'THIAGO DE BONIS CARVALHO SAAD SAUD',
            },
            templates: {
                header: {
                    back: {
                        title: 'Mc\'Donalds',
                        buttons: {
                            backRoute: { routeUrl: '/v1/shopkeeper/details' },
                            filter:    { isActived: false },
                            menuKpi:   { isActived: false }
                        }
                    }
                },
                loadings: { shopkeeperComparative: true },
            }
        });
    }
}

module.exports = new ShopkeeperController();