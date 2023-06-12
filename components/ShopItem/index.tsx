import { ShopItem } from "@/components/types";

const ShopItem = ({ data, handleAddItem, handleRemoveItem }: ShopItem) => {
  return (
    <div className="inline">
      <div>{data.id}</div>
      <div>{data.uid}</div>
      <div>{data.name}</div>
      <div>{data.volume}</div>
      <div>{data.priceRetail} pln</div>
      <div>{data.priceWhosale} pln</div>
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
