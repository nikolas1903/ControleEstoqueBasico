var logado = false

//Validação para só conseguir acessar o index.html se estiver logado.
if (localStorage.getItem('acesso') == 'true') { //Se o acesso for True, ele vai setar a variavel logado como True
    logado = true
}

if (logado != true) {
    alert('Você não está logado!')  //Se o acesso for !=True, ele vai direcionar pra página de login.
    window.location.href = 'login.html'
}


function logOut() {
    localStorage.setItem("acesso", false)
}

