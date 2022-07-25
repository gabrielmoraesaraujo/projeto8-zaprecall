import React from "react";
import Footer from './Footer';

import imagem2 from "./assets/img/logopequeno.png"

function CarregarCards(){
    let flashcards = [
        {id:1, Question: "O que é JSX?", Answer: "Uma extensão de linguagem do JavaScript" },
        {id:2, Question: "O React é __", Answer: "uma biblioteca JavaScript para construção de interfaces" },
        {id:3, Question: "Componentes devem iniciar com __", Answer:"letra maiúscula"},
        {id:4, Question: "Podemos colocar __ dentro do JSX", Answer:"expressões"},
        {id:5, Question: "O ReactDOM nos ajuda __", Answer:"interagindo com a DOM para colocar componentes React na mesma"},
        {id:6, Question: "Usamos o npm para __", Answer:"gerenciar os pacotes necessários e suas dependências"},
        {id:7, Question: "Usamos props para __", Answer:"passar diferentes informações para componentes "},
        {id:8, Question: "Usamos estado (state) para __ ", Answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ];
}

export default function Perguntas(){

    function Pergunta(props){
        return(
        <div className="Pergunta">
             Pergunta{props.id}
            <ion-icon name="play-outline"></ion-icon>
        </div>
        );

    }


    return(
        <div className="Perguntas">
            <div className="Topo">
                <img src={imagem2} alt="" />
                <h2>ZapRecall</h2>
            </div>
            <div className="Corpo">
                    <Pergunta id="1"/>
                    <Pergunta id="2"/>
                    <Pergunta id="3"/>
                    <Pergunta id="4"/>
                <Footer />
                
            </div>
           

        </div>

    );
}