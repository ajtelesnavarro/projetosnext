import "./contato.css";

export default function contato() {
    return (
        <>
            <section className="contato_tela_principal">
                <div className="contato_tela_principal_texto">
                    <h1>Gostaria de trabalhar conosco?</h1>

                    <h2>
                        Conte um pouco sobre o seu projeto, seus objetivos e os
                        desafios da sua empresa. Nossa equipe está pronta para
                        entender suas necessidades e encontrar as melhores
                        estratégias para ajudar seu negócio a crescer.
                    </h2>
                </div>

                <div className="contato_tela_principal_imagem">
                    <img src="https://placehold.co/400x500" />
                </div>
            </section>

            <section className="contato_form">
                <div className="contato_form_container">
                    <div className="contato_form_titulo">
                        <h2>Entre em contato</h2>
                        <p>
                            Preencha o formulário abaixo e fale com a nossa equipe.
                        </p>
                    </div>

                    <form>
                        <div className="contato_form_linha">
                            <div className="contato_form_campo">
                                <label htmlFor="nome">Nome</label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    placeholder="Digite seu nome"
                                    required
                                />
                            </div>

                            <div className="contato_form_campo">
                                <label htmlFor="empresa">Empresa</label>
                                <input
                                    type="text"
                                    id="empresa"
                                    name="empresa"
                                    placeholder="Nome da sua empresa"
                                />
                            </div>
                        </div>

                        <div className="contato_form_linha">
                            <div className="contato_form_campo">
                                <label htmlFor="email">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="seuemail@email.com"
                                    required
                                />
                            </div>

                            <div className="contato_form_campo">
                                <label htmlFor="telefone">Telefone</label>
                                <input
                                    type="tel"
                                    id="telefone"
                                    name="telefone"
                                    placeholder="(00) 00000-0000"
                                />
                            </div>
                        </div>

                        <div className="contato_form_campo">
                            <label htmlFor="assunto">Assunto</label>

                            <select id="assunto" name="assunto" required>
                                <option value="">
                                    Selecione uma opção
                                </option>
                                <option value="marketing">
                                    Estratégia de Marketing
                                </option>
                                <option value="trafego">
                                    Mídia Paga
                                </option>
                                <option value="criativos">
                                    Criativos
                                </option>
                                <option value="consultoria">
                                    Consultoria
                                </option>
                                <option value="outro">
                                    Outro assunto
                                </option>
                            </select>
                        </div>

                        <div className="contato_form_campo">
                            <label htmlFor="mensagem">Mensagem</label>

                            <textarea
                                id="mensagem"
                                name="mensagem"
                                placeholder="Conte um pouco sobre seu projeto..."
                                rows="6"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="botao_enviar">
                            ENVIAR MENSAGEM
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}