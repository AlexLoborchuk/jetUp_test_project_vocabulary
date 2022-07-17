import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { VocabularyPage } from "./page/vocabulary_page/vocabulary_page";
import { AddNewWordPage } from "./page/add_new_word_page/add_new_word_page";
import { Navigation } from "./page/components/navigation";
import { TestingNewWordPage } from "./page/testing_new word_page/testing_new_word_page";

import "./#source/scss/css/style.css";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Navigate to="/main" />} />
          <Route path="/main" element={<VocabularyPage />} />
          <Route path="/test" element={<TestingNewWordPage />} />
          <Route path="/add_words" element={<AddNewWordPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
