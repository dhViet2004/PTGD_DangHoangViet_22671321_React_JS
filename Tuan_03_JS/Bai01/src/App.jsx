import Header from './components/header';
import Filter from './components/filters';
import Center from './components/center';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Header></Header>
      <Filter></Filter>
      <Center></Center>
      <Footer></Footer>
    </div>
  );
}

export default App;