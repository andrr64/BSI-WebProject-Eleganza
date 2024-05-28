import Content from "./Content";
import ServerError from "./ServerError";
import Lottie from "react-lottie";
import loadingAnimation from "../assets/lotties/loading";

export  default  function Page(loading, server_status, render_function){
  const lottie_loading_opt = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  if (loading && server_status){
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="w-28 md:w-52">
          <Lottie options={lottie_loading_opt}/>
        </div>
      </div>
    )
  } 

  else if (!server_status && !loading){
    return <ServerError/>;  
  }
  return <Content main={render_function()}/>;
}