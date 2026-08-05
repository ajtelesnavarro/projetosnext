import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header>
        <div className="menu_direita">
          <a href="#">
            <img src="/imagens/logo.png" alt="Logo" className="logo" />
          </a>
        </div>
        <div className="menu_esquerda">
          <ul>
            <li><a href="#">WHAT WE DO
              <span className="material-symbols-outlined">
                arrow_drop_down
              </span></a>
            </li>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">PODCAST</a></li>
            <li><a href="#">CAREERS</a></li>
            <li><a href="#" className="btn_menu">WORK WITH US</a></li>
          </ul>
        </div>
      </header>
      <section className="tela_principal">
        <div className="tela_principal_cta">
          <div className="tela_principal_cta_esquerda">
            <div className="tela_principal_cta_texto">
              <h1>Unlok Your Business Potential With Facebook & Instagram Advertising</h1>
              <h2>Facebook Premier Level Partner Agency</h2>
            </div>
            <div className="tela_principal_cta_botao">
              <a href="#" className="btn_menu_maior">WORK WITH US</a>
            </div>
          </div>
          <div className="tela_principal_cta_direita">
            <Image
              src="https://placehold.co/400x500/png"
              alt="Imagem de destaque"
              width={400}
              height={500}
            />
          </div>
        </div>
        <div className="tela_principal_tecnologias">
          <div className="tela_principal_tecnologias_item">
            <Image
              src="https://placehold.co/100x100/png"
              alt="Logo"
              width={100}
              height={100}
            />
            <h2>Facebook Marketing Experts</h2>
          </div>
          <div className="tela_principal_tecnologias_item">
            <Image
              src="https://placehold.co/100x100/png"
              alt="Logo"
              width={100}
              height={100}
            />
            <h2>Instagram Marketing Experts</h2>
          </div>
          <div className="tela_principal_tecnologias_item">
            <Image
              src="https://placehold.co/100x100/png"
              alt="Logo"
              width={100}
              height={100}
            />
            <h2>Facebook Premier Level Partner Agency</h2>
          </div>
          <div className="tela_principal_tecnologias_item">
            <Image
              src="https://placehold.co/100x100/png"
              alt="Logo"
              width={100}
              height={100}
            />
            <h2>Instagram Marketing Experts</h2>
          </div>
          <div className="tela_principal_tecnologias_item">
            <Image
              src="https://placehold.co/100x100/png"
              alt="Logo"
              width={100}
              height={100}
            />
            <h2>Google Ads Specialists</h2>
          </div>
          <div className="tela_principal_tecnologias_item">
            <Image
              src="https://placehold.co/100x100/png"
              alt="Logo"
              width={100}
              height={100}
            />
            <h2>LinkedIn Advertising Professionals</h2>
          </div>
        </div>
      </section>
    </>
  );
}