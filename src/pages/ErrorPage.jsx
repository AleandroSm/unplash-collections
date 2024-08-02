import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div id="error-page" className="grid place-content-center h-screen font-bold text-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXEyMXIzZnhmaWN2eGJ4cnRtNGFrMXRucG9lbmgyOHd2aWwwaHhwYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RJz880umeI8e3PXnzt/giphy.webp" alt="eror image"/>
    </div>
  );
}