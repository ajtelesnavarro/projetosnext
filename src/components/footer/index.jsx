"use client";
import Link from "next/link";

import "@/app/globals.css"

export default function Footer() {
    return (
        <footer>
            <h3>@ Tier Eleven - 2026. Todos os direitos reservados.</h3>
            <ul>
                <li><Link href={"/sobre"} className="menu_footer">Sobre</Link></li>
                <li><Link href={"/nosso_time"} className="menu_footer">Nosso Time</Link></li>
                <li><Link href={"/contato"} className="menu_footer">Work with Us</Link></li>
            </ul>
        </footer>)
}