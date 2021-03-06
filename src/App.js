import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Header from './component/Share/Header';
import About from './component/About/About';
import Appointment from './component/Appointment/Appointment';
import Contact from './component/Contact/Contact';
import LogIn from './component/LogIn/LogIn';
import Register from './component/Register/Register';
import RequireAutrh from './component/LogIn/RequireAutrh';
import { ToastContainer } from 'react-toastify';
import Dashboard from './component/Dashboard/Dashboard';
import MyAppointment from './component/Dashboard/MyAppointment';
import MyReview from './component/Dashboard/MyReview';
import MyHistry from './component/Dashboard/MyHistry';
import AllUsers from './component/Dashboard/AllUsers';




function App() {
  return (
    <div className="App ">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='appointment' element={
            <RequireAutrh>
            <Appointment></Appointment>
            </RequireAutrh>
        }
        ></Route>
        <Route path='dashboard' element={
            <RequireAutrh>
            <Dashboard />
            </RequireAutrh>
        } >
        <Route index element={<MyAppointment></MyAppointment>}></Route>
        <Route path='review' element={<MyReview></MyReview>}></Route>
        <Route path='histry' element={<MyHistry></MyHistry>}></Route>
        <Route path='all-users' element={<AllUsers></AllUsers>}></Route>
        </Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='log-in' element={<LogIn></LogIn>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        
        {/* <Route path='/requireAuth' element={<RequireAutrh></RequireAutrh>}></Route> */}        
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
