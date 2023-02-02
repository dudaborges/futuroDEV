import './App.css';
import PropsExample from './components/PropsExample';
import TemplateExpressions from './components/TemplateExpressions';
import OnClick from './components/events/OnClick';
import OnChange from './components/events/OnChange';
import OnSubmit from './components/events/OnSubmit';
import OnKeyDown from './components/events/OnKeyDowm';
import OnMouseOver from './components/events/OnMouseOver';
import Counter from './components/Counter';
import RandomAdvice from './components/advice/RandomAdvice';
import SearchAdvice from './components/advice/SearchAdvice';
import Colors from './components/useState/Colors';

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
