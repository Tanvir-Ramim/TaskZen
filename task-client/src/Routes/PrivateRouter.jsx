import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
const PrivateRouter = ({children}) => {
    const location=useLocation()
    const {user,loading}=useContext(AuthContext)
     
    if(loading)
    {
         return  <span className="loading loading-spinner loading-lg"></span>
    }
        
    if(user && !loading){
        return children
   }

    return  <Navigate state={{from:location}} replace to='/login'></Navigate>
    
};

PrivateRouter.propTypes={
    children:PropTypes.node
}

export default PrivateRouter;