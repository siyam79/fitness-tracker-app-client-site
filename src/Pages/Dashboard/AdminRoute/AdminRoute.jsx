import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";
import useAuth from "../../../Hooks/useAuth";
import PropTypes from 'prop-types';
const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()
    console.log(location.pathname);

    if (loading || isAdminLoading) {

        return <div className="text-center mt-10 ">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (user && isAdmin) {
        return children

    }
    return <Navigate state={location.pathname} to='/login'></Navigate>

};
AdminRoute.propTypes = {
    children: PropTypes.object
}


export default AdminRoute;