//Cadastrar os produtos do formulário dos produtos.

function cadastraProduto() {
    var produtoNome = document.getElementById('produtoNome') //Armazenando o que foi escrito no campo da descrição
    var produtoQuantidade = document.getElementById('produtoQuantidade')
    var precoCusto = document.getElementById('precoCusto')
    var precoVenda = document.getElementById('precoVenda')

    var dados = JSON.parse(localStorage.getItem('dadosProduto')) //Armazenar elementos do localStorage, caso exista

    if (dados == null) {
        localStorage.setItem("dadosProduto", "[]")
        dados = []
    }

    var auxRegistro = {
        nome: produtoNome.value,
        quantidade: produtoQuantidade.value,
        custo: precoCusto.value,
        venda: precoVenda.value
    }

    dados.push(auxRegistro)

    localStorage.setItem('dadosProduto', JSON.stringify(dados))

    alert('Produto adicionado com sucesso!')

    produtoNome.value = ''
    produtoQuantidade.value = ''
    precoCusto.value = ''
    precoVenda.value = ''
}