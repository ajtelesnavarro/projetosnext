import "./cardFilme.css";

export default function CardFilme({ filme }) {
    return (
        <div className="wrapper-filme">
            <div className="info-geral">
                <img src={filme.imagem} alt="" />
                <p>{filme.titulo}</p>
            </div>
            <div className="info-especificacoes">
                <p>{filme.sinopse}</p>
                <a href={`/filmes/${filme.id}`}>Saiba mais!</a>
            </div>
        </div>
    )
}