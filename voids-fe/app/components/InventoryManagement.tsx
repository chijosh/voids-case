import React, { useState } from "react";
import { InventoryInterface } from "../types/Inventory.interface";
import { DropDown } from "./DropDown";
import { TextField } from "@mui/material";

interface LocationProps {
  inventories: InventoryInterface[];
  onQuantityChange: (
    inventoryId: number,
    productId: number,
    quantity: number
  ) => void;
}

const Inventory: React.FC<LocationProps> = ({
  inventories,
  onQuantityChange,
}) => {

  const [selectedProduct, setSelectedProduct] = useState('')

  console.log('selectedProduct >>>', selectedProduct);
  

  return (
    <table className="locations-table">
      <thead>
        <tr className="locations-table__tr">
          <th>Location</th>
          <th>Inventory</th>
          <th>Product</th>
          <th>Planned Supply</th>
        </tr>
      </thead>
      <tbody>
        {inventories.map((inventory) => (
          <tr key={inventory.id}>
            <td>{inventory.location}</td>
            <td>{inventory.inventory}</td>
            <td>{inventory.products && <DropDown products={inventory.products} handleChange={setSelectedProduct} />}</td>
            <td>
              {selectedProduct && (
                <TextField
                  key={selectedProduct.id} 
                  type="number"
                  value={
                    inventory.plannedQuantity.find(
                      (pq) => pq.productId === selectedProduct.id
                    )?.quantity || 0
                  }
                  onChange={(e) =>
                    onQuantityChange(
                      inventory.id, 
                      selectedProduct.id,
                      Number(e?.target?.value)
                    )
                  }
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Inventory;
