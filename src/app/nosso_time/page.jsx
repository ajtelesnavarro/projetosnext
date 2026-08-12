import "./nosso_time.css";

export default function Nosso_time() {
    return (
        <>
            <section className="nosso_time_tela_principal">
                <div className="nosso_time_tela_principal_texto">
                    <h1>Conheça quem faz a Tier 11 acontecer.</h1>

                    <h2>
                        Por trás de cada estratégia, campanha e resultado existe um
                        time formado por profissionais de diferentes áreas, unidos
                        pelo objetivo de transformar desafios em oportunidades de
                        crescimento.
                    </h2>
                </div>

                <div className="nosso_time_tela_principal_imagem">
                    <img
                        src="https://placehold.co/400x500/png"
                        alt="Equipe da Tier 11"
                    />
                </div>
            </section>

            <section className="nosso_time_cards">
                <div className="nosso_time_cards_titulo">
                    <h1>Nosso time</h1>
                </div>

                <div className="nosso_time_cards_grid">

                    <div className="nosso_time_card">
                        <div className="nosso_time_card_texto">
                            <div className="nosso_time_card_texto_titulo">
                                <img src="/imagens/luiz_almeida.jpg" className="nosso_time_card_texto_titulo_imagem"></img>
                                <h3>Luiz Almeida</h3>
                            </div>

                            <div className="nosso_time_card_texto_subtitulo">
                                <p>
                                    Luiz Almeida faz parte do time da Tier 11 contribuindo para o
                                    desenvolvimento de estratégias e soluções voltadas ao crescimento.
                                    Seu trabalho envolve transformar objetivos em ações práticas,
                                    buscando sempre novas oportunidades para melhorar os resultados
                                    dos projetos e das campanhas.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="nosso_time_card">
                        <div className="nosso_time_card_texto">
                            <div className="nosso_time_card_texto_titulo">
                                <img src="/imagens/leticia_aquino.jpg" className="nosso_time_card_texto_titulo_imagem"/>
                                <h3>Leticia Aquino</h3>
                            </div>

                            <div className="nosso_time_card_texto_subtitulo">
                                <p>
                                    Leticia Aquino contribui para o time com criatividade, comunicação
                                    e atenção aos detalhes. Seu trabalho ajuda a transformar ideias em
                                    conteúdos e estratégias capazes de aproximar as marcas de seus
                                    públicos e criar experiências mais relevantes.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="nosso_time_card">
                        <div className="nosso_time_card_texto">
                            <div className="nosso_time_card_texto_titulo">
                                <img src="/imagens/estevao_ferreira.jpg" className="nosso_time_card_texto_titulo_imagem"/>
                                <h3>Estevão Ferreira</h3>
                            </div>

                            <div className="nosso_time_card_texto_subtitulo">
                                <p>
                                    Estevão Ferreira contribui para o desenvolvimento dos projetos por
                                    meio de análises, planejamento e acompanhamento de resultados.
                                    Seu trabalho ajuda o time a identificar oportunidades, compreender
                                    diferentes cenários e tomar decisões mais estratégicas.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="nosso_time_card">
                        <div className="nosso_time_card_texto">
                            <div className="nosso_time_card_texto_titulo">
                                <img src="/imagens/gustavo_paiva.jpg" className="nosso_time_card_texto_titulo_imagem"/>
                                <h3>Gustavo Paiva</h3>
                            </div>

                            <div className="nosso_time_card_texto_subtitulo">
                                <p>
                                    Gustavo Paiva contribui para o time da Tier 11 com dedicação,
                                    organização e uma visão estratégica dos projetos. Seu trabalho
                                    envolve colaborar na execução das iniciativas, acompanhar
                                    oportunidades e buscar soluções que contribuam para o crescimento
                                    e para os resultados da equipe.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}