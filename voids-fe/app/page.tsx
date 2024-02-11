"use client";
import React, { useCallback, useEffect, useState } from "react";

import axios from "axios";
import Products from "./components/Products";
import Inventory from "./components/InventoryManagement";

import { AppBar, Box, Container, Typography } from "@mui/material";
import { InventoryInterface, Product } from "./types/Inventory.interface";

export default function Home() {
  const [apiResponse, setApiResponse] = useState<InventoryInterface[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get("http://localhost:3000/supply");

        console.log({ response });

        const data: InventoryInterface[] = response.data;
        console.log("response", response);
        if (data) {
          data.map((value) => {
            setProducts(value.products);

            const newArrayState = data.filter((value, theIndex) => {
              return value.id !== theIndex;
            });
            setApiResponse(newArrayState);
          });
        }
      } catch (error) {
        console.error("Error fetching inventory:", error);
      }
    };

    fetchInventory();
  }, []);

  const handleQuantityChange = useCallback(
    (inventoryId: number, productId: number, quantity: number) => {
      const updatedInventory = apiResponse.map((location) => {
        if (location.id === inventoryId) {
          const matchingQuantityIndex = location.plannedQuantity.findIndex(
            (pq) => pq.productId === productId
          );

          if (matchingQuantityIndex !== -1) {
            return {
              ...location,
              plannedQuantity: [
                ...location.plannedQuantity.slice(0, matchingQuantityIndex),
                {
                  ...location.plannedQuantity[matchingQuantityIndex],
                  quantity,
                },
                ...location.plannedQuantity.slice(matchingQuantityIndex + 1),
              ],
            };
          } else {
            return {
              ...location,
              plannedQuantity: [
                ...location.plannedQuantity,
                { productId, quantity },
              ],
            };
          }
        }
        return location;
      });

      setApiResponse(updatedInventory);
    },
    [apiResponse]
  );

  return (
    <>
      <AppBar position="static">
        <Typography variant="h6">Supply Quantity Planning</Typography>
      </AppBar>
      <Container sx={{ marginTop: "28px" }}>
      {apiResponse && (
          <Box component="section">
            <Inventory
              inventories={apiResponse}
              onQuantityChange={handleQuantityChange}
            />
          </Box>
        )}
        <Box component="section" sx={{ pt: 2 }}>
          <Products products={products} inventories={apiResponse} />
        </Box>
      </Container>
    </>
  );
}
