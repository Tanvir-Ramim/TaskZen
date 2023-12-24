// import PropTypes from 'prop-types';

import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGoogle, BsGithub } from 'react-icons/bs';
import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
  const navigate = useNavigate();
  const {signInUser, googleSignIn} = useContext(AuthContext);
  const [errors, setErrors] = useState(null)
  const [loading, setLoading] = useState(false)
  
  const location=useLocation()

  
    const handleGoogleSignIn =()=>{
      googleSignIn()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          title: 'Logged In!',
          text: `${result.user?.displayName ? result.user.displayName : 'User'} Logged In successfully!`,
          imageUrl: result.user?.photoURL ? result.user.photoURL || result.user.photoURL : 'https://i.ibb.co/qnT81gF/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: "Custom image",
          confirmButtonText: 'Ok!',
        })
        navigate("/dashboard/CreateNewTask");   
        })
    }
    const from=location.state?.from?.pathname || '/'
    const handleLogin = e =>{
        e.preventDefault();
        setErrors("")
        setLoading(true);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then(result=>{
          console.log("Logged in successfully!", result.user);
          Swal.fire({
            title: 'Logged In!',
            text: `${result.user?.displayName ? result.user.displayName : 'User'} logged in successfully!`,
            imageUrl: result.user?.photoURL ? result.user.photoURL || result.user.photoURL : 'https://i.ibb.co/qnT81gF/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: "Custom image",
            confirmButtonText: 'Ok!',
          })
          setLoading(false)
          navigate(location?.state? from:'/')
        })
        .catch(error=>{
          console.error(error.message);
          setLoading(false);
          setErrors(error.message)
        })
       
    }

 
    return (
<>
<Helmet>
    <title>{`TaskZen | Log In`}</title>
</Helmet>
<div className="hero min-h-screen md:p-[80px] ">
  <div className="hero-content flex-col lg:flex-row w-full h-full border-[3px] border-gray-300 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
    <div className="text-center lg:text-left">
     <img src='https://media.istockphoto.com/id/1318100811/vector/login-screen-icon-on-white-background.jpg?s=612x612&w=0&k=20&c=zOPj77UDogeF8dO1vs5kAS3NE2GgHgazDCJWxR1FGUw=' className='lg:w-[80%] mx-auto' alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm ">
      <form onSubmit={handleLogin} className="card-body text-red-500">
      {/* <form className="card-body text-yellow-300"> */}
        <h1 className="text-red-500 font-bold text-3xl mx-auto">LOGIN</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-red-500 font-semibold">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-red-500 font-semibold">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="mb-6 input input-bordered" required />
          
          
        
        </div>
        <div><input className="border  p-2 rounded-lg cursor-pointer" type="submit" value="Submit" /></div>
         <div><h1>{errors}</h1></div>
        <p className="text-red-500 mx-auto">New here? <Link to="/register"><span className="font-bold">Create a new account</span></Link></p>
        <div className="flex flex-col items-center gap-3 mx-auto">
            <p className="text-red-500 font-semibold">Or sign in with</p>
            <div className="flex gap-6">
                <div onClick={handleGoogleSignIn} className="rounded-full p-2 border-2 border-red-500 hover:border-red-500 text-red-500 hover:text-red-500 duration-200">
              
                    <BsGoogle/>
                </div>
                <div className="rounded-full p-2 border-2 border-red-500 hover:border-red-500 text-red-500 hover:text-red-500 duration-200">
                    <BsGithub/>
                </div>
            </div>
        </div>
       
      </form>
    </div>
  </div>
</div>
</>

    );
};

Login.propTypes = {
    
};

export default Login;