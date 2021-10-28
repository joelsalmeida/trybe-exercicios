import './App.css';

const tarefas = ['primeira', 'segunda', 'terceira'];

const Task = (value) => {
  return <li>{value}</li>;
};

function App() {
  return (
    <>
      {tarefas.map((tarefa) => {
        return Task(tarefa);
      })}
    </>
  );
}

export default App;
