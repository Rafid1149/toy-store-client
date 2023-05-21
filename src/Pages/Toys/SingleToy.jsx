import PrivateRoute from "../../Routes/PrivateRoute";


// eslint-disable-next-line react/prop-types
const SingleToy = ({ toy }) => {
    console.log(toy);
    // eslint-disable-next-line react/prop-types
    const {  postedBy, quantity, price, name, category } = toy;

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
              <PrivateRoute> <button className="btn btn-success"> View Details</button></PrivateRoute>
            </th>
        </tr>
    );
};

export default SingleToy;