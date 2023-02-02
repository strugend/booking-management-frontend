import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';

import Register from './Component/Register/Register';
import Nav from './Component/nav/Nav'
import Slidebar from './Component/SideBar/Sidebar';
import Login from './Component/Register/Login';
import ResetPassword from './Component/Register/ResetPassword';
import NewPassword from './Component/Register/NewPassword';
import Footer from './Component/Footer/Footer';

import Logout from './Component/Register/Logout';


const App =()=>{
  return (
<>
<BrowserRouter>
  <Nav/>
  <Slidebar/>
  <Routes>
<Route path='/login' element={<Login/>}></Route>
<Route path='/reset-Password' element={<ResetPassword/>}></Route>
<Route path='/register' element={<Register/>}></Route>
<Route path='/newpassword/:email' element={<NewPassword/>}></Route>
<Route path="/logout" element={<Logout/>}> </Route>
  </Routes>

  <Footer/> 
     </BrowserRouter>
</>

  );
}
export default App ;