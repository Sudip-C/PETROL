
import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
