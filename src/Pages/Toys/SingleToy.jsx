import { Link } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const SingleToy = ({ toy }) => {
    console.log(toy);
    // eslint-disable-next-line react/prop-types
    const {_id , postedBy, quantity, price, name, category } = toy;

    return (
        
        <tr>
            <th>
               <td> <div className="font-bold">{postedBy}</div></td>
            </th>
            <td>     
                    <div className="font-bold">{name}</div>
            </td>
            <td>     
                    <div className="font-bold">{category}</div>
            </td>
            <td>
                {price}
            </td>
            <td>{quantity}</td>
            <th>
            <Link to={`/toy/${_id}`}> <button className="btn btn-success"> View Details</button></Link>
            </th>
        </tr>
    );
};

export default SingleToy;