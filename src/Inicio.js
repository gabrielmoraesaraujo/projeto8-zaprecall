import React from "react";
import image1 from "./assets/img/logogrande.png";

export default function Inicio(){
    

    return(

        <div className="Inicio">
            <img clasName="img"src={image1} alt="zaprecall" />
            <h2>ZapRecall</h2>
            <div className="Buttom">Iniciar Recall!</div>


        </div>
    );
}