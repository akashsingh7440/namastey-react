import { useRouteError } from "react-router";

const ErrorComponent = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error-container">
      <h1>
        {error?.status} | {error?.statusText}{" "}
      </h1>
      <p>{error?.error?.message}</p>
    </div>
  );
};

export default ErrorComponent;
