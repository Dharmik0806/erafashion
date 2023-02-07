import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './component/header/Header';
import Home from './container/home/Home';
import ContectUs from './container/page/contectUs/ContectUs';
import Signin from './container/auth/Signin';
import AboutUs from './container/page/aboutUs/AboutUs';
import Footer from './component/footer/Footer';
import PublicRoute from './Routes/PublicRoute';
import Men from './container/men/Men';
import Women from './container/women/Women';
import Kid from './container/kid/Kid';
import MedicineCity from './Admin/container/MedicintCity';
import DoctoreCity from './Admin/container/MenEra';
import LayoutEra from './Admin/component/layout/LayoutEra';
import MenEra from './Admin/container/MenEra';

function App() {
  return (
    <>
      {/* <Header />
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/men" component={Men} />
        <PublicRoute exact path="/women" component={Women} />
        <PublicRoute exact path="/kid" component={Kid} />
        <PublicRoute exact path="/ContectUs" component={ContectUs} />
        <PublicRoute exact path="/Signin" restricted={true} component={Signin} />
        <PublicRoute exact path="/About" component={AboutUs} />
      </Switch>
      <Footer /> */}

      {/* <Header /> */}
      {/* <Home /> */}
      {/* <ContectUs /> */}
      {/* <Signin /> */}
      {/* <Footer /> */}
      {/* <About /> */}

     <LayoutEra>
        <Switch>
          {/* <Route exact path={"/Medision"} component={MedicineCity} /> */}
          <Route exact path={"/MenEra"} component={MenEra} />
          <Route exact path={"/WomenEra"} component={MenEra} />
          <Route exact path={"/KidEra"} component={MenEra} />
        </Switch>
      </LayoutEra> 
    </>
  );
}

export default App;
