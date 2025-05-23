import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { FormProvider } from "./context/FormContext";

import IntroPage from "./pages/IntroPage";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import QuestionPage from "./pages/QuestionPage";
import SummaryPage from "./pages/SummaryPage";

function App() {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/personal" element={<PersonalInfoPage />} />
          <Route path="/question/:step" element={<QuestionPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </Router>
    </FormProvider>
  );
}

export default App;
