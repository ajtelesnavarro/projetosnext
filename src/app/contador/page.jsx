"use client"

import { useState } from "react";
import "./contador.css";

export default function Contador() {

    const [contador, setContador] = useState(0);

    function addUmContador() {
        if(contador == 100) return;
        setContador(contador + 1);
    }
    function subtrairUmContador() {
        if(contador == -5) return;
        setContador(contador - 1);
    }

        return (
            <div className="contador_tela_principal">
                <h1>Desenvolvendo um contador</h1>
                <p>Valor:<b>{contador}</b></p>
                <div>
                    <button type="button" onClick={addUmContador} >+</button>
                    <button type="button" onClick={subtrairUmContador} >-</button>
                </div>
                {contador == -5 && <p>AUMENTAAAAAA</p>}
                {contador == 10 && <p>DIMINUIIIIIII</p>}
            </div>
        )

}