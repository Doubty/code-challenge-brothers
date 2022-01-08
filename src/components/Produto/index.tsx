import { IProduct } from "../../types";
import "./style.css";

const Produto = ({ produto }: { produto: IProduct }) => {
  return (
    <div className="produtos-item black">
      <h2>{produto.name}</h2>
      <img src={produto.images[0].src} alt={produto.images[0].alt} />
    </div>
  );
};

export default Produto;
