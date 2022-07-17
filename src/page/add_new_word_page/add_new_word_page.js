import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AddNewWord } from "../../store/reducers/vocabulary_reducer";

export const AddNewWordPage = () => {
  const dispatch = useDispatch();
  const userCount = useSelector((state) => state.vocabulary.words.length);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let updateData = Object.assign({ id: userCount + 1 }, data);
    dispatch(AddNewWord(updateData));
    reset();
  };

  return (
    <div className="vocabularyPage ">
      <form onSubmit={handleSubmit(onSubmit)} className="formBlock">
        <div>
          <input
            {...register("word", { required: true })}
            className="formBlock__input"
            placeholder="Введіть слово українською"
          />
          {errors.word && (
            <p className="formBlock__error">Будь-ласка введіть слово</p>
          )}
        </div>
        <div>
          <input
            {...register("translate_word", { required: true })}
            className="formBlock__input"
            placeholder="Введіть англійський переклад слова"
          />
          {errors.translate_word && (
            <p className="formBlock__error">Будь-ласка введіть слово</p>
          )}
        </div>

        <div>
          <input
            type="submit"
            className="formBlock__submit submit"
            value="Відправити"
          />
        </div>
      </form>
    </div>
  );
};
