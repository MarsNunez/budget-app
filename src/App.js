import Question from './components/Question';

function App() {
  return (
    <div>
      <div class="container">
        <header>
          <h1>React Budget</h1>
          <div className="contenido-principal contenido">
            <Question />
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;

