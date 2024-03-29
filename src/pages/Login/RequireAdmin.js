import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import { signOut } from 'firebase/auth';
import Loading from '../Shared/Loading/Loading';


function RequireAdmin({ children }) {

    let [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    let location = useLocation();

    if (loading || adminLoading) {
        return <Loading loadingStatus="true"></Loading>
    }

    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAdmin;