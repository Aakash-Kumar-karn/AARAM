import "./App.css";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

import { BrowserRouter , Routes, Route } from "react-router-dom";
import {AuthProvider} from './Context/AuthContext'
import Feed from "./Components/Feed";
function App() {
  return (
    <BrowserRouter>
    
    <AuthProvider>
    <Routes>

<Route path='/signup' element={<Signup/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/feed' element={<Feed/>}/>

</Routes>

    </AuthProvider>
    
    </BrowserRouter>
  );
}

export default App;
