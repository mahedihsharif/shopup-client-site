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
  Redirect
} from "react-router-dom";
import Pay from './pages/Pay/Pay';
import Success from './pages/Success/Success';

function App() {
  const user=true;
  return (
    <>
    
       <Router>
         <Switch>
         <Route path="/home" >
           <Home/>
         </Route>
         <Route  exact path="/" >
           <Home/>
         </Route>
         <Route path="/products/:category">
         <ProductList/>
         </Route>
         <Route path="/product/:id">
         <SingleProduct/>
         </Route>
         <Route path="/register">
         {user ? <Redirect to="/" /> : <Register/>}
         </Route>
         <Route path="/login">
         {user ? <Redirect to="/" /> : <Login/>}
         </Route>
         <Route path="/cart">
         <Cart/>
         </Route>
           <Route path="/pay">
             <Pay/>
           </Route>
           <Route path="/success">
             <Success/>
           </Route>
         </Switch>
       </Router>
    </>
  );
}

export default App;
