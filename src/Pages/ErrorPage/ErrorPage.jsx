
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16  text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img
          className="max-w-md"
          src="https://i.ibb.co/7kSgrdf/2676386-1.jpg"
          alt=""
        />
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-yellow-500">
            <span className="sr-only">Error</span>
            {status || 404}
          </h2>
          <Link to="/" className="btn bg-orange-500">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;

