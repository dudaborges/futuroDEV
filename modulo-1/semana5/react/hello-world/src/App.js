import './App.css';
import PropsExample from './components/PropsExample';
import TemplateExpressions from './components/TemplateExpressions';
import OnClick from './components/OnClick';

function App() {
  const name = "Julia"
  return (
    <div>
      <TemplateExpressions></TemplateExpressions>
      <PropsExample name={name} />
      <OnClick />
    </div>
  );
}

export default App;
