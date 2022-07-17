import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const wordsCounter = useSelector((state) => state.vocabulary.words.length);

  return (
    <nav className="navigationBlock">
      <ul>
        <li className="navigationBlock__list list">
          <Link to="/main" className="navigationBlock__text">
            До списку слів
          </Link>
        </li>
        <li className="navigationBlock__list list">
          <Link to="/add_words" className="navigationBlock__text">
            Добавити нове слово
          </Link>
        </li>
        <li className="navigationBlock__list list">
          {wordsCounter >= 10 ? (
            <Link to="/test" className="navigationBlock__text">
              Повторити слова
            </Link>
          ) : (
            <Link
              to="/#"
              onClick={() => {
                alert("Для проходження тесту потрібно щонайменше 10 слів");
              }}
              className="navigationBlock__text"
            >
              Повторити слова
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};
