import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <main className="main">
      <div className="responsive-wrapper">
        <div className="main-header">
          <h1>Error</h1>
        </div>
        <p>{err?.data}</p>
      </div>
    </main>
  );
};

export default Error;
