
const ProfileUpdate = () => {



    return (
        <div>
            <form>
                <div className="mb-4 mt-10 ">
                    <label className="block  text-md font-semibold mb-2 " htmlFor=""> Your Name </label>
                    <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder="Your Name" name="name" required />
                   
                </div>
            </form>
        </div>
    );
};

export default ProfileUpdate;