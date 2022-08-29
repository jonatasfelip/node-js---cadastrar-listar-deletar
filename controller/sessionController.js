//Faz o gerenciamento da sessão
class SessionController{
    async login(req, res){
        if(req.session.logado){
            return res.redirect("/home");
        }
        return res.render("pages/login");
    }

    logar(req, res){
        let user = {
            email: "tombonildo@gmail.com",
            password: "tom123"
        }

        const { email, password } = req.body; //Está capturando dos names email e password que estão lá no body

        //Verificar se as informações estão corretas:
        if(!(email === user.email && password === user.password)){
            return res.render('pages/login');
        }
        req.session.logado = true;
        return res.redirect('/home');
    }
    //Define o método de logout:
    logout(req, res){
        req.session.logado = false; //Apartir disso o usuário não estará mais logado
        return res.redirect('/login'); //Redireciona para o login
    }
    
    //Define o método inserir:
    insert(req, res){
        return res.render('pages/insert_user');
    }

    //Define o método ler usuários:
    read_users(req, res){
        return res.render('pages/read_users');
    }

    //Define o método deletar usuário:
    delete_user(req, res){
        return res.render('pages/delete_user');
    }
}
//Exportando
module.exports = new SessionController();