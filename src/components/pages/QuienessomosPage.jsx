import { Articulo } from "../common/Articulo";
import axios from "axios";
import { useEffect, useState } from "react";

export function QuienessomosPage(){

    const [articulos, setArticulos] = useState([]);

    //Traigo info de api.json
    useEffect(()=>{
        axios.get("http://localhost:3000/Articulos").then((response) => {
            setArticulos(response.data);
    });

}, []);
    
    return (
    <>
        <article className="articulo">
            <div className="articulo contenido">
                {articulos.map(function (articulo) {
                    return (
                        <Articulo key={articulo.id}
                            title={articulo.titulo} />
                        
                    );
                })}
            </div>

        </article>
    </>
    )
}