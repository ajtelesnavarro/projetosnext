import "./slugProduto.css";

export default async function TitleProduto({ params }) {

    const { slug } = await params;

    const resposta = await fetch("https://dummyjson.com/products");

    const dados = await resposta.json();

    const produto = dados.products.find((produto) => {

        return produto.id === Number(slug);

    });

    if (!produto) {
        return <h1>Produto não encontrado</h1>;
    }

    return (

        <main>

            <div className="infos">

                <div className="imagem">
                    <img src={produto.images[0]} />
                </div>

                <div className="infos-gerais">

                    <h1>{produto.title}</h1>

                    <span>{produto.category}</span>

                    <p>{produto.description}</p>

                    <h2>R${produto.price}</h2>

                </div>

            </div>

            <a href="/produtos" className="btn-redirecionar">
                Voltar
            </a>

        </main>

    );
}