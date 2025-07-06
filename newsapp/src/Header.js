import "./styles.css";

export default function Header() {
  const newsTitle = "ChrisFeed";

  return (
    <div className="Header">
      <h2>{newsTitle}</h2>
      <p className="Tagline">Your daily dose of curated news</p>
    </div>
  );
}
