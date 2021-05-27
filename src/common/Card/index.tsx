import React from "react";

type Props = {
  product: {
    name: string;
    img: string;
    price: string;
    installments: string;
  };
};

const Card = ({ product }: Props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={product.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <h3>{product.price}</h3>
        <h5>{product.installments}</h5>
      </div>
    </div>
  );
};

export default React.memo(Card);
