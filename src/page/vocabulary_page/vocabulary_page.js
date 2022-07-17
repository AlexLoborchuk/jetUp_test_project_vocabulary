import { useSelector } from "react-redux";

export const VocabularyPage = () => {
  const vocabulary = useSelector((state) => state.vocabulary.words);

  let words = vocabulary.map((word) => {
    return (
      <div key={word.id} className="vocabularyBlock">
        <div className="vocabularyBlock__text text">{word.word}</div>
        <div className="vocabularyBlock__border"></div>
        <div className="vocabularyBlock__text text">{word.translate_word}</div>
      </div>
    );
  });

  return (
    <div className="vocabularyPage">
      <h1 className="vocabularyPage__title title">Hello user</h1>
      <div className="vocabularyPage__subtitle subtitle">Welcome Back!</div>
      {vocabulary.length === 0 ? (
        <div className="vocabularyPage__title bodyText">Список пустий</div>
      ) : (
        words
      )}
    </div>
  );
};
