import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ErroApiPage = () => {
    const location = useLocation();
    const error = location.state?.message || "An unexpected error has occurred.";
    const navigate = useNavigate()
    return (
      <div id="error-page" className="grid h-screen place-content-center text-center font-bold">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error}</i>
        </p>
        <button onClick={() => navigate("/")}>Go to Home</button>
      <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXEyMXIzZnhmaWN2eGJ4cnRtNGFrMXRucG9lbmgyOHd2aWwwaHhwYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RJz880umeI8e3PXnzt/giphy.webp" alt="eror image"/>
      </div>
    );
}

export default ErroApiPage;