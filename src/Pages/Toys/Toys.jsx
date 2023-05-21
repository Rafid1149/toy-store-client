import { useEffect, useState } from "react";
import SingleToy from "./SingleToy";


const Toys = () => {

    const [toyCollection, setToyCollection] = useState([]);

    const [seeAll, setSeeAll] = useState(false);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/toys')
            .then(response => response.json())
            .then(data => {
                setToyCollection(data);
                setLoading(false);
            });
    }, [])

    if (loading) {
        return <div className="mx-auto text-center">
            <progress className="progress w-56  my-5 items-center"></progress>
        </div>
    }

    return (
        <div>
            <h2 className="text-center font-bold text-4xl my-6"> All Toys</h2>
            <div className="form-control my-5 w-full block">

                <input type="text" placeholder="search your toys" className="input input-bordered w-inherit" />
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                                SELLER NAME
                            </th>
                            <th>TOY NAME</th>
                            <th>CATEGORY</th>
                            <th>PRICE</th>
                            <th> QUANTITY</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !seeAll ?
                                toyCollection.slice(0, 20).map(toy => <SingleToy
                                    key={toy._id}
                                    toy={toy}
                                ></SingleToy>)
                                :

                                toyCollection.map(toy => <SingleToy
                                    key={toy._id}
                                    toy={toy}
                                ></SingleToy>)
                        }

                    </tbody>


                </table>
            </div>
            <div className="text-center">
                {
                    !seeAll &&
                    <button onClick={() => setSeeAll(!seeAll)} className="btn my-5">See All</button>
                }
            </div>
        </div>
    );
};

export default Toys;