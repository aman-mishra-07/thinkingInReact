import React from 'react'

function ProductRow({ product }) {
    const name = product.stocked ? product.name :
      <span style={{ color: 'red' }}>
        {product.name}
      </span>;
  
    return (
      <tr>
        <td className='p-2 border'>{name}</td>
        <td className='p-2 border'>{product.price}</td>
      </tr>
    );
  }

export default ProductRow
