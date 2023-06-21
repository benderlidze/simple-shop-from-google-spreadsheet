"use client";
import { useState } from "react";
import ShopItem from "@/components/ShopItem";
import { Item, Order } from "@/components/types";

const ShopItems = ({ data }: { data: Item[] }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  console.log("data", data);

  const handleAddItem = (item: Item) => {
    console.log("item", item);
    console.log("order", orders);
    const order = orders.find((o) => {
      return o.item.id === item.id;
    });
    if (order) {
      order.quantity++;
      setOrders([...orders]);
    } else {
      setOrders((prevOrder) => [...prevOrder, { item, quantity: 1 }]);
    }
  };

  const handleRemoveItem = (item: Item) => {
    const order = orders.find((o) => {
      return o.item.id === item.id;
    });
    if (order && order.quantity >= 1) {
      order.quantity--;
      setOrders([...orders]);
    } else {
      setOrders((prevOrder) => [
        ...prevOrder.filter((o) => o.item.id === item.id),
      ]);
    }
  };

  return (
    <>
      <div className="shopping-cart">
        Order
        <div className="shopping-cart-order-item">
          <table>
            <tbody>
              {orders.map((d, key) => (
                <>
                  {d.quantity > 0 && (
                    <ShopItem
                      data={d.item}
                      key={key}
                      handleAddItem={handleAddItem}
                      handleRemoveItem={handleRemoveItem}
                    >
                      <td>{d.quantity}</td>
                    </ShopItem>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr className="red">
              <th className="item-uid">image</th>
              <th className="item-uid">UID</th>
              <th className="item-name">Name</th>
              <th>Objętość</th>
              <th>Cena (hurtowa) pln</th>
              <th>Cena (detal) pln</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <ShopItem
                data={d}
                key={d.id}
                handleAddItem={handleAddItem}
                handleRemoveItem={handleRemoveItem}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShopItems;
