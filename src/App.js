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

function App() {
  return (
    <>
      <Header />
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/men" component={Men} />
        <PublicRoute exact path="/women" component={Women} />
        <PublicRoute exact path="/kid" component={Kid} />
        <PublicRoute exact path="/ContectUs" component={ContectUs} />
        <PublicRoute exact path="/Signin" restricted={true} component={Signin} />
        <PublicRoute exact path="/About" component={AboutUs} />
      </Switch>
      <Footer />

      {/* <Header /> */}
      {/* <Home /> */}
      {/* <ContectUs /> */}
      {/* <Signin /> */}
      {/* <Footer /> */}
      {/* <About /> */}
    </>
  );
}

export default App;
