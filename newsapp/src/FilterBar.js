import "./styles.css";

export default function FilterBar({ category, onCategoryChange, onRefresh }) {
  return (
    <div className="FilterBar">
      <select value={category} onChange={onCategoryChange}>
        <option value="">All</option>
        <option value="technology">Technology</option>
        <option value="sports">Sports</option>
        <option value="business">Business</option>
        <option value="entertainment">Entertainment</option>
        <option value="world">World</option>
        <option value="science">Science</option>
        <option value="health">Health</option>
      </select>

      <button onClick={onRefresh}>Refresh</button>
    </div>
  );
}
