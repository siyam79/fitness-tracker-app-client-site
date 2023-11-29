import { Navigate, useLocation } from "react-router-dom";

import PropTypes from 'prop-types';
import useIsTrainer from "../Hooks/useIsTrainer";
import useAuth from "../Hooks/useAuth";

const TrainerRoute = ({ children }) => {

    const { user, loading } = useAuth()
    const [isTrainer, isAdminLoading] = useIsTrainer()
    
    const location = useLocation()
    console.log(location.pathname);

    if (loading || isAdminLoading) {

        return <div className="text-center mt-10 ">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (user && isTrainer) {
        return children

    }
    return <Navigate state={location.pathname} to='/login'></Navigate>

};
TrainerRoute.propTypes = {
    children: PropTypes.object
}


export default TrainerRoute;