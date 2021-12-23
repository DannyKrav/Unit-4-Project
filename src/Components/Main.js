import React from 'react';
import Product from '../Components/Product';


export default function Main(props) {
  const { onAdd, products, quantityDec, quantityInc } = props;
  return (
    <main className='Main'>
      <div className='Selection-Area'>
        {products.map((product) => (
          <Product key={product.id} onAdd={onAdd} product={product} quantityDec={quantityDec} quantityInc={quantityInc}></Product>
        ))}

      </div>

    </main>
  );
}
