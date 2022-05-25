import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../hooks/useToken';

const Google = () => {
  const [signInWithGoogle, guser, loading, error] = useSignInWithGoogle(auth);
  const [token] = useToken(guser)
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (token || guser) {
    navigate(from, { replace: true });
  }
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div class="form-control mt-6">
      <button class="btn btn-primary" onClick={() => signInWithGoogle()}>Google Sign In</button>
    </div>
  );
};

export default Google;