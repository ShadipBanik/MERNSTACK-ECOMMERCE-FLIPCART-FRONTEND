import './App.css';
import React from 'react';
import {Route,Switch} from 'react-router-dom'
import Home from './containers/home';
import 'react-toastify/dist/ReactToastify.css';
import Singin from './containers/signin';
import Singup from './containers/signup';
import PrivateRoute from './middelwares/privateRoute';
import Products from './containers/products';
import Orders from './containers/orders';
import category from './containers/category';
function App() {
  return (
    <div className="App">

         <Switch>
             <PrivateRoute  path="/" exact component={Home}/>
             <PrivateRoute  path="/products"  component={Products}/>
             <PrivateRoute  path="/orders" exact component={Orders}/>
            {/* <Route path="/" exact component={Home}></Route> */}
            <Route path="/signIn"  component={Singin}></Route>
            <Route path="/signUp"  component={Singup}></Route>
            <Route path="/category"  component={category}></Route>
         </Switch>
    </div>
  );
}

export default App;
