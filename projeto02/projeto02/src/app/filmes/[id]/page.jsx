"use client";

import { useParams } from "next/navigation";
import dados from "@/filmes.json";
import { useState, useEffect } from "react";
import "./idFilme.css";

export default function Filme() {
    const [filme, setFilme] = useState(null);
    const params = useParams();

    useEffect(() => {
        const filmeEncontrado = dados.find(f => f.id == params.id)
        setFilme(filmeEncontrado);
    }, [])

    return (
        <main>
            {filme != null && <div className="wrapper-filme">
                <div className="info-geral">
                    <img src={filme.imagem}></img>
                </div>
                <div className="info-especificacoes">
                    <div className="filme-titulo">
                        <div className="filme-titulo-principal">
                            <h1>{filme.titulo}, "{filme.tituloOriginal}"</h1>
                            {filme.diretores.length === 1 ? (
                                <h2>Dirigido por <span className="filme-diretores">{filme.diretores[0]}</span></h2>
                            ) : (
                                <h2>Dirigido por <span className="filme-diretores">{filme.diretores.join(", ")}</span></h2>
                            )}
                        </div>
                        <div className="filme-titulo-tags">
                            {filme.generos.map((gen) => (
                                <span key={gen} className="filme-titulo-tag">{gen}</span>
                            ))}
                            {filme.tags.map((tags) => (
                                <span key={tags} className="filme-titulo-tag">{tags}</span>
                            ))}
                        </div>
                    </div>
                    <div className="filme-detalhes">
                        <h2>
                            {filme.sinopse}
                        </h2>
                        <div className="filme-detalhes-elenco">
                            <br/><h1>Elenco Principal:</h1>
                            <h2>
                                {filme.elenco.map((ator) => (
                                    <p key={ator.nome}>
                                        {ator.nome}, como {ator.personagem}
                                    </p>
                                ))}
                            </h2>
                        </div>

                    </div>

                    <a href="/filmes" className="botao-voltar">Voltar</a>
                </div>
            </div>}
        </main>
    )
}