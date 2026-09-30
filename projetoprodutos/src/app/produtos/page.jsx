"use client";

import { useState, useEffect } from "react";

import CardProduto from "../components/CardProduto";
import "./produtos.css";

export default function Produtos() {

    const [listaProdutos, setListaProdutos] = useState([]);
    const [msgErro, setMsgErro] = useState("");

    useEffect(() => {

        fetch("https://dummyjson.com/products?limit=12")

            .then(res => res.json())

            .then(data => {

                setListaProdutos(data.products);
                setMsgErro("");

            })

            .catch(error => setMsgErro(error.message));

    }, []);

    return (

        <main>

            {msgErro != "" && <p>Erro: {msgErro}</p>}

            {listaProdutos.length > 0 ?

                <div className="card-produtos-grid">

                    {listaProdutos.map((produto) => {

                        return (
                            <CardProduto
                                key={produto.id}
                                produto={produto}
                                slug={produto.id}
                            />
                        );

                    })}

                </div>

                :

                <div>
                    <p>Sem nenhum produto cadastrado</p>
                </div>

            }

        </main>

    );
}