import { useContext,  } from "react";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthContext } from "../../Provider/Authprovider";
import useTitle from "../../Hook/useTitle";
import { useForm } from "react-hook-form";

const AddToys = () => {
  const { user } = useContext(AuthContext);

  const notify = () => toast("Toy Added");
  useTitle("Add Toys");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    fetch(" https://b7a11-toy-marketplace-server-side-rafid1149.vercel.app/post-toy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          notify()}
          
        });
  };
 
  

  return (
    <div className="w-9/12 mx-auto">
      <h2 className="my-5 text-2xl text-black text-center font-bold">
        Add your Toys
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="p-3 m-1 border-2 w-2/6 hidden"
          defaultValue={user.displayName}
          {...register("postedBy")}
        />
        <input
          className="p-3 m-1 border-2 w-2/6 hidden"
          defaultValue={user.email}
          {...register("email")}
        />
        <input
          required
          className="p-3 m-1 border-2 w-2/6"
          placeholder="Toy Name"
          {...register("name")}
          defaultValue="Red Racer"
        />
        <input
          required
          className="p-3 m-1 border-2 w-2/6"
          placeholder="Picture URL"
          {...register("url")}
          defaultValue="https://i.ibb.co/VSPjdMc/red-racer.jpg"
        />
        <br />
        <label className="label">
          <span className="label-text font-bold">Category</span>
        </label>
        <select
          required
          className="p-3 m-1 border-2 w-1/2"
          {...register("category")}
        >
          <option className="disabled selected"> </option>
          <option value="SportsCar"> Sports Car</option>
          <option value="Truck"> Truck</option>
          <option value="PoliceCar"> Police Car</option>
        </select>
        <br />
        <input
          required
          className="p-3 m-1 border-2 w-2/6"
          placeholder="Price"
          {...register("price")}
          defaultValue={100}
        />
        <input
          required
          className="p-3 m-1 border-2 w-2/6"
          placeholder="Rating"
          {...register("rating")}
          defaultValue={4.5}
        />
        <input
          required
          className="p-3 m-1 border-2 w-2/6"
          placeholder="Quantity"
          {...register("quantity")}
          defaultValue={10}
        />
        <input
          required
          className="p-3 m-1 border-2 w-4/5"
          placeholder="Description"
          {...register("description")}
          defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        />
        <br />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <div className="mx-auto">
          <input className="btn btn-primary my-5 " type="submit" />
        </div>
      </form>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddToys;
