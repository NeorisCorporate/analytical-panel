const express  = require('express');
const session  = require('express-session');
const path     = require('path');
const dotenv   = require('dotenv');
const morgan   = require('morgan');
const consign  = require('consign');
const mongoose = require('mongoose');
const nunjucks = require('nunjucks');

class Application {
    constructor(){
        this.express  = express();
        this.path     = path;
        this.dotenv   = dotenv.config({ path: this.path.resolve(__dirname, '../environment/.env') });
        this.morgan   = morgan('dev');
        this.consign  = consign();
        this.mongoose = mongoose;
        this.nunjucks = nunjucks;

        // INICIALIZA AS FUNÇÕES AUTOMATICAMENTE
        this.initDatabase();
        this.initMiddlewares();
        this.initConsign();
        this.initViews();
    }

    initDatabase(){ 
        this.mongoose.connect(process.env.DATABASE_URL, {
            useCreateIndex:  true,
            useNewUrlParser: true
        });
    }

    initMiddlewares(){
        this.express.set('view engine', 'njk');
        this.express.use(express.static(this.path.resolve(__dirname, '../../../frontend')));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }));
        this.express.use(session({
            cookie: {
                secure:   false, // INSERIR TRUE DEPOIS, PRECISA DE HTTPS
                httpOnly: true,
                expires:  1800000
            },
            secret:            process.env.APP,
            resave:            false,
            saveUninitialized: false,
        }));
        this.express.use(this.morgan);
    }

    initConsign(){
        this.consign
        .include('app/backend/src/routes')
        .then('app/backend/src/controllers')
        .into(this.express);
    }

    initViews(){
        this.nunjucks.configure([this.path.resolve(__dirname, '../views/pages'),  this.path.resolve(__dirname, '../views/templates')], {
            express:    this.express,
            watch:      true, // SOMENTE PARA DESENVOLVIMENTO
            autoescape: true
        });
    }

}

module.exports = new Application().express;