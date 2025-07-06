import "./styles.css";
import { useState } from "react";
import Header from "./Header";
import FilterBar from "./FilterBar";
import NewsList from "./NewsList";

export default function App() {
  const [category, setCategory] = useState("");
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function handleRefresh() {
    setRefreshTrigger((prev) => prev + 1);
  }

  return (
    <div className="App">
      <Header />
      <div className="Container">
        <FilterBar
          category={category}
          onCategoryChange={handleCategoryChange}
          onRefresh={handleRefresh}
        />
        <NewsList category={category} refreshTrigger={refreshTrigger} />
      </div>
    </div>
  );
}
