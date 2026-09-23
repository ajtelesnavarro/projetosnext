import FigureLoading from "@/components/figureLoading"

export default function Loading(){
    return(
        <>
            <div className="container-notfound">
                <div className="flex-notfound">
                    <h2>ESPERA PORRA ...</h2>
                    <FigureLoading/>
                </div>
            </div>
        </>
    )
}