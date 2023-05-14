import logo from './logo.svg';
import './App.css';

function handleSubmit(e) {

e.preventDefault();

const form = e.target;
const formData = new FormData(form);

fetch('/some-api', { method: form.method, body: formData });

const formJson = Object.fromEntries(formData.entries());
console.log(formJson);

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>React Quiz App</h2>
        <p>Question 1. What is 1 + 1?</p>
        <form method="post" onSubmit={handleSubmit}>
            <label>
              <input type="radio" name="answer_option_question1" value="option1" />
              1
            </label>
            <label>
              <input type="radio" name="answer_option_question1" value="option2" defaultChecked={true} />
              2
            </label>
            <hr />
        <button type="submit">Submit answer</button>
        </form>

      </header>

      
    </div>
    
  );
}

export default App;
