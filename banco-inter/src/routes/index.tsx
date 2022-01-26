import {
    BrowserRouter,
    Routes,
    Route
  } from 'react-router-dom';

  import SignIn from '../pages/Signin';
  import SignUp from '../pages/Signup';
  import Dashboard from '../pages/DashBoard';

  const Router = ()=>{
     return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />}/>
            <Route path="/signin" element={<SignIn />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
          </Routes>
       </BrowserRouter>
     )
   }

   export default Router