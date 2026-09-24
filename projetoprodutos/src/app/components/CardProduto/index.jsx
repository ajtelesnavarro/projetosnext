import "./cardProduto.css";

export default function CardProduto({ produto }){
    return(
        <div className="wrapper-produto">
            <div className="infos-gerais">
                <img src={produto.images[0]}/>
                <h1>{produto.title}</h1>
            </div>
            <a href="/produtos/[title]">Saiba Mais</a>
        </div>
    )
}