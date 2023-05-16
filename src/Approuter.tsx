
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Main from './components/Main';
import Login from './components/Login';
import Join from './components/Join';
const Approuter =  ({ isLoggedIn, userdata}) => {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main  isLoggedIn={isLoggedIn} userdata ={userdata} />}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Join" element={<Join/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Approuter;