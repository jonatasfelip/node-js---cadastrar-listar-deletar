//qual função eu quero exibir
const { Router } = require('express'); //importando o router
const routers = new Router(); //Instanciando o router
const Home = require('../controller/homeController');  //Importando o controller
const Session = require('../controller/sessionController');  //Importando o session
const auth = require('../middleware/auth') ;

//Definir as rotas
//Index:
routers.get('/', Home.index);

//Login:
routers.get('/login', Session.login);

//Logar:
routers.post('/logar', Session.logar);

//Home:
routers.get('/home', auth, Home.home);

//Logout:
routers.get('/logout', Session.logout);

//Insert:
routers.get('/insert_user', auth, Session.insert);

//Read
routers.get('/read_users', auth, Session.read_users);

//Delete
routers.get('/delete_user', auth, Session.delete_user);

//Exportar as rotas
module.exports = routers;