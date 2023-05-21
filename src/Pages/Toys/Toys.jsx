import { useEffect, useState } from "react";
import SingleToy from "./SingleToy";
import useTitle from "../../Hook/useTitle";


const Toys = () => {

    const [searchText, setSearchText] = useState('');

    useTitle('Toys')
    const [toyCollection, setToyCollection] = useState([]);

    const [seeAll, setSeeAll] = useState(false);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(' https://b7a11-toy-marketplace-server-side-rafid1149.vercel.app/toys')
            .then(response => response.json())
            .then(data => {
                setToyCollection(data);
                setLoading(false);
            });
    }, [])
    useEffect( () =>{
        fetch(` https://b7a11-toy-marketplace-server-side-rafid1149.vercel.app/searchToy/${searchText}`)
        .then(res => res.json())
        .then(data => setToyCollection(data))
    } , [searchText])

    if (loading) {
        return <div className="mx-auto text-center">
            <progress className="progress w-56  my-5 items-center"></progress>
        </div>
    }

    return (
        <div>
            <h2 className="text-center font-bold text-4xl my-6"> All Toys</h2>
            <div className="form-control my-5 w-full block">

                <input type="text" onChange={event => setSearchText(event.target.value)} placeholder="search your toys" className="input input-bordered w-inherit" />
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