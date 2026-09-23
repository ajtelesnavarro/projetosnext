"use client"

import { useState } from "react";
import "./ordens.css";

export default function Ordens() {

    const [ordens, setOrdens] = useState([]);

    //agr vamo pro formulario pra guardar cada info

    const [cliente, setCliente] = useState("");
    const [equipamento, setEquipamento] = useState("");
    const [descricao, setDescricao] = useState("");

    //agr vamo cria uma ariavel pra exibir os erros de preenchimento
    const [erro, setErro] = useState("");

    function cadastrarOrdem(event) {
        event.preventDefault(); //isso prvine recarregar a pg

        //agr vamo validar as entradas!
        if (
            cliente.trim() == "" ||
            equipamento.trim() == "" ||
            descricao.trim() == "" ||
            descricao.length < 15 ||
            descricao.length > 100
        ) {
            setErro("Preencha todos os campos corretamente!");
            return;
        }

        //agr vamo unir tudo num so
        const novaOrdem = {
            id: Date.now(),
            cliente: cliente.trim(),
            equipamento: equipamento.trim(),
            descricao: descricao.trim(),
            status: "Aberto"
        }

        //agr vamo add na lista de ordens
        setOrdens([...ordens, novaOrdem]);

        //dps de add vao limpar os campos
        setCliente("");
        setEquipamento("");
        setDescricao("");
        setErro("");

    }


    // NAO ENTENDI PQ O MEU CODIGO ABAIXO NAO FUNCIONOU :<<<< mt mais atualizado e correto do que a maneira que meus amigos fizeram >:( eu ein
    // function fecharOrdem(id) {
    //     ordens.map((ordem) => {
    //         if (ordem.id == id) {
    //             ordem.status = "Fechado";
    //         }
    //         return;
    //     });
    // }

    function fecharOrdem(id) {
        const ordensAtualizadas = ordens.map((ordem) => {
            if (ordem.id === id) {
                return { ...ordem, status: "Fechado" };
            }
            return ordem;
        });

        setOrdens(ordensAtualizadas);
    }

        console.log(ordens);

        return (
            <main>
                <h1>Ordens de Serviço</h1>
                <form onSubmit={cadastrarOrdem}>
                    <div>
                        <label htmlFor="cliente">Nome do Cliente:</label>
                        <input
                            type="text"
                            name="cliente"
                            value={cliente}
                            placeholder="Nome do Cliente"
                            onChange={(event) => setCliente(event.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="equipamento">Nome do Equipamento:</label>
                        <input
                            type="text"
                            name="equipamento"
                            value={equipamento}
                            placeholder="Nome do Equipamento"
                            onChange={(event) => setEquipamento(event.target.value)} />
                    </div>

                    <div className="label_textarea">
                        <label htmlFor="descricao">Descrição:</label>
                        <textarea
                            id="descricao"
                            value={descricao}
                            placeholder="Descrição"
                            onChange={(event) => setDescricao(event.target.value)} />
                    </div>

                    {erro != "" && <p style={{ color: "red" }}>{erro}</p>}

                    <button type="submit">Cadastrar</button>
                </form>

                <table>
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Equipamento</th>
                            <th>Descrição</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordens.map((ordem) => (
                            <tr key={ordem.id}>
                                <td>{ordem.cliente}</td>
                                <td>{ordem.equipamento}</td>
                                <td>{ordem.descricao}</td>
                                {ordem.status == "Aberto" ? (
                                    <td className="aberto_status">{ordem.status}</td>
                                ) : (
                                    <td className="fechado_status">{ordem.status}</td>
                                )}
                                <td>
                                    <button onClick={() => fecharOrdem(ordem.id)}>Fechar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </main>
        )
    }