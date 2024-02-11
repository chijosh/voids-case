import React, {useState} from 'react';
import { InventoryInterface, Product } from "../types/Inventory.interface";

import { MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface DropDownProps {
    products: any,
    handleChange: ()=>{}
}

export const DropDown = ({ products, handleChange }) => {
  const [product, setProduct] = useState('')

    const handleSelectedProduct = (event: SelectChangeEvent) => {
    const {
      target: { value }
    } = event;

    const val = Number(value) - 1

    setProduct(products[val])
    handleChange(products[val])

  };

  return (
    <Box sx={{ width: 250 }}>
      <FormControl fullWidth>
        <InputLabel id='products-label'>
          Products
        </InputLabel>
        <Select
          displayEmpty
          defaultValue = ""
          labelId='products-label'
          id='products'
          label={'products'}
          value={product ? product.id : ''}
          onChange={handleSelectedProduct}
        >
          {products.map((product: Product) => (
            <MenuItem key={product.id} value={product.id}>
              {product.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};