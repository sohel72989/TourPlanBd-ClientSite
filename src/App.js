
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
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>

            <PrivateRoute path="/myBooking">
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute path="/packages/:id">
              <PackageDetails></PackageDetails>
            </PrivateRoute>
            <PrivateRoute path="/package/updatePackage/:id">
              <UpadatePackage></UpadatePackage>
            </PrivateRoute>

            <PrivateRoute path="/manageAllPackage">
              <ManageAllPackage></ManageAllPackage>
            </PrivateRoute>
            <PrivateRoute path="/addNewPackage">
              <AddPackage></AddPackage>
            </PrivateRoute>
            <PrivateRoute exact path="/home/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/packages">
              <Packages></Packages>
            </PrivateRoute>
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
      </AuthProvider>
    </div>
  );
}

export default App;
