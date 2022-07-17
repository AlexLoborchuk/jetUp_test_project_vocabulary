import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import vocabularyReducer from "./reducers/vocabulary_reducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  vocabulary: vocabularyReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer);

export const persistor = persistStore(store);
export default store;
