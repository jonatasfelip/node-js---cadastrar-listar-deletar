//Criaremos funções//
class HomeController{ 
    //Elementos//
    index(req, res){
        res.render('index.ejs');
    }
    home(req, res){
        res.render('pages/home');
    }
}

//Exportar o homeController://
module.exports = new HomeController();