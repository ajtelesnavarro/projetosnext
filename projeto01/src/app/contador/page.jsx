"use client"

import { useState, useEffect } from "react";
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

    useEffect(() => {
        console.log(contador)
    }, [contador]);

    //aqui so vai dar console.log quando o contador mudar

        return (
            <div className="contador_tela_principal">
                <h1>Desenvolvendo um contador</h1>
                <p>Valor:<b>{contador}</b></p>
                <div>
                    <button type="button" onClick={addUmContador} >+</button>
                    <button type="button" onClick={subtrairUmContador} >-</button>
                </div>
                {contador == -5 && <p>AUMENTAAAAAA</p>}
                {contador == 100 && <p>DIMINUIIIIIII</p>}
            </div>
        )

}