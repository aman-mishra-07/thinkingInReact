import React from "react";

function ProductCategoryRow({ category }) {
    return (
      <tr>
        <th colSpan="2" className="font-semibold border">
          {category}
        </th>
      </tr>
    );
  }
  export default ProductCategoryRow;