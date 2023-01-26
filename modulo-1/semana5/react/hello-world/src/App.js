import './App.css';
import PropsExample from './components/PropsExample';
import TemplateExpressions from './components/TemplateExpressions';

function App() {
  const name = "Julia"
  return (
    <div>
      <TemplateExpressions></TemplateExpressions>
      <PropsExample name={name}/>
    </div>
  );
}

export default App;
