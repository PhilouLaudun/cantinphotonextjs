import React, { useState } from "react";
import { PriceData } from "../data/priceData";
import Image from "next/image";

const Carte = (props) => { // carte d'affichage des prestations
  const [currentCard] = useState(PriceData); // tableau de cartes à afficher, fichier externe en json
  const carte = currentCard[props.carteNumber];// tableau contenant la carte à afficher, index passé en props
 
  return (
    <div className="card">
      <div className="cardimage">
        <Image src={carte.img} alt={carte.title} layout="fill" />
      </div> 

      <h1>{carte.title} </h1>
      <div className="card-text">
        <h3>
          <div>{carte.infos}</div>
        </h3>
        <h2>{carte.prix}</h2>
      </div>
    </div>
  );
};

export default Carte;
