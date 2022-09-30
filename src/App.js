import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';
import GetServices from './Pages/GetServices/GetServices';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login';
import MyTour from './Pages/MyTour/MyTour';
// import AddNewTour from './Pages/AddNewTour/AddNewTour';
// import ManageTours from './Pages/ManageTours/ManageTours'
// import ManageBooking from './Pages/ManageBooking/ManageBooking';
import Services from './Pages/Services/Services';
import Admin from './Pages/Admin/Admin';


function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/tours'>
              <Services className="my-5"></Services>
            </Route>
            <PrivateRoute path='/admin'>
              <Admin></Admin>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/getservices/:id'>
              <GetServices></GetServices>
            </PrivateRoute>
            <PrivateRoute path='/myTour'>
              <MyTour></MyTour>
            </PrivateRoute>
            {/* <PrivateRoute path='/addNewTour'>
              <AddNewTour></AddNewTour>
            </PrivateRoute>
            <PrivateRoute path='/manageTours'>
              <ManageTours></ManageTours>
            </PrivateRoute>
            <PrivateRoute path='/manageBooking'>
              <ManageBooking></ManageBooking>
            </PrivateRoute> */}
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
