"use client";

import { useEffect, useState } from "react";

export default function Usuarios() {

    const [listaUsers, setListaUsers] = useState([]);
    const [msgErro, setmsgErro] = useState("");

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=10") //usada pra fazer requisições  de erede
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setListaUsers(data.results) //results é o objeto que agnt quer que volte
                setmsgErro("");
            })
            .catch(error => setmsgErro(error.message))
    }, []);

    return (
        <main>
            <h1>Lista e usuários</h1>
            {msgErro != "" && <p>Erro: {msgErro}</p>}

            {listaUsers.length > 0 ?
                <div>
                    {listaUsers.map( (user, idx) => {
                        return (
                            <div key={idx}>
                                <h3>{user.name.first}{" "}{user.name.last}</h3>
                                <img src={user.picture.large}/>
                            </div>
                        )
                    })}
                </div> :
                <div>
                    <p>Sem nenhum uusário por enquanto</p>
                </div>}
        </main>
    )
}