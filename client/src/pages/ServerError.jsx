import { useNavigate } from "react-router-dom"
import { ROUTE } from "../AppRoute";

function ServerError() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <p>
        </p>
        <p className="text-center">
          <span className="font-inter-light text-lg">
            Your Connection OK. But...
          </span>
          <br />
          <span className="text-3xl">
            <b>500</b> <span className="font-inter-light">Internal Server Error</span>
          </span>
          <br />
          <button className="text-white bg-black py-2 px-5 mt-3 rounded-lg" onClick={() => navigate(ROUTE.homepage)}>
            Refresh
          </button>
        </p>
      </div>
    </>
  )
}

export default ServerError