import CardProduto from "@/components/cardProduto";
import "./produtos.css"

export default function Produtos() {

    const listaProdutos = [
        {
            id: 1,
            titulo: "Detegente YPÊ",
            descricao: "É legal, mas nâo pode bebe :(",
            imagem: "detergenteYPE.png",
            perco: 5.87
        },
        {
            id: 2,
            titulo: "Sabão em Pó MINUAN",
            descricao: "Mais área de cotnato, mais poder",
            imagem: "sabaoempoMINUAN.png",
            perco: 15.33
        },
        {
            id: 3,
            titulo: "Desinfetante MINUA",
            descricao: "HMMMMM é cremoso, é saboroso... perai, errei!",
            imagem: "desinfetanteMINUA.png",
            perco: 4.00
        },
        {
            id: 4,
            titulo: "Perfume PINHOSOL",
            descricao: "Ué cade o pinho que eu ia cozinhar?",
            imagem: "perfumePINHOSOL.png",
            perco: 4.00
        },
        {
            id: 5,
            titulo: "Amaciante de NENEM",
            descricao: "COM-PLE-TA-MEN-TE biodegradavel",
            imagem: "amacianteNENEM.png",
            perco: 4.00
        }
    ];

    return (
        <>
            <h1>Página de listagem de produtos</h1>

            {/* aqui card produto aqui */}
            <div className="card-container">
                {listaProdutos.map(produto => {
                    return <CardProduto
                        key={produto.id}
                        titulo={produto.titulo}
                        descricao={produto.descricao}
                        imagem={produto.imagem}
                        preco={produto.preco}
                    />
                })} {/*executa cada objeto dentro do listaprodutos */}
            </div>
        </>
    )
}