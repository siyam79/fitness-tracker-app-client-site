import useAllTainers from "../../../Hooks/useAllTainers"
import useTrainers from "../../../Hooks/useTrainers";

const AllTrainers = () => {


    const [allTrainer] = useAllTainers()
    return (
        <div>
            AllTrainers
            <h1>trainer {allTrainer.length} </h1>

            <div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Salary</th>
                                <th>Pyment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allTrainer.map((trainer , i) => <tr key={trainer._id}>
                                    <th>{i + 1}</th>
                                    <td>{trainer.trainerName}</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>)
                            }
                           


                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AllTrainers;