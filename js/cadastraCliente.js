//Cadastrar os clientes do formulário clientes
function cadastraCliente() {
    var nomeCliente = document.getElementById('nomeCliente') //Armazenando o que foi escrito no campo da descrição
    var sobrenomeCliente = document.getElementById('sobrenomeCliente')
    var cpfCliente = document.getElementById('cpfCliente')
    var enderecoCliente = document.getElementById('enderecoCliente')
    var cidadeCliente = document.getElementById('cidadeCliente')
    var estadoCliente = document.getElementById('estadoCliente')


    var dados = JSON.parse(localStorage.getItem('dadosCliente')) 

    if (dados == null) {
        localStorage.setItem("dadosCliente", "[]")
        dados = []
    }

    var auxRegistroCliente = {
        nome: nomeCliente.value,
        sobrenome: sobrenomeCliente.value,
        cpf: cpfCliente.value,
        endereco: enderecoCliente.value,
        cidade: cidadeCliente.value,
        estado: estadoCliente.value
    }

    dados.push(auxRegistroCliente)

    localStorage.setItem('dadosCliente', JSON.stringify(dados)) //Armazenar elementos do localStorage, caso exista

    alert('Cliente adicionado com sucesso!')

    nomeCliente.value = ''
        sobrenomeCliente.value = ''
        cpfCliente.value = ''
        enderecoCliente.value = ''
        cidadeCliente.value = ''
        estadoCliente.value = ''
}