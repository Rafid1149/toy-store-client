import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../Hook/useTitle";


const UpdateToys = () => {
  const toy = useLoaderData();
  console.log(toy);
  useTitle(`Update ${toy.name}`);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(
      ` https://b7a11-toy-marketplace-server-side-rafid1149.vercel.app/updateToy/${toy._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Your Toy has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="w-9/12 mx-auto my-10">
      <h2 className="mb-5 text-5xl text-gray-950 text-center font-bold">
        Update Your Product
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <p>Price</p>
        <input
          required
          className="p-3 m-1 border-2 w-2/6"
          placeholder="Price"
          {...register("price")}
          defaultValue={toy.price}
        />
        <p>Quantity</p>
        <input
          required
          className="p-3 m-1 border-2 w-2/6"
          placeholder="Quantity"
          {...register("quantity")}
          defaultValue={toy.quantity}
        />
        <p>Description</p>
        <input
          required
          className="p-3 m-1 border-2 w-4/5"
          placeholder="Description"
          {...register("description")}
          defaultValue={toy.description}
        />
        <br />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input value="Update" className="btn btn-warning" type="submit" />
      </form>
    </div>
  );
};

export default UpdateToys;
