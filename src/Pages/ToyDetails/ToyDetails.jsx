import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import useTitle from "../../Hook/useTitle";


const SingleToy = () => {
    const toy = useLoaderData();

    useTitle(toy?.name);
    const {
        name,
        picture_url,
        rating,
        category,
        price,
        quantity,
        description,
        postedBy,
    } = toy;
    return (

        <div className="bg-base-200 rounded-xl my-12">
            <h1 className="text-5xl text-center pt-16 font-bold">{name}</h1>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={picture_url} className="max-w-sm rounded-lg  shadow-2xl" />
                    <div>
                        <div className="">
                            
                            <p>Rating: </p>
                            <Rating

                                style={{ maxWidth: 130 }}
                                value={rating}
                            ></Rating>
                        </div>
                        {postedBy && <p>Seller: {postedBy}</p>}
                        <p>Category: {category}</p>

                        <h1 className="text-4xl font-semibold textarea-accent mb-2">
                            Price: ${price}
                        </h1>

                        <p>Quantity: {quantity}</p>
                    </div>

                </div>


            </div>
            <div>
           <h3 className="text-3xl font-semibold text-center">Description</h3>
        <p className="w-1/2 mx-auto text-base pb-1">{description}</p>
         </div>
            
        </div>

       
    );
};

export default SingleToy;
