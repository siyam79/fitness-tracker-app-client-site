import useSubscriber from "../../../Hooks/useSubscriber";


const AllSubscibers = () => {

    const [allSubscriber] = useSubscriber()



    return (
        <div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-base-300">
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allSubscriber.map((subscriber , i) => <tr key={subscriber._id} className="bg-base-200">
                                <th>{i+1} </th>
                                <td>{subscriber.name}</td>
                                <td>{subscriber.email}</td>
                                <button>Subscriber</button>
                            </tr>)}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllSubscibers;