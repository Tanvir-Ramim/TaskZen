
import cover from '../assets/images/pic/coverPic.jpg'
import pp from '../assets/images/pic/no-profile-picture-icon.jpg'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
const UserProfile = () => {
  
    const {user}=useContext(AuthContext)
  return (
    <div className=' h-full mt-6  md:flex p-1  md:p-8 items-center justify-center'>
            <div className='bg-gray-500 md:w-[600px] shadow-lg order-2 '>
                <img className='h-36  overflow-hidden w-[600px] ' src={cover} alt="" />
                <div className='flex  justify-center -mt-6'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            {
                               user?.photoURL ?  <img src={user.photoURL} /> : <img src={pp} />
                            }

                        </div>
                    </div>
                </div>
                <div className='flex mt-5 justify-between p-2'>
                    <div>
                        <h1 className='text-lg font-semibold'>User Name:</h1>
                        <h1 className='text-lg font-bold'> {user?.displayName}</h1>
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold'>User Email:</h1>
                        <h1 className='text-lg font-bold'> {user?.email}</h1>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default UserProfile;
