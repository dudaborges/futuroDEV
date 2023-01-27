import './App.css';
import PropsExample from './components/PropsExample';
import TemplateExpressions from './components/TemplateExpressions';

function App() {
  const name = "Maria Eduarda"
  const idade = 17
  const cidade = "Florianópolis"
  return (
    <div>
      <TemplateExpressions></TemplateExpressions>
      <PropsExample name={name} idade={idade} cidade={cidade}/>
    </div>
  );
}

export default App;
