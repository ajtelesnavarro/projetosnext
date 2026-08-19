import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import "./index.css";
import BannerCTA from "@/components/bannerCTA";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export default async function Home() {

  await sleep(3500);

  // throw new Error("Simulando um ERRO CATASTROFICO");



  return (
    <>
      <section className="tela_principal">
        <div className="tela_principal_cta">
          <div className="tela_principal_cta_esquerda">
            <div className="tela_principal_cta_texto">
              <h1>Unlok Your Business Potential With Facebook & Instagram Advertising</h1>
              <h2>Facebook Premier Level Partner Agency</h2>
            </div>
            <div className="tela_principal_cta_botao">
              <Link href={"/"} className="btn_menu_maior">WORK WITH US</Link>
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
      <BannerCTA/>
    </>
  );
}