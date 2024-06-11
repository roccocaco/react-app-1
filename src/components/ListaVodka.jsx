import { useState } from "react";
import { dataVodkas } from "../data/data";

function ListaVodka() {
  const [vodkas, setVodkas] = useState(dataVodkas);

  return (
    <div>
      {vodkas.map((element, index) => (
        <div key={index}>
          <img src={element.imagem} alt="not-found" />
          <h4>{element.marca}</h4>
          <p>{element.nome}</p>
          <p>{element.preco}</p>
        </div>
      ))}
    </div>
  );
}

export default ListaVodka;
