/* eslint-disable jsx-a11y/anchor-is-valid */
import { IProduct } from "../../types";
import "./style.css";

const DestaquePromocao = ({ promocao }: { promocao: IProduct }) => {
  return (
    <div className="promocao-item">
      <h3>{promocao.name}</h3>
      <span>
        <sup>R$</sup> {Math.floor(Math.random() * 100)}
      </span>
      <p>{promocao.shortDescription}</p>
      <a rel="noreferrer" href="">
        Comprar
      </a>
    </div>
  );
};

export default DestaquePromocao;
