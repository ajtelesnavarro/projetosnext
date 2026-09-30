import "./cardProduto.css";

export default function CardProduto({ produto }) {
    return (
        <div className="wrapper-produto">
            <img src={produto.images[0]} />
            <div className="infos-gerais">
                <h1>{produto.title}</h1>
                <span>{produto.category}</span>
                <h2>R${produto.price}</h2>
                <a href={`../produtos/${produto.id}`} className="btn-redirecionar">Saiba Mais</a>
            </div>
        </div>
    )
}