import {useQuestions} from "./hooks/useQuestions";

function App() {

    const {questions, getQuestion, addQuestion} = useQuestions()

  return (
    <div className="App">
      <header className="App-header">
            questions={questions}
      </header>
    </div>
  );
}

export default App;
