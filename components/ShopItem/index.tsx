import { Item } from "@/components/types";

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
    <div className="inline">
      <div>{data.id}</div>
      <div>{data.uid}</div>
      <div>{data.name}</div>
      <div>{data.volume}</div>
      <div>{data.priceRetail} pln</div>
      <div>{data.priceWhosale} pln</div>
      {children}
      <div className="button" onClick={() => handleAddItem(data)}>
        +
      </div>
      <div className="button" onClick={() => handleRemoveItem(data)}>
        -
      </div>
    </div>
  );
};

export default ShopItem;
