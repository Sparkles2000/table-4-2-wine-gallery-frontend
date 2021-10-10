import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import CustomergroupContainer from './Components/Customergroup/CustomergroupContainer';
import CustomergroupInfo from './Components/Customergroup/CustomergroupInfo';
// import BrandofwineContainer from './Components/BrandofwineContainer/BrandofwineContainer';
// import BrandofwineInfo from './Components/BrandofwineInfo/BrandofwineInfo';
// import ArtsessionContainer from './Components/ArtsessionContainer/ArtsessionContainer';
// import ArtsessionInfo from './ComponentsArtsessionInfo/ArtsessionInfo';

import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Switch>
     <Route exact path="/">
       <Home />
       </Route>
       <Route exact path="/About">
       <About />
       </Route>
       <Route exact path="/customergroups">
       <CustomergroupContainer />
       </Route>
       <Route exact path="/customergroups/:id">
       <CustomergroupInfo />
       </Route>
       {/* <Route exact path="/brandofwines">
       <BrandofwineContainer />
       </Route>
       <Route path="/brandofwines/:id">
       <BrandofwineInfo />
       </Route>
       <Route exact path="/artsessions">
       <ArtsessionContainer />
       </Route>
       <Route path="/artsessions/:id">
       <ArtsessionInfo />
       </Route>
       <Route exact path="/artpieces">
       <ArtpieceContainer />
       </Route>
       <Route path="/artpieces/:id">
       <ArtpieceInfo />
       </Route>
       <Route exact path="/winepurchases">
       <WinepurchaseContainer />
       </Route>
       <Route path="/winepurchases/:id">
       <WinepurchaseInfo />
       </Route> */}
       </Switch>
      </header> 
    </div>
   </Router>
  );
}
export default App;