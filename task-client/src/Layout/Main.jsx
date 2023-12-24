// import PropTypes from 'prop-types';

import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const Main = () => {
    const location =useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes("register")

    return (
        <div>
            {noHeaderFooter || <Navbar/>}
            <Outlet/>
            {noHeaderFooter || <Footer/>}
        </div>
    );
};

Main.propTypes = {
    
};

export default Main;