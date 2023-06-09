import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import { Link } from "react-router-dom";
import useTitle from "../../Hook/useTitle";

import Swal from "sweetalert2";


const MyToys = () => {
    useTitle('My Toys');

    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch(` https://b7a11-toy-marketplace-server-side-rafid1149.vercel.app/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data);
                setLoading(false);
            })

    }, [user])

    const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(` https://b7a11-toy-marketplace-server-side-rafid1149.vercel.app/toyDelete/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.deletedCount) {
                const remainingToys = toys.filter((toy) => toy._id !== id);
                setToys(remainingToys);
              }
            });
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    };
    const handleSortByPrice = async (sortOrder) => {
      try {
        const response = await fetch(
          ` https://b7a11-toy-marketplace-server-side-rafid1149.vercel.app/myToys/${user?.email}/sortByPrice/${sortOrder}`
        );
        const data = await response.json();
        setToys(data);
      } catch (error) {
        console.error("Error sorting toys:", error);
      }
    };

if (loading) {
    return <div className="mx-auto text-center">
      <progress className="progress w-56  my-5 items-center"></progress>
    </div>
  }
  

    return (
        <div className="my-12">
            <div className="overflow-x-auto w-full block mx-auto">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>NAME</th>
                            <th>CATEGORY</th>
                            <th>
                Price 
                <div className="flex justify-evenly items-center -ms-5">
                  <button
                    className="sort-button text-xl text-primary"
                    onClick={() => handleSortByPrice("asc")}
                  >
                    ↑
                  </button>
                  <button
                    className="sort-button text-xl text-primary"
                    onClick={() => handleSortByPrice("desc")}
                  >
                    ↓
                  </button>
                </div>
              </th>
                            <th> QUANTITY</th>
                            <th>DETAILS</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {toys.map((toy, index) => (
              <tr key={toy._id}>
                <th>{index + 1}</th>
                <td>{toy.name}</td>
                <td>{toy.category}</td>
                <td>{toy.price}</td>
               
                <td>{toy.quantity}</td>
                <td>{toy.description.slice(0, 50)}....</td>
                <td>
                  <Link to={`/updateToy/${toy._id}`}>
                    <button className="btn btn-accent">Edit</button>
                  </Link>
</td>
                <td>
                  <button
                    onClick={() => handleDelete(toy._id)}
                    className="btn btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

                    </tbody>


                </table>
            </div>
            <div className="text-center">
                {

                }
            </div>

        </div>
    );
};

export default MyToys;