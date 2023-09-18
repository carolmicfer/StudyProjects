function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        //"faz uma cópia de tudo que vc tem de livro mas eu vou precisar alterar o preço dele" é isso que a sintaxe abaixo significa
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto
}