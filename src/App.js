import './App.css';
import '../node_modules/bulma/css/bulma.min.css'
import TimerComponent from './components/TimerComponent';

const App = () => {
  return (
    <div className="App">
      <TimerComponent />
      <TimerComponent />
      <TimerComponent />
    </div>
  );
}

export default App;
