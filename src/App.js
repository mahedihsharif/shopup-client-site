import './App.css';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ProductList from './pages/ProductList/ProductList';
import Register from './pages/Register/Register';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Pay from './pages/Pay/Pay';
import Success from './pages/Success/Success';

function App() {
  return (
    <div>
       {/* <Home/> */}
       {/* <ProductList/> */}
       {/* <SingleProduct/> */}
       {/* <Register/> */}
       {/* <Login/> */}
       {/* <Cart/> */}

       <Router>
         <Switch>
           <Route path="/pay">
             <Pay/>
           </Route>
           <Route path="/success">
             <Success/>
           </Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
