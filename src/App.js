import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from './pages/About/About';
import Appointment from './pages/Appointment/Appointment';
import ContactUs from './pages/ContactUs/ContactUs';
import AddDoctor from './pages/Dashboard/AddDoctor';
import Dashboard from './pages/Dashboard/Dashboard';
import ManageDoctor from './pages/Dashboard/ManageDoctor';
import MyAppointments from './pages/Dashboard/MyAppointments';
import MyHistory from './pages/Dashboard/MyHistory';
import MyReveiws from './pages/Dashboard/MyReveiws';
import Payment from './pages/Dashboard/Payment';
import Users from './pages/Dashboard/Users';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAdmin from './pages/Login/RequireAdmin';
import RequireAuth from './pages/Login/RequireAuth';
import SingUp from './pages/Login/SingUp';
import Reviews from './pages/Reviews/Reviews';
import Header from './pages/Shared/Header';
import Loading from './pages/Shared/Loading/Loading';
import ScrollToTop from "./ScrollToTop"

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, [1000])
  }, [])


  return (loading ? <Loading loadingStatus="true"></Loading> :
    <div>
      <ScrollToTop></ScrollToTop>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Navigate to="/home"></Navigate>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<RequireAuth><Appointment></Appointment></RequireAuth>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='reveiw' element={<MyReveiws></MyReveiws>}></Route>
          <Route path='myHistory' element={<MyHistory></MyHistory>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='allUsers' element={<RequireAdmin><Users /></RequireAdmin>}></Route>
          <Route path='addDoctor' element={<RequireAdmin><AddDoctor /></RequireAdmin>}></Route>
          <Route path='manageDoctor' element={<RequireAdmin><ManageDoctor /></RequireAdmin>}></Route>
        </Route>
        <Route path='/about-us' element={<RequireAuth><About></About></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='/singUp' element={<SingUp></SingUp>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
