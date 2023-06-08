import styles from "./page.module.css";
import * as d3 from "d3";
import ShopItems from "@/components/ShopItems";

export default async function Home() {
  async function addItem() {
    "use server";
    const text = await d3.text(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTBqUuhmVzFJiktoSxOHu12pMo74Yk_2bipIPMgOzi4_nk7M7eBCzR-teHum2v54w/pub?output=csv"
    );
    const data = d3
      .csvParseRows(text)
      // .filter((d) => d[3] !== "")
      .map((d, key) => {
        d[0] = key + "";
        return d;
      });

    return data.splice(8);
  }
  const data = await addItem();

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <ShopItems data={data} />
      </div>
    </main>
  );
}

function hashCode(str: string) {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    let chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}
