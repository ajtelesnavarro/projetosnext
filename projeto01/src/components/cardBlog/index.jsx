import "./cardBlog.css";

export default function CardPostBlog({
    titulo,
    descricao,
    imagem,
    tag
}) {
    return (
        <div className="card-wrapper">
            <div className="card-img">
                <img src={"/imagens/blog/" + imagem} />
            </div>

            <div className="card-txt">
                <h2>{titulo}</h2>
                <h3>{descricao}</h3>
                <p>{tag}</p>
            </div>
        </div>
    );
}