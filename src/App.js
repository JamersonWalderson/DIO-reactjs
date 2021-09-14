import './App.css';

function sum(num1, num2){
  return num1 + num2;

}

function primeiroJSX(){
  return (
    <div>
      Jamerson W.
      <p>{sum(10, 20)}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      {primeiroJSX()}
    </div>
  );
}

export default App;
