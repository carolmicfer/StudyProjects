import './Colaborador.css'

const Colaborador = ({ nome, imagem, cargo, corPrimaria }) => {
    const style = {backgroundColor: corPrimaria}
    
    return (
        <div className="colaborador">
            <div className="cabecalho" style={style}>
                    <img src={imagem} alt={nome}/>
            </div>

            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador