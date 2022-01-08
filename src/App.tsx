/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "./App.css";
import Produto from "./components/Produto";
import sobreEmpresa from "./assets/images/sobreEmpresa.png";
import DestaquePromocao from "./components/DestaquePromocao";
import { IProduct } from "./types/index";
import Data from "./assets/data/data.json";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchSelect, setSearchSelect] = useState("default");
  const [produtos] = useState<IProduct[]>(Data.data.nodes);
  const [promocao] = useState<IProduct[]>(Data.data.nodes.slice(0, 3));

  function filteredProducts(): IProduct[] {
    if (searchInput === "") {
      return produtos;
    } else {
      let aux: IProduct[] = [];

      if (searchSelect === "default") {
        aux = produtos.filter((item) =>
          item.name.toLowerCase().match(searchInput.toLocaleLowerCase())
        );
        return aux;
      } else {
        aux = produtos.filter((item) =>
          item.name.toLowerCase().match(searchInput.toLocaleLowerCase())
        );

        aux = aux.filter((produto) => produto.category.name === searchSelect);

        return aux;
      }
    }
  }

  function getCategorias() {
    let arr: string[] = Data.data.nodes.map(
      (categoria) => categoria.category.name
    );

    let semRepetidos: string[] = arr.filter(function (el, i) {
      return arr.indexOf(el) === i;
    });

    return semRepetidos;
  }

  return (
    <div className="Container">
      <div className="info-bg">
        <div className="superinfo">
          <p>Seg / Sex - 08:00 ás 18:00</p>
          <p>+55 84 99644-8111</p>
          <p>Rua álvaro Rodrigues, 223</p>
        </div>
      </div>

      <header className="menu-bg">
        <div className="menu">
          <div className="menu-logo">
            <a href="#">
              EASTSIDE <span> STORE </span>
            </a>
          </div>
          <nav className="menu-nav">
            <ul>
              <li>
                <a href="#Sobre">Sobre</a>
              </li>
              <li>
                <a href="#Produtos">Produtos</a>
              </li>
              <li>
                <a href="#Promoções">Promoções</a>
              </li>
              <li>
                <a href="#Noticia">Notícias</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <h1 className="introducao">
        Nossos valores <br />E nossa história
      </h1>

      <section className="sobre" id="Sobre">
        <div className="sobre-info">
          <h1>Sobre a empresa</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            soluta quam pariatur rem ut sunt tempora? Quia quisquam, hic aliquid
            sequi, adipisci ex officia est fuga earum maxime animi commodi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            soluta quam pariatur rem ut sunt tempora? Quia quisquam, hic aliquid
            sequi, adipisci ex officia est fuga earum maxime animi commodi!
          </p>
        </div>
        <div className="sobre-img">
          <img src={sobreEmpresa} alt="Sobre a empresa" />
        </div>
      </section>

      <section className="produtos" id="Produtos">
        <h1>Produtos</h1>

        <div className="search">
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            name="pesquisar"
            id="inputPesquisar"
            placeholder="Pesquisar produtos"
          />
          <select
            onChange={(e) => setSearchSelect(e.target.value)}
            defaultValue="default"
            name="select"
          >
            <option value="default">Todas Categorias</option>
            {getCategorias().map((categoria: string) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </div>

        <div className="produtos-container">
          {filteredProducts().map((produto) => (
            <Produto key={produto.id} produto={produto} />
          ))}
        </div>
      </section>

      <section className="promocao" id="Promoções">
        {promocao.map((promocao) => (
          <DestaquePromocao key={promocao.id} promocao={promocao} />
        ))}
      </section>

      <section className="noticia" id="Noticia">
        <div className="noticia-info">
          <h1>Notícias</h1>
          <p>Fique por dentro dos nossos novos produtos</p>
        </div>
        <form action="" className="noticia-form">
          <input type="text" name="" id="" placeholder="Digite seu email" />
          <button>Enviar</button>
        </form>
      </section>

      <footer className="footer">
        <p>
          Desafio desenvolvido by
          <a rel="noreferrer" href="https://github.com/Doubty" target="_blank">
            Antônio Galvão (Doubty)
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
