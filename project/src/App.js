
import AllRoutes from './AllRoutes/AllRoutes';
import GoToTop from './AllRoutes/GoToTop';
import GeoLocation from './AllRoutes/UserLocation';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllRoutes/>
     {/* <Footer/> */}
     <GoToTop />
    </div>
  );
}

export default App;
