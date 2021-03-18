import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import refreshIcon from "./assets/refresh.svg";
import arrowIcon from "./assets/right-arrow.svg";
const RandomQt = () => {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://quote-garden.herokuapp.com/api/v3/quotes/random";

  async function fetchQuote() {
    setLoading(true);
    try {
      await axios.get(url).then((res) => {
        setQuote(res.data.data);
        setLoading(false);
      });
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, [url]);

  const refresh = () => {
    fetchQuote();
  };
  return (
    <>
      <header>
        <button onClick={refresh}>
          random <img src={refreshIcon} alt="random" />
        </button>
      </header>
      <div className="wrapper">
        {quote.length > 0 && (
          <div className="randomQt">
            <h3 className={`${loading ? "qtText loading" : "qtText done"}`}>
              {quote[0].quoteText}
            </h3>
            <Link
              to={`/${quote[0].quoteAuthor}`}
              className={`${loading ? "qtInfo loading" : "qtInfo done"}`}
            >
              <h4>{quote[0].quoteAuthor}</h4>
              <span>{quote[0].quoteGenre}</span>
              <img src={arrowIcon} alt="arrow" />
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default RandomQt;
