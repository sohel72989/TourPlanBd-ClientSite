
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './component/AboutUs/AboutUs';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Registration from './component/Registratration/Registration';
import NotFound from './component/NotFound/NotFound';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';
// import AuthProvider from './context/AuthProvider';
// import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Packages from './component/Package/Packages';
import PackageDetails from './component/Package/PackageDetails';
import Services from './component/Home/Services';
import AddPackage from './component/AddPackage/AddPackage';
import ManageAllPackage from './component/ManageAllPackage/ManageAllPackage';
import UpadatePackage from './component/UpdatePackage/UpadatePackage';
import MyBooking from './component/MyBooking/MyBooking';
import Booking from './component/MyBooking/Booking';

function App() {
  return (
    <div className="">
      {/* <AuthProvider> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/booking/:id">
            <Booking></Booking>
          </Route>

          <Route path="/myBooking">
            <MyBooking></MyBooking>
          </Route>
          <Route path="/packages/:id">
            <PackageDetails></PackageDetails>
          </Route>
          <Route path="/package/updatePackage/:id">
            <UpadatePackage></UpadatePackage>
          </Route>

          <Route path="/manageAllPackage">
            <ManageAllPackage></ManageAllPackage>
          </Route>
          <Route path="/addNewPackage">
            <AddPackage></AddPackage>
          </Route>
          <Route exact path="/home/:id">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route exact path="/packages">
            <Packages></Packages>
          </Route>
          <Route exact path="/about-us">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/registration">
            <Registration></Registration>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
