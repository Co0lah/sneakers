import { Link } from "react-router-dom";
import data from "../service/data.json";

const Accueil = () => {
  const articleId = 1;

  return (
    <div className="card-container">
      {data.map((article, index) => (
        <div className="card" key={index}>
          <p>
            <Link
              to={{
                pathname: `/article/${articleId}`,
              }}
            >
              <p>{article.picture.pic1}</p>
            </Link>
          </p>
          <p>{article.name}</p>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Accueil;
