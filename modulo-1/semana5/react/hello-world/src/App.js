import './App.css';
import PropsExample from './components/PropsExample';
import TemplateExpressions from './components/TemplateExpressions';
import OnClick from './components/OnClick';

function App() {
  const name = "Maria Eduarda"
  const idade = 17
  const cidade = "Florianópolis"
  return (
    <div>
      <TemplateExpressions></TemplateExpressions>
      <PropsExample name={name}/>
    </div>
  );
}

export default App;
