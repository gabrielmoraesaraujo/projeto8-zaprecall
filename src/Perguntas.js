import React from "react";

import imagem2 from "./assets/img/logopequeno.png"

export default function Perguntas(){


    return(
        <div className="Perguntas">
            <div className="Topo">
                <img src={imagem2} alt="" />
                <h2>ZapRecall</h2>
            </div>
            <div className="Corpo">
                <div className="Pergunta">
                    Pergunta1
                </div>
                <div className="Pergunta">
                    Pergunta2
                </div>
                <div className="Pergunta">
                    Pergunta3
                </div>
                <div className="Pergunta">
                    Pergunta4
                </div>
                
            </div>
            <div className="Footer">
            0/4 CONCLUÍDOS

            </div>

        </div>

    );
}