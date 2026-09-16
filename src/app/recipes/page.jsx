"use client";

import { useEffect, useState } from "react";
import "./recipes.css"

export default function Recipes() {

    //primeiro vou criar as variaveis que vão ficar as informações e a de erro tbm
    //basicamente agnt vai criar duas variaveis iguais e que vao mudar quando recarregamos a pagina:
    //listaUsers guarda o valor atual, ele apenas GUARDA ESSE VALOR,  como se fosse uma string
    //setListaRecipes altera esse valor, literalmente agnt so vai mexer nele quando agnt quiser mexer dentro do objeto
    const [listaRecipes, setListaRecipes] = useState([]);
    const [msgErro, setMsgErro] = useState([]);


    //o useEffect com  a variavel modificada vazia significa que ele vai roda isso aqui toda vez que a página reloudar
    useEffect(() => {
        //aqui dentro nós vamos pegar as informações da API, transformar ela em objeto e depois colocar ela dentro de setListaUsers e automaticamente tbm ja vai pra listaUsers
        fetch("https://dummyjson.com/recipes?limit=10") //aqui pegamos a API
            .then(res => res.json()) //aqui transformamos em json, mesmo que ele ja venha em json
            .then(data => {
                setListaRecipes(data.recipes) //aqui pegamos o objeto recipes dentro do json e colocamos dentro de setListaRecipes, automaticamente, listaUsers tbm vai ter a mesma coisa
                setMsgErro("");
            })

            //esse catch seria se caso desse algo de errado no processo, error é tipo um objeto que dentro tem o erro que deu e .message é a mensagem desse erro, que agnt coloca dentro de setMsgErro, e  automaticamente em msgErro tbm
            .catch(error => setMsgErro(error.message))
    }, [])

    return (
        <main>
            {/* aqi vamos fazer um codigo pra mostrar oq seria o msg erro se tiver */}
            {msgErro != "" && <p>Erro: {msgErro}</p>}
            <h1>Recipes</h1>

            {/* aqui vamos fazer outro codigo pra se tiver alguma coisa dentro de listaUsers mostrar e se não tiver mostrar também */}
            {listaRecipes.length > 0 ?
                <div className="card-recipes-grid">
                    {/* agora vamos pegar as informações e valores do objeto atraver de user, e seu id atraves de idx */}
                    {listaRecipes.map((recipe, idx) => {
                        return (
                            <div className="card-recipe-item" key={idx}>
                                <h3 className="recipe-title">{recipe.name}</h3>
                                <div className="recipe-info">
                                    <img src={recipe.image} className="recipe-image" />
                                    <p className="recipe-ingredients">
                                        <div className="titulo">Ingredientes:</div>
                                        <br />
                                        <div className="info">
                                            {recipe.ingredients.map((ingredient, idx) => (
                                                <span key={idx}>
                                                    . {ingredient}<br />
                                                </span>
                                            ))}</div>
                                    </p>
                                </div>

                                <p className="recipe-instructions">
                                    <div className="titulo">Modo de preparo:</div> 
                                    <br />
                                    <div className="info">
                                        {recipe.instructions.map((instructions, idx) => (
                                            <span key={idx}>
                                                . {instructions}<br />
                                            </span>
                                        ))}</div>
                                </p>

                            </div>
                        )
                    })}
                </div> :
                <div>
                    <p>Sem nenhuma receita cadastrada.</p>
                </div>}
        </main>
    );
}