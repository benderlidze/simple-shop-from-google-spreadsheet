import { Item } from "@/components/types";
import Image from "next/image";

interface ShopItemProps {
  data: Item;
  handleAddItem: (data: Item) => void;
  handleRemoveItem: (data: Item) => void;
  children?: React.ReactNode;
}

const ShopItem = ({
  data,
  handleAddItem,
  handleRemoveItem,
  children,
}: ShopItemProps) => {
  return (
    <tr>
      <td>
        {data.image && (
          <img
            className="item-image"
            src={data.image}
            width={100}
            height={100}
            alt={data.name}
          />
        )}
      </td>
      {/* <td className="item-uid">{data.uid}</td>
      <td className="item-name">{data.name}</td>
      <td>{data.volume}</td> */}
      <td className="item-name">
        {data.uid}
        <br />
        <b>{data.name}</b>
        <br />
        {data.volume}
      </td>
      <td>{data.priceRetail}</td>
      <td>{data.priceWhosale}</td>
      {children}
      <td>
        <div className="button" onClick={() => handleAddItem(data)}>
          +
        </div>
      </td>
      <td>
        <div className="button" onClick={() => handleRemoveItem(data)}>
          -
        </div>
      </td>
    </tr>
  );
};

export default ShopItem;
