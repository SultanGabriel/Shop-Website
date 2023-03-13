import { createContext, useContext } from "react";
    
export const CartContext = createContext({
  cart: []
});

export const useAuthContext = () => useContext(CartContext);