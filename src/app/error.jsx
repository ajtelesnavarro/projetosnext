"use client";

import FigureError from "@/components/figureError";

export default function Error({ error }) {
    return (
        <div className="container-notfound">
            <div className="flex-notfound">
                <h2>DEU ERRO MANO...</h2>
                <FigureError/>
                <p>{error.message}</p>
            </div>
        </div>
    );
}