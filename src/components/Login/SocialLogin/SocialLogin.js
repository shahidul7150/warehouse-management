import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
    let errorAlert
  if (error) {
    errorAlert=
      <div>
        <p className='text-danger'>Error: {error.message}</p>
      </div>
    
    }
    if (loading) {
        return <h4>Loading...........</h4>
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div>
            {errorAlert}
            <button onClick={()=>signInWithGoogle()} className='btn btn-success d-block'>
                <img src="https://img.icons8.com/small/32/ffffff/google-logo.png" />
                Google SignIn
            </button>
            
        </div>
    );
};

export default SocialLogin;