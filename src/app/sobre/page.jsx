import "./sobre.css";

export default function Sobre() {
    return (
        <>
            <section className="sobre_tela_principal">
                <div className="sobre_tela_principal_texto">
                    <h1>Transformamos marketing em crescimento.</h1>

                    <h2>
                        A Tier 11 é uma agência de marketing digital especializada em
                        estratégias de crescimento, mídia paga, criatividade e dados para
                        ajudar empresas a conquistar novos clientes e aumentar seu valor
                        ao longo do tempo.
                    </h2>
                </div>

                <div className="sobre_tela_principal_imagem">
                    <img
                        src="https://placehold.co/400x500/png"
                        alt="Equipe da Tier 11"
                    />
                </div>
            </section>

            <section className="sobre_cards">
                <div className="sobre_cards_titulo">
                    <h1>Nossos diferenciais</h1>
                </div>
                <div className="sobre_cards_grid">
                    <div className="sobre_card">
                        <div className="sobre_card_texto">
                            <div className="sobre_card_texto_titulo">
                                <span>01</span>
                                <h3>Mídia Paga</h3>
                            </div>

                            <div className="sobre_card_texto_subtitulo">
                                <p>
                                    Estratégias de publicidade digital orientadas por dados para
                                    alcançar novos clientes, aumentar a eficiência dos investimentos
                                    e impulsionar o crescimento.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sobre_card">
                        <div className="sobre_card_texto">
                            <div className="sobre_card_texto_titulo">
                                <span>02</span>
                                <h3>Criatividade</h3>
                            </div>

                            <div className="sobre_card_texto_subtitulo">
                                <p>
                                    Desenvolvimento de criativos e campanhas pensados para chamar
                                    atenção, comunicar o valor da marca e transformar interesse em
                                    resultados.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sobre_card">
                        <div className="sobre_card_texto">
                            <div className="sobre_card_texto_titulo">
                                <span>03</span>
                                <h3>Dados & Estratégia</h3>
                            </div>

                            <div className="sobre_card_texto_subtitulo">
                                <p>
                                    Análise de dados, atribuição e métricas de negócio para
                                    identificar o que realmente gera receita e tomar decisões de
                                    marketing com mais segurança.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sobre_card">
                        <div className="sobre_card_texto">
                            <div className="sobre_card_texto_titulo">
                                <span>04</span>
                                <h3>CRO & Conversão</h3>
                            </div>

                            <div className="sobre_card_texto_subtitulo">
                                <p>
                                    Otimização da experiência digital para transformar mais
                                    visitantes em clientes e aproveitar melhor o tráfego que a
                                    empresa já conquista.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}