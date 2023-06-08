"use client";
import { useState } from "react";
import ShopItem from "@/components/ShopItem";

const ShopItems = ({ data }: { data: string[][] }) => {
  const [order, setOrder] = useState<string[][]>([]);

  console.log("data", data);

  const handleAddItem = (item: string[]) => {
    console.log("item", item);
    console.log("order", order);
    setOrder((prevOrder) => [...prevOrder, item]);
  };

  const handleRemoveItem = (item: string[]) => {
    console.log("item", item);
  };

  return (
    <>
      <div className="shopping-cart">
        Order
        {order.map((d) => (
          <ShopItem
            data={d}
            key={d[0]}
            handleAddItem={handleAddItem}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
      </div>
      <div>
        {data.map((d) => (
          <ShopItem
            data={d}
            key={d[0]}
            handleAddItem={handleAddItem}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
      </div>
    </>
  );
};

export default ShopItems;
