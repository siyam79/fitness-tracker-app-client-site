import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useProfile from "../../../Hooks/useProfile";

const Profile = () => {
    const { user: loggedInUser } = useAuth();
    const [users] = useProfile()
    // console.log(users);

    const currentUser = users.find(u => u.email === loggedInUser.email);

    console.log(currentUser);


    return (
        <div>
            <div>
                <div className="card w-60 bg-base-100 shadow-xl">

                    <div className="card-body items-center text-center">
                        <div className="avatar online">
                            <div className="w-24 rounded-full">
                                <img src={currentUser?.img}/>
                            </div>
                        </div>
                        <h2 className="card-title">{currentUser?.name} </h2>
                        <p> {currentUser?.email}</p>
                        <div className="card-actions">
                            <Link to={`/updateProFile/${currentUser?._id}`}><button className="btn mt-4 ">Update Now</button></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;