export type Product = {
    id: number;
    name: string;
    demand: number;
  };
  
export interface InventoryInterface {
    id: number;
    location: string;
    inventory: number;
    productId: number;
    products: Product[];
    weatherCondition: string;
    plannedQuantity: {
      productId: number;
      quantity: number;
    }[];
  };