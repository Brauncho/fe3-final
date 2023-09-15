import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppProvider } from './Components/utils/AppContext';
import Home from './Routes/Home';
import DentistDetail from './Routes/DentistDetail';
import Contacto from './Routes/Contacto';
import Favorites from './Routes/Favorites';
import Navbar from './Routes/Navbar';
import Footer from './Routes/Footer';

function App() {
  return (
    <Router>
      <AppProvider>
        <Navbar />
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Dentist/:id" component={DentistDetail} />
          <Route path="/Contacto" component={Contacto} />
          <Route path="/Favorites" component={Favorites} />
        </Switch>
        <Footer />
      </AppProvider>
    </Router>
  );
}

export default App;