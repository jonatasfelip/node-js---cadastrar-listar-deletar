const express = require('express'); //importar express//
const { engine } = require('express/lib/application'); //definir a engine do projeto. quais os tipos de arquvio que eu quero expressar//
const app = express(); //instanciar o app do express//
const session = require('express-session')

app.set('view engine', 'ejs'); // Serve para utilizarmos o ejs//
app.set('views', './views'); //diz qual é a pasta onde o ejs está//

const hostname = 'localhost';
const port = 3333; //Porta que o servidor estará ouvindo

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('trust proxy', 1);

app.use(session({
  secret: '928c38bd237b374a0df254795b95cce1fa8e2805',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}));

//Importar as rotas e configurá-las:
const routers = require('./routers/routers');
app.use(routers);

//Abrindo e iniciando o servidor//
app.listen(port, () =>{
    console.log(`Servidor iniciado em http://${hostname}:${port}`)
})