import './App.css';
import PropsExample from './components/PropsExample';
import TemplateExpressions from './components/TemplateExpressions';
import OnClick from './components/OnClick';
import OnChange from './components/OnChange';
import OnSubmit from './components/OnSubmit';
import OnKeyDown from './components/OnKeyDowm';
import OnMouseOver from './components/OnMouseOver';

function App() {
  const name = "Maria Eduarda"
  const idade = 17
  const cidade = "Florianópolis"
  return (
    <div>
      <TemplateExpressions></TemplateExpressions>
      <PropsExample name={name} idade={idade} cidade={cidade}/>
      <OnClick />
      <OnChange />
      <OnSubmit />
      <OnKeyDown />
      <OnMouseOver />
    </div>
  );
}

export default App;
