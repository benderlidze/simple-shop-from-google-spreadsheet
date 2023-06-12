export interface Item {
  id: number;
  uid: string;
  image: string;
  name: string;
  volume: string;
  priceWhosale: string;
  priceRetail: string;
}

export interface Order {
  item: Item;
  quantity: number;
}
