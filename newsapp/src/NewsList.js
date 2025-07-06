import "./styles.css";
import { useState, useEffect } from "react";

export default function NewsList({ query, category, refreshTrigger }) {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let url = `https://gnews.io/api/v4/top-headlines?token=fbffc9c7721682e05a57c595424ff8c7&lang=en&max=10`;

        if (category) {
          url += `&topic=${category}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch articles..");
        }
        const data = await response.json();
        //checking to see if it got articles
        const safeArticles = data.articles || [];
        setArticle(safeArticles);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, [category, refreshTrigger]);

  return (
    <div>
      <h2 className="NewsTitle">Latest News</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        {article.map((article, index) => (
          <div className="Card" key={index} style={{ marginBottom: "2rem" }}>
            <h3>{article.title}</h3>
            {article.image && (
              <img
                src={article.image}
                alt={article.title}
                style={{
                  width: "80%",
                  maxWidth: "600px",
                  borderRadius: "8px",
                }}
              />
            )}
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
