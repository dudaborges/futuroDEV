import './App.css';
import PropsExample from './components/PropsExample';
import TemplateExpressions from './components/TemplateExpressions';
import OnClick from './components/OnClick';
import OnChange from './components/OnChange';
import OnSubmit from './components/OnSubmit';
import OnKeyDown from './components/OnKeyDowm';
import OnMouseOver from './components/OnMouseOver';
import Counter from './components/Counter';
import RandomAdvice from './components/advice/RandomAdvice';
import SearchAdvice from './components/advice/SearchAdvice';
import Colors from './components/Colors';

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
      <Counter />
      <RandomAdvice />
      <SearchAdvice />
      <Colors />
    </div>
  );
}

export default App;
