import LogoIcon from './components/LogoIcon'
import Welcome from './components/Welcome';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <LogoIcon />
        <h1>Dev Labs</h1>
      </header>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '10em'
      }}>
        <Welcome />
      </div>
    </div>
  );
}

export default App;
