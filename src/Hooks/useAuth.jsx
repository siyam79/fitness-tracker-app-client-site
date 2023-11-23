
// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useAuth = () => {

    const allInformation = useContext(AuthContext)
    return allInformation ; 
};

export default useAuth;
