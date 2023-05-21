import { Link } from "react-router-dom";

const Membership = () => {
    return (
        <div className="hero min-h-screen bg-base-200 my-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.ibb.co/y0n4P7m/f3.jpg" className="max-w-sm rounded-lg  shadow-2xl" />
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">Become a member of our community and boost your sell!</h1>
            <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequuntur labore dicta ut deserunt adipisci beatae dolores consequatur sapiente mollitia eaque quos nemo rerum veritatis, aliquam quod tenetur impedit sunt incidunt temporibus earum??

</p>
            <Link to='/register'> <button className="btn btn-warning">Sign Up</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Membership;