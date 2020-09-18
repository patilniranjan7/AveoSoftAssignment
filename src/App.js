import React from 'react';
import Header from "./Component/Header/Header"
import ProductCategory from "./Pages/ProductCategory/ProductCategory"
import Footer from "./Component/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductInfo from "./Pages/ProductInfo/ProductInfo"
       
function App() {

  return (
  <>
      <Header />
      <Router>
        <Switch>
            <Route exact path="/:id" component={ProductInfo} />
            
 
            <Route exact path="/">
              <ProductCategory/>
            </Route>
        </Switch>
        
      </Router>
      
      <Footer/>
  </>
  );
}

export default App;
