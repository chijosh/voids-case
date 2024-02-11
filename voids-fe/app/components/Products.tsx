import React from 'react';
import { InventoryInterface, Product } from '../types/Inventory.interface';

interface ProductProps {
  products: Product[];
  inventories: InventoryInterface[];
}

const Products: React.FC<ProductProps> = ({ products, inventories }) => {
  const productSupplies = products.map((product) => {
    const totalSupply = inventories.reduce((sum, inventory) => {
      
      const matchingQuantity = inventory.plannedQuantity.find(
        (pq) => pq.productId === product.id
      );

      return sum + (matchingQuantity?.quantity || 0);
    }, 0);

    return { ...product, totalSupply };
  });

  return (
    <table className="products-table">
      <thead>
        <tr>
          <th className="product-name">Product</th>
          <th className="demand">Projected Demand</th>
          <th className="supply">Total Planned Supply</th>
        </tr>
      </thead>
      <tbody>
        {productSupplies.map((product) => (
          <tr key={product.id}>
            <td className="product-name">{product.name}</td>
            <td className="demand">{product.demand}</td>
            <td className="supply">{product.totalSupply}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Products;
