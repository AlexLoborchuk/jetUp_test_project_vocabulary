import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { UpdateTestPoints } from "../../store/reducers/vocabulary_reducer";

export const TestingNewWordPage = () => {
  const dispatch = useDispatch();
  const words = useSelector((state) => state.vocabulary.words);
  const point = useSelector((state) => state.vocabulary.testPoints);
  const testingWord = words.filter((word) => word.id >= words.length - 9);

  let [count, setCount] = useState(0);
  let [answerNumber, setAnswerNumber] = useState(0);
  let [randomNumbers, setRandomNumbers] = useState([0, 1, 2, 3]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (testingWord[randomNumbers[answerNumber]].word === data.translate_word) {
      dispatch(UpdateTestPoints(100 / testingWord.length));
      console.log(testingWord[answerNumber].word);
    }
    setCount((count) => count + 1);
    setRandomNumbers([]);
    reset();
    for (let i = 0; i < 4; i++) {
      let number = Math.floor(
        Math.random() * (testingWord.length - testingWord[0].id) +
          testingWord[0].id
      );
      setRandomNumbers((randomNumbers) => [...randomNumbers, number]);
    }
    setAnswerNumber(Math.floor(Math.random() * randomNumbers.length));
  };
  return (
    <div className="vocabularyPage">
      {randomNumbers ? (
        <div>
          {count < 10 ? (
            <form onSubmit={handleSubmit(onSubmit)} className="formBlockTest">
              <div className="formBlockTest__title">
                Як перекладається слово{" "}
                {testingWord[randomNumbers[answerNumber]].word}?
              </div>
              <div>
                <input
                  {...register("translate_word", { required: true })}
                  className="formBlockTest__radio"
                  type="radio"
                  name="translate_word"
                  value={testingWord[randomNumbers[0]].word}
                />
                <span className="formBlockTest__text">
                  {testingWord[randomNumbers[0]].translate_word}
                </span>
              </div>
              <div>
                <input
                  {...register("translate_word", { required: true })}
                  className="formBlockTest__radio"
                  type="radio"
                  name="translate_word"
                  value={testingWord[randomNumbers[1]].word}
                />
                <span className="formBlockTest__text">
                  {testingWord[randomNumbers[1]].translate_word}
                </span>
              </div>
              <div>
                <input
                  {...register("translate_word", { required: true })}
                  className="formBlockTest__radio"
                  type="radio"
                  name="translate_word"
                  value={testingWord[randomNumbers[2]].word}
                />
                <span className="formBlockTest__text">
                  {testingWord[randomNumbers[2]].translate_word}
                </span>
              </div>
              <div>
                <input
                  {...register("translate_word", { required: true })}
                  className="formBlockTest__radio"
                  type="radio"
                  name="translate_word"
                  value={testingWord[randomNumbers[3]].word}
                />
                <span className="formBlockTest__text">
                  {testingWord[randomNumbers[3]].translate_word}
                </span>
              </div>

              <div>
                <input
                  type="submit"
                  className="formBlock__submit submitButton"
                  value="Відповісти"
                />
              </div>
              <div className="formBlock__error submitButton">
                {errors.translate_word?.type === "required" &&
                  "Виберіть варіант відповіді!"}
              </div>
            </form>
          ) : (
            <div className="formBlockTest__title bodyText">
              Твій результат становить {point} балів
            </div>
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
