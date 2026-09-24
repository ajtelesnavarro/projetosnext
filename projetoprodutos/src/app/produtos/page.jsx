"use client";
import { useState, useEffect } from "react";
import CardProduto from "../components/CardProduto";

export default function Produtos() {
    const [listaProdutos, setListaProdutos] = useState([]);
    const [msgErro, setMsgErro] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=10")
            .then(res => res.json())
            .then(data => {
                setListaProdutos(data.products);
                setMsgErro("");
            })
            .catch(error => setMsgErro(error.message))
    }, [])

    return (
        <main>
            {msgErro != "" && <p>Erro: {msgErro}</p>}

            <h1>Produtos!</h1>
            {listaProdutos.length > 0 ? 
                <div className="card-produtos-grid">
                    {listaProdutos.map((idx)=>{
                        return <CardProduto key={idx.id} produto={idx}/>
                    })}
                </div>
            :
                <div>
                    <p>Sem nenhum produto cadastrado</p>
                </div>
            }
        </main>
    )
}