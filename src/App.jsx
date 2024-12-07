import Child from "./components/Child";

function App() {
  const text = "variable desde el padre";
  const person = {
    sex: "hombre",
    age: 30,
  };
  return (
    <div>
      <h1>Props | Comunicación entre componentes Padre-Hijo</h1>
      <Child msg={text} person={person}></Child>
    </div>
  );
}

export default App;
