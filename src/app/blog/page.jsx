import CardPostBlog from "@/components/cardBlog";
import "./blog.css";

export default function Blog() {

    const listaNoticias = [
        {
            id: 1,
            titulo: "KRIS JENNER DIZ QUE 157 PESSOAS EM LOS ANGELES COMEÇARAM A TOMAR CAFÉ ÀS 6H DA MANHÃ",
            descricao: "Segundo Kris, o hábito pode ser o responsável pela nova onda de produtividade que tomou conta da cidade.",
            imagem: "xicara.png",
            tag: "CULTURA"
        },

        {
            id: 2,
            titulo: "KRIS JENNER REVELA QUE 83% DAS PESSOAS ESTÃO USANDO O MESMO EMOJI SEM SABER O MOTIVO",
            descricao: "A empresária afirma ter descoberto a origem da tendência, mas decidiu manter o segredo por enquanto.",
            imagem: "emoji.png",
            tag: "INTERNET"
        },

        {
            id: 3,
            titulo: "48 PESSOAS EM BEVERLY HILLS FORAM VISTAS USANDO ÓCULOS DE SOL DENTRO DE CASA",
            descricao: "Kris Jenner declarou que isso não é uma tendência, mas sim 'um estilo de vida'.",
            imagem: "oculos.png",
            tag: "FASHION"
        },

        {
            id: 4,
            titulo: "KRIS JENNER AFIRMA QUE QUARTA-FEIRA É OFICIALMENTE O NOVO SÁBADO",
            descricao: "A declaração dividiu a internet e fez milhares de pessoas reconsiderarem seus planos para o meio da semana.",
            imagem: "quarta.png",
            tag: "LIFESTYLE"
        },

        {
            id: 5,
            titulo: "157 PESSOAS EM MIAMI COMPRAM A MESMA BEBIDA APÓS UMA ÚNICA PUBLICAÇÃO",
            descricao: "O estabelecimento afirma que nunca havia recebido tantos pedidos iguais em tão pouco tempo.",
            imagem: "bebida.png",
            tag: "TRENDING"
        },

        {
            id: 6,
            titulo: "KRIS JENNER DIZ QUE 92% DOS JOVENS ESTÃO OUVINDO MÚSICA ANTES DE DORMIR",
            descricao: "A pesquisa, conduzida por Kris durante uma conversa no jantar, já está sendo considerada 'definitiva'.",
            imagem: "cama.png",
            tag: "MÚSICA"
        },

        {
            id: 7,
            titulo: "INTERNET ENTRA EM COLAPSO APÓS KRIS JENNER POSTAR UMA FOTO SEM LEGENDA",
            descricao: "Milhares de usuários passaram horas tentando descobrir o significado oculto da publicação.",
            imagem: "foto.png",
            tag: "INTERNET"
        },

        {
            id: 8,
            titulo: "KRIS JENNER CONFIRMA: 34 PESSOAS JÁ COMEÇARAM A PLANEJAR O NATAL EM AGOSTO",
            descricao: "Especialistas afirmam que a temporada natalina pode começar oficialmente antes do esperado.",
            imagem: "natal.png",
            tag: "LIFESTYLE"
        },

        {
            id: 9,
            titulo: "725 PESSOAS EM CALIFÓRNIA COMEÇAM A USAR A MESMA COR DE UNHA APÓS COMENTÁRIO DE KRIS",
            descricao: "A cor, até então considerada esquecida, voltou aos holofotes em menos de 24 horas.",
            imagem: "esmalte.png",
            tag: "BEAUTY"
        },

        {
            id: 10,
            titulo: "KRIS JENNER AFIRMA QUE 2026 SERÁ O ANO DE 'FAZER MENOS E PARECER OCUPADO'",
            descricao: "A declaração rapidamente se tornou um dos assuntos mais comentados entre usuários das redes sociais.",
            imagem: "trabalho.png",
            tag: "OPINIÃO"
        }
    ];

    return (
        <>
            <div className="titulo">
                <div className="titulo-img">
                    <img src="/imagens/kris.jpg" />
                </div>
                <div className="titulo-txt">
                    <h2>KRIS JENNER'S LUCKY CHARM</h2>
                    <h3>DAILY REPORT</h3>
                    <h4>"Keep Rich, Stay Slay" - Kris Jenner</h4>
                </div>
            </div>

            <div className="card-container">
                {listaNoticias.map(noticia => {
                    return <CardPostBlog
                        key={noticia.id}
                        titulo={noticia.titulo}
                        descricao={noticia.descricao}
                        imagem={noticia.imagem}
                        tag={noticia.tag}
                    />
                })} {/*executa cada objeto dentro do listaprodutos */}
            </div>
        </>
    );
}