import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import refreshIcon from "./assets/refresh.svg";
const AllQts = () => {
  const { quotes: author } = useParams();
  const history = useHistory();
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = `https://quote-garden.herokuapp.com/api/v3/quotes/?author=${author}`;

  useEffect(() => {
    const fetchQuote = async () => {
      setLoading(false);
      try {
        await axios.get(url).then((res) => {
          setQuotes(res.data.data);
          setLoading(false);
        });
      } catch (err) {
        setLoading(false);
        console.log(err.message);
      }
    };
    fetchQuote();
  }, [url]);

  const refresh = () => {
    history.push("/");
  };

  return (
    <>
      <header>
        <button onClick={refresh}>
          random <img src={refreshIcon} alt="random" />
        </button>
      </header>
      <div className={`${loading ? "loading wrapper" : "wrapper"}`}>
        <h4 className="autherName">{author}</h4>
        {quotes.map((qt) => {
          return (
            <div key={qt._id} className="randomQt">
              <div
                className={`${
                  loading ? "qtText list loading" : "qtText list done"
                }`}
              >
                {qt.quoteText}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllQts;
