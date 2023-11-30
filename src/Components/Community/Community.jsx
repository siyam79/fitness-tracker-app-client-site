import useForum from "../../Hooks/useForum";

const Community = () => {

    const [forum] = useForum()
    console.log(forum);
    return (
        <div>
            <div>
                {
                    forum.map(item => <div key={item._id} className="card card-side bg-base-100 shadow-xl">
                        <figure><img className="w-20 rounded-full" src="https://i.ibb.co/wLZp3wC/images-1.jpg" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Watch</button>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Community;