import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({redirectTo, isAllowed, children}) => {
    if (!isAllowed) {
        return <Navigate to={redirectTo} replace />
    }

    return children ? children : <Outlet />;
};




// import { Navigate, Outlet } from 'react-router-dom';

// const ProtectedRoute = ({ user, redirectTo = "/login" }) => {
//     if (!user){
//         return <Navigate to={redirectTo} />
//     }
//     return <Outlet />
// }

export default ProtectedRoute;