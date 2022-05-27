import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    return (
        <div>
            <h2>User Can See Name and Email </h2>
            <p>Name: {user?.displayName}</p>
            <p>Email Address: {user?.email}  </p>
            <h2>User Can update field </h2>
            <p>Education </p>
            <p>location city/district</p>
            <p>Phone Number</p>
            <p>LinkedIn profile link</p>
        </div>
    );
};

export default MyProfile;