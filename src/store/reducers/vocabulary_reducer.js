const NEW_WORD = "VOCABULARY/ADD_NEW_WORD";
const POINTS = "TESTING_NEW_WORD/POINTS";
// const TESTING_WORD = "TESTING_NEW_WORD/TESTING_WORD";

let initialState = {
  testPoints: 0,
  //testing_words: [],
  words: [
    // {
    //   id: 1,
    //   word: "собака",
    //   translate_word: "dog",
    // },
    // {
    //   id: 2,
    //   word: "богатий",
    //   translate_word: "rich",
    // },
    // {
    //   id: 3,
    //   word: "малий",
    //   translate_word: "small",
    // },
    // {
    //   id: 4,
    //   word: "дитина",
    //   translate_word: "child",
    // },
    // {
    //   id: 5,
    //   word: "чоловік",
    //   translate_word: "man",
    // },
    // {
    //   id: 6,
    //   word: "жінка",
    //   translate_word: "woman",
    // },
    // {
    //   id: 7,
    //   word: "дурний",
    //   translate_word: "stupid",
    // },
    // {
    //   id: 8,
    //   word: "кофе",
    //   translate_word: "coffe",
    // },
    // {
    //   id: 9,
    //   word: "чай",
    //   translate_word: "tea",
    // },
    // {
    //   id: 10,
    //   word: "гра",
    //   translate_word: "game",
    // },
    // {
    //   id: 11,
    //   word: "користувач",
    //   translate_word: "user",
    // },
  ],
};
const vocabularyReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_WORD:
      return {
        ...state,
        words: [...state.words, action.word],
      };
    case POINTS:
      return { ...state, testPoints: state.testPoints + action.point };
    // case TESTING_WORD:
    //   return {
    //     ...state,
    //     testing_words: state.words.filter(
    //       (word) => word.id >= state.words.length - 9
    //     ),
    //   };
    default:
      return state;
  }
};

export default vocabularyReducer;

export const AddNewWord = (new_word) => ({
  type: NEW_WORD,
  word: new_word,
});
export const UpdateTestPoints = (point) => ({
  type: POINTS,
  point: point,
});

// export const TestingWord = () => ({
//   type: TESTING_WORD,
// });
