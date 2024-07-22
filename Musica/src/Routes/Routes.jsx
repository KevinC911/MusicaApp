import { Route, Routes } from "react-router-dom";
import Login from '../Pages/Login/LoginPage';

function AllRoutes() {
    return(
        <>
        <Routes>
            <Route path='/' element={<Login/>}/>
        </Routes>
        </>
    )

}

export default AllRoutes