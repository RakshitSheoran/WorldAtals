import { NavLink, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <h1>Oops an Error Occurred !!</h1>
      <h2>{error.data}</h2>
      <NavLink to="/">
        {" "}
        <button>Go Home</button>
      </NavLink>
    </>
  );
}
