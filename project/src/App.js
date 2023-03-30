import { Box } from '@chakra-ui/react';
import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import AddressPage from './component/CartComponent/AddressPage';
import Navbar from './component/Navbar';


import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';

function App() {
  return (
    <Box className="App" position={'relative'}>
         <Navbar />
         <AllRoutes />
    </Box>
  );
}

export default App;
