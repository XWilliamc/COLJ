import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import Contactanos from './pages/Contactanos/Contactanos';
import Formulario from './pages/Registrate/Formulario';

import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';



function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contactanos' component={Contactanos} />
        <Route path='/FormSignup' component={Formulario} />
        <Route path='/signUp' component={SignUp} />
        <Route exact path="/Home" component={Home}/>
</Switch>
     

      <Footer />
    </Router>
  );
}

export default App;
