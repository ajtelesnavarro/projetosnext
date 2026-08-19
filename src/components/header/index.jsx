"use client";
import Link from "next/link";

import "@/app/globals.css"

export default function Header() {
    return (
        <header>
            <div className="menu_direita">
                <a href="/">
                    <img src="/imagens/logo.png" alt="Logo" className="logo" />
                </a>
            </div>
            <div className="menu_esquerda">
                <ul>
                    <li><Link href={"/whatwedo"}>WHAT WE DO
                        <span className="material-symbols-outlined">
                            arrow_drop_down
                        </span></Link>
                    </li>
                    <li><Link href={"/blog"}>BLOG</Link></li>
                    <li><Link href={"/podcast"}>PODCAST</Link></li>
                    <li><Link href={"/careers"}>CAREERS</Link></li>
                    <li><Link href={"/workwithus"} className="btn_menu">WORK WITH US</Link></li>
                </ul>
            </div>
        </header>)
}