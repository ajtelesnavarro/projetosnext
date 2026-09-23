import "./cardFilme.css";

export default function CardFilme({filme}){
    return(
        <div className="wrapper-filme">
            <img src={filme.imagem} alt=""/>
        </div>
    )
}