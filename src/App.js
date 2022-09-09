import { useState } from "react";
import Header from "./components/Header";
import ItemList from "./components/ItemList";

const App = () => {
  const [generalStock, setGeneralStock] = useState(0);

  const onStockChange = () => {
    setGeneralStock(generalStock + 1);
  };

  return (
    <div>
      <Header productsQuantity={generalStock} />
      <ItemList onStockChange={onStockChange} />
    </div>
  );
};

export default App;
