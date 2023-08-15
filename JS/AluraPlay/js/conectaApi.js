async function listaVideos() {
    //requisicao GET
    const conexao = await fetch('http://localhost:3000/videos')
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

async function criaVideo(titulo, descricao, url, imagem) {
    //requisicao POST
    const conexao = await fetch('http://localhost:3000/videos', {
        method: "POST",
        headers: {
            //especificar o tipo de conteudo que esta sendo enviado e recebido kkkkk
            "Content-type": "application/json"
        },
        //dados que vou enviar para a requisicao
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })
    if(!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo")
    }

    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

async function buscaVideo(titulo) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${titulo}`)
    const conexaoConvertida = await conexao.json()
    
    return conexaoConvertida
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}