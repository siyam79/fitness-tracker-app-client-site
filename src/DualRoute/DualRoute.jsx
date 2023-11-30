import { Navigate, useLocation } from "react-router-dom";

import PropTypes from 'prop-types';
import useIsTrainer from "../Hooks/useIsTrainer";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const DualRoute = ({ children }) => {

    const { user, loading } = useAuth()
    const [isTrainer, isAdminLoading] = useIsTrainer()
    const [isAdmin,] = useAdmin()
    const location = useLocation()
    console.log(location.pathname);

    if (loading || isAdminLoading ) {

        return <div className="text-center mt-10 ">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (user && isTrainer || isAdmin) {
        return children

    }
    return <Navigate state={location.pathname} to='/login'></Navigate>

};
DualRoute.propTypes = {
    children: PropTypes.object
}


export default DualRoute;