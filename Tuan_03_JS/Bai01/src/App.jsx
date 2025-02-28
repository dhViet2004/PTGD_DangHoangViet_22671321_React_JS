import Header from './components/header';
import Filter from './components/filters';
import Center from './components/center';
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Header />
      <Filter></Filter>
      <Center></Center>
    </div>
  );
}

export default App;