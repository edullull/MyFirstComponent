import React from "react";
import img1 from "../imagenes/Grib_skov.jpg";
import img2 from "../imagenes/imagen2.svg"
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props){
    return(
        <div className="contenedor-testimonios">
            <img className="imagen-testimonio"
                src={props.imagen} alt="imagen"/>
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio">
                    <strong>{props.nombre}</strong> en {props.pais}</p>
                <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
                <p className="">{props.testimonio}</p>
            </div>
        </div>
    );
}

export default Testimonio;

