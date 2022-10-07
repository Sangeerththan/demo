import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent/FirstComponent';
import SecondComponent from './components/SecondComponent/SecondComponent';

function App() {
  const components = [<FirstComponent />, <SecondComponent />]
  return (
    <div className="App">
    {components.map(item =><li>{item}</li>)}
    </div>
  );
}

export default App;
