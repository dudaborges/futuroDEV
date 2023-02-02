import './App.css';
import Counter from './components/Counter';
import Events from './components/Events';

function App() {
  const teste = 'teste'

  return (
    <>
    <Events teste={teste} />
    <Counter />
    </>
  );
}

export default App;
