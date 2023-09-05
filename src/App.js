import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import QuantityPicker from './components/quantityPicker';
import Catalog from './pages/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Catalog/>
      <Footer/>
    </div>
  );
}

export default App;
