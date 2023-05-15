import logo from './logo.svg';
import './App.css';

function handleSubmit(e) {

e.preventDefault();

const form = e.target;
const formData = new FormData(form);

const formJson = Object.fromEntries(formData.entries());
console.log(formJson);

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [score, setScore] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Quiz App</h1>
        <h2>Question 1. What is 1 + 1?</h2>
        {
          options: [
            {id:0, text:"1"},
            {id:1. text:"2"},
          ] 

        }
          
      </header>

      
    </div>

  );
}

export default App;

// 14 May 2023
// maybe don't need to submit for the first question
// just clicking on the question will trigger to next question?
// and then the last question will trigger the total marks overall.
// https://react.dev/learn/conditional-rendering

// update 15 May 2023
// declare question number
// declare selected answer
// declare score