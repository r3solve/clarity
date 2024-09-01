import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();

return (
  <div className="w-full h-screen flex flex-col  items-center">
    <h1 className="text-gray-600 font-medium mt-40 font-inter text-2xl">
      404 Page Not Found
    </h1>
    <Link className="text-gray-600 underline font-light font-inter text-xl my-3" to={'/'}>Go Home </Link>
  </div>
);
}
