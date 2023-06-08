interface ShopItem {
  data: string[];
  handleAddItem: (data: string[]) => void;
  handleRemoveItem: (data: string[]) => void;
}

const ShopItem = ({ data, handleAddItem, handleRemoveItem }: ShopItem) => {
  return (
    <div className="inline">
      <div>{data[1]}</div>
      <div>{data[2]}</div>
      <div>{data[3]}</div>
      <div>{data[4]}</div>
      <div>{data[5]}</div>
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
