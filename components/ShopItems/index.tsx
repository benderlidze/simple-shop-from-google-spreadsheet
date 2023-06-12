"use client";
import { useState } from "react";
import ShopItem from "@/components/ShopItem";
import { Item } from "@/components/types";

const ShopItems = ({ data }: { data: Item[] }) => {
  const [order, setOrder] = useState<Item[]>([]);

  console.log("data", data);

  const handleAddItem = (item: Item) => {
    console.log("item", item);
    console.log("order", order);
    setOrder((prevOrder) => [...prevOrder, item]);
  };

  const handleRemoveItem = (item: Item) => {
    console.log("order", order);
    console.log("item", item);
  };

  return (
    <>
      <div className="shopping-cart">
        Order
        {order.map((d, key) => (
          <ShopItem
            data={d}
            key={key}
            handleAddItem={handleAddItem}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
      </div>
      <div>
        {data.map((d) => (
          <ShopItem
            data={d}
            key={d.id}
            handleAddItem={handleAddItem}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
      </div>
    </>
  );
};

export default ShopItems;
