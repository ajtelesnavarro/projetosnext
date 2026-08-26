import"./cardProduto.css"

export default function CardProduto({
    titulo,
    descricao,
    imagem,
    preco
}){
    return(
        <div className="card-wrapper">
            <h2>{titulo}</h2>
            <img src={"/imagens/produtos/" + imagem}/>
            <p>{descricao}</p>
            <p>Preço: R$ <b>{preco}</b></p>
        </div>
    )
}