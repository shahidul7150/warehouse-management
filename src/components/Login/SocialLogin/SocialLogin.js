import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import iconG from "../../../assets/google.png";
import auth from '../../../firebase.init';
const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
    let errorAlert
  if (error) {
    errorAlert=
      <div>
        <p className='text-red-600 py-1'><small>Error: {error.message}</small></p>
      </div>
    
    }
    if (loading) {
        return <h4>Loading...........</h4>
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div className='w-full'>
            {errorAlert}
            <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" onClick={()=>signInWithGoogle()} >
               <p className='flex items-center justify-center text-lg font-medium'><img className='w-5 mr-3' src={iconG} alt="" /> SignIn</p>
            </button>
            
        </div>
    );
};

export default SocialLogin;