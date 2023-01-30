import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <>
      <Navbar/>
      <News pageSize={15} country='in' category='sports'/>
    <div className="App">
    </div>
    </>
  );
}

export default App;
