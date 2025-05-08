import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [myOrders, setMyOrders] = useState([]);

  const addToOrder = (item) => {
    setMyOrders((prev) =>
      prev.find((order) => order.name === item.name) ? prev : [...prev, item]
    );
  };

  const removeFromOrder = (name) => {
    setMyOrders((prev) => prev.filter((item) => item.name !== name));
  };

  return (
    <OrderContext.Provider value={{ myOrders, addToOrder, removeFromOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
