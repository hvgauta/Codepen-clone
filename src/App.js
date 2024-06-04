import './App.css';
import Home from './components/Home';
import DataProvider from './Context/DataProvider';
//import Header from './components/Header';
//import Code from './components/Code';

function App() {
  return (
    
      <DataProvider>
      <Home/>
      </DataProvider>
    

      
  );
}

export default App;
