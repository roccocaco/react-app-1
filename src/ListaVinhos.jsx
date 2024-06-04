import { useState } from "react";
import { dataVinhos } from "./data";

function ListaVinhos() {
  const [data, setData] = useState(dataVinhos);
  const [vinho, setVinho] = useState("");

  const handleClick = () => {
    const findVinho = data.filter(
        (e) => e.nome.toLowerCase().includes(vinho.toLowerCase()));
    
    setData(findVinho);
  };

  return (
    <div>
      <div className="div-pesquisa">
        <div>
          <input
            type="text"
            placeholder="Escreva nome de um vinho"
            onChange={({ target }) => setVinho(target.value)}
          />
          <button onClick={handleClick}>Pesquisar</button>
        </div>
      </div>

      {data.map((element, index) => (
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

export default ListaVinhos;
