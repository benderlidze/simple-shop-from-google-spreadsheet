export interface Item {
  id: number;
  uid: string;
  image: string;
  name: string;
  volume: string;
  priceWhosale: string;
  priceRetail: string;
}

export interface ShopItem {
  data: Item;
  handleAddItem: (data: Item) => void;
  handleRemoveItem: (data: Item) => void;
}
