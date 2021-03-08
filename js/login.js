function logar() { //Função para logar.
    var email = document.getElementById('email') //Armazenando na variavel email o id Email
    var senha = document.getElementById('senha')//Armazenando na variavel senha o id Senha

    if (email.value == 'z' && senha.value == 'z') { //Validação do login correto
        localStorage.setItem("acesso", true) //Liberando acesso
        window.location.href = 'index.html' //Levando para a página index.html
    } else if (email.value == '' || senha.value == '') { //Validando que todos os campos estão preenchidos
        alert('Preencha todos os campos!')
    } else { //Validando se a senha está correta.
        alert("Usuário ou senha inválidos!")
    }
}